import scrapy
from scrapy.utils.response import open_in_browser
from scrapy.shell import inspect_response
import json

alert_content = {}

class NewsHealthStory(scrapy.Spider):
    name = "healthstory"

    def start_requests(self):
        url = 'https://wwwnc.cdc.gov/travel/destinations/list'
        yield scrapy.Request(url, callback=self.pre_parse)

    def pre_parse(self, response):
        for href in response.css('ul.list-bullet > li > a::attr(href)'):
            url = response.urljoin(href.extract())
            yield scrapy.Request(url, callback = self.parse_dir_contents)

    def parse_dir_contents(self, response):
        country = response.url[56:]
        country = country.replace('-', ' ')
        for summary in response.css('.summary::text'):
            print(summary)
            content = summary.extract()
            alert_content[country] = content

        with open('all_summaries.json', 'w') as outfile:
            json.dump(alert_content, outfile)
