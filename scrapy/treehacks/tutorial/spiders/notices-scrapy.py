import scrapy
from scrapy.utils.response import open_in_browser
from scrapy.shell import inspect_response
import json

alert_levels = {}

class HealthNoticeSpider(scrapy.Spider):
    name = "healthnotice"

    def start_requests(self):
        url = 'https://wwwnc.cdc.gov/travel/destinations/list'
        yield scrapy.Request(url, callback=self.pre_parse)

    def pre_parse(self, response):
        for href in response.css('ul.list-bullet > li > a::attr(href)'):
            url = response.urljoin(href.extract())
            yield scrapy.Request(url, callback = self.parse_dir_contents)

    def parse_dir_contents(self, response):
        country = response.url[56:]
        country = chr(ord(country[0]) - 32) + country[1:]
        country = country.replace('-', ' ')
        for text in response.css('div.module-th h4.notice-typename').xpath("//h4/text()"):
            d = text.extract()
            alert_levels[country] = d
        with open('all_levels.json', 'w') as outfile:
            json.dump(alert_levels, outfile)
