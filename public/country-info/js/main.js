function findGetParameter(parameterName) {
  var result = null,
    tmp = [];
  location.search
    .substr(1)
    .split("&")
    .forEach(function(item) {
      tmp = item.split("=");
      if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
  return result;
}

countryName = findGetParameter("name");

document.getElementById("Country").innerText = countryName;

var travelRisk = [
  {
    Country: "Yemen",
    "Risk Level": "Level 4: Do Not Travel",
    "Risk Level Description":
      "Do not travel to Yemen due to terrorism, civil unrest, health risks, and armed conflict."
  },
  {
    Country: "Haiti",
    "Risk Level": "Level 4: Do Not Travel",
    "Risk Level Description":
      "Do not travel to Haiti due to crime and civil unrest."
  },
  {
    Country: "Afghanistan",
    "Risk Level": "Level 4: Do Not Travel",
    "Risk Level Description":
      "Do not travel to Afghanistan due to armed conflict, terrorism, crime, and civil unrest."
  },
  {
    Country: "Venezuela",
    "Risk Level": "Level 4: Do Not Travel",
    "Risk Level Description":
      "Do not travel to Venezuela due to crime, civil unrest, poor health infrastructure, and arbitrary arrest and detention of U.S. citizens."
  },
  {
    Country: "Somalia",
    "Risk Level": "Level 4: Do Not Travel",
    "Risk Level Description":
      "Do not travel to Somalia due to crime, terrorism, and piracy."
  },
  {
    Country: "North Korea (Democratic People's Republic of Korea)",
    "Risk Level": "Level 4: Do Not Travel",
    "Risk Level Description":
      "Do not travel to North Korea due to the serious risk of arrest and long-term detention."
  },
  {
    Country: "South Sudan",
    "Risk Level": "Level 4: Do Not Travel",
    "Risk Level Description":
      "Do not travel to South Sudan due to crime and armed conflict."
  },
  {
    Country: "Iraq",
    "Risk Level": "Level 4: Do Not Travel",
    "Risk Level Description":
      "Do not travel to Iraq due to terrorism and armed conflict."
  },
  {
    Country: "Iran",
    "Risk Level": "Level 4: Do Not Travel",
    "Risk Level Description":
      "Do not travel to Iran due to the risk of arbitrary arrest and detention."
  },
  {
    Country: "Central African Republic",
    "Risk Level": "Level 4: Do Not Travel",
    "Risk Level Description":
      "Do not travel to Central African Republic (CAR) due to crime and civil unrest. Violent crime, such as armed robbery, aggravated battery, and homicide, is common."
  },
  {
    Country: "Syria",
    "Risk Level": "Level 4: Do Not Travel",
    "Risk Level Description":
      "Do not travel to Syria due to terrorism, civil unrest, and armed conflict."
  },
  {
    Country: "Mali",
    "Risk Level": "Level 4: Do Not Travel",
    "Risk Level Description":
      "Do not travel to Mali due to crime and terrorism."
  },
  {
    Country: "Libya",
    "Risk Level": "Level 4: Do Not Travel",
    "Risk Level Description":
      "Do not travel to Libya due to crime, terrorism, civil unrest, and armed conflict. Crime levels in Libya remain high, including the threat of kidnapping for ransom. Westernershave been targets of these crimes."
  },
  {
    Country: "Turkey",
    "Risk Level": "Level 3: Reconsider Travel",
    "Risk Level Description":
      "Reconsider travel to Turkey due to terrorism and arbitrary detentions. Some areas have increased risk. Read the entire Travel Advisory.Do not travel to areas near the Syria and Iraq borders due to terrorism."
  },
  {
    Country: "Burkina Faso",
    "Risk Level": "Level 3: Reconsider Travel",
    "Risk Level Description":
      "Reconsider travel to Burkina Faso due to terrorism.  Do not travel to the Sahel Region due to crime and terrorism, the East Region due to crime and terrorism, the Provinces of Koulpelogo, Loroum, Yatenga, Sourou, Kossi, Banwa, Kenedougou, or within 50km of the Mali border in Houet Province due to crime and terrorism."
  },
  {
    Country: "Pakistan",
    "Risk Level": "Level 3: Reconsider Travel",
    "Risk Level Description":
      "Reconsider travel to Pakistan due to terrorism. Do not travel to Balochistan province and Khyber Pakhtunkhwa (KPK) province, including the former Federally Administered Tribal Areas (FATA), due to terrorism, the Azad Kashmir area due to terrorism and the potential for armed conflict."
  },
  {
    Country: "Nigeria",
    "Risk Level": "Level 3: Reconsider Travel",
    "Risk Level Description":
      "Reconsider travel to Nigeria due to elections, crime, terrorism, civil unrest, and piracy. Do not travel to Borno and Yobe States and northern Adamawa State due to terrorism"
  },
  {
    Country: "Congo DRC",
    "Risk Level": "Level 3: Reconsider Travel",
    "Risk Level Description":
      "Reconsider travel to the Democratic Republic of the Congo (DRC) due to crime and civil unrest. Do not travel to Eastern DRC and the three Kasai provinces due to armed conflict."
  },
  {
    Country: "Chad",
    "Risk Level": "Level 3: Reconsider Travel",
    "Risk Level Description":
      "Reconsider travel to Chad due to crime, terrorism, and minefields."
  },
  {
    Country: "El Salvador",
    "Risk Level": "Level 3: Reconsider Travel",
    "Risk Level Description": "Reconsider travel to El Salvador due to crime."
  },
  {
    Country: "Sudan",
    "Risk Level": "Level 3: Reconsider Travel",
    "Risk Level Description":
      "Reconsider travel to Sudan due to terrorism and civil unrest. Do not travel to the Darfur region, Blue Nile state, and South Kordofan state due to crime and armed conflict."
  },
  {
    Country: "Mauritania",
    "Risk Level": "Level 3: Reconsider Travel",
    "Risk Level Description":
      "Reconsider Travel to Mauritania due to crime and terrorism"
  },
  {
    Country: "Niger",
    "Risk Level": "Level 3: Reconsider Travel",
    "Risk Level Description":
      "Reconsider travel to Niger due to crime and terrorism. Violent crime, such as armed robbery, is common."
  },
  {
    Country: "Honduras",
    "Risk Level": "Level 3: Reconsider Travel",
    "Risk Level Description":
      "Reconsider travel to Honduras due to crime. Do not travel to Gracias a Dios Department due to crime."
  },
  {
    Country: "Nicaragua",
    "Risk Level": "Level 3: Reconsider Travel",
    "Risk Level Description":
      "Reconsider travel to Nicaragua due to�crime,�civil unrest,�limited healthcare availability, and arbitrary enforcement of laws."
  },
  {
    Country: "Lebanon",
    "Risk Level": "Level 3: Reconsider Travel",
    "Risk Level Description":
      "Reconsider travel Lebanon due to crime, terrorism, and armed conflict. Do not travel to the border with Syria due to terrorism and armed conflict, the border with Israel due to the potential for armed conflict, refugee settlements due to the potential for armed conflict"
  },
  {
    Country: "Burundi",
    "Risk Level": "Level 3: Reconsider Travel",
    "Risk Level Description":
      "Reconsider travel to Burundi due to crime and armed conflict."
  },
  {
    Country: "Guinea-Bissau",
    "Risk Level": "Level 3: Reconsider Travel",
    "Risk Level Description":
      "Reconsider travel to Guinea-Bissau due to crime and civil unrest."
  },
  {
    Country: "Dominican Republic",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in the Dominican Republic due to crime."
  },
  {
    Country: "Egypt",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Egypt due to terrorism. The Sinai Peninsula (with the exception of travel to Sharm El-Sheikh by air) due to terrorism, the Western Desert due to terrorism, Egyptian border areas due to military zones."
  },
  {
    Country: "Brazil",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Brazil due to crime. Do not travel to, any areas within 150 km of Brazil?s land borders with Venezuela, Colombia, Peru, Bolivia, Guyana, Suriname, French Guiana, and Paraguay due to crime. (Note: This does not apply to the Foz do Iguacu National Park or Pantanal National Park.). Do not use public buses in and around Recife due to crime, Informal housing developments (commonly referred to in Brazil as favelas, vilas, communidades, and/or conglomerados), at any time of day due to crime, Brasilia?s administrative regions (commonly known as ?satellite cities?) of Ceilandia, Santa Maria, Sao Sebastiao, and Paranoa during non-daylight hours due to crime, Recife?s Pina Beach from Dona Benvinda de Farias Street to the Brasilia Teimosa neighborhood after dark due to crime (see additional information below)."
  },
  {
    Country: "Guinea",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Guinea due to civil unrest."
  },
  {
    Country: "Ethiopia",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution when traveling in Ethiopia due to sporadic civil unrest and communications disruptions. Some areas have increased risk. Read the entire Travel Advisory. Do Not Travel To Somali Regional State due to potential for civil unrest, terrorism, and landmines. Reconsider Travel To the East Hararge region and the Guji zone of Oromia State due to armed conflict and civil unrest, Benishangul Gumuz and the western part of Oromia State due to armed conflict and civil unrest. The Danakil Depression region in Afar due to crime, Border areas with Kenya, Sudan, South Sudan, and Eritrea due to crime, armed conflict, and civil unrest."
  },
  {
    Country: "Antarctica",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Antarctica due to�environmental hazards posed by extreme and unpredictable weather.�"
  },
  {
    Country: "Nepal",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Nepal due to the potential for isolated political violence."
  },
  {
    Country: "Algeria",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution when traveling in Algeria due to terrorism. Do not travel to areas near the eastern and southern borders due to terrorism, areas in the Sahara Desert due to terrorism."
  },
  {
    Country: "Belize",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Belize due to crime."
  },
  {
    Country: "Indonesia",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Indonesia due to terrorism and natural disasters. Reconsider travel to Central Sulawesi and Papua due to civil unrest."
  },
  {
    Country: "China",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in China due to arbitrary enforcement of local laws."
  },
  {
    Country: "Tunisia",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Tunisia due to terrorism. Some areas have increased risk. Read the entire Travel Advisory. Do not travel to within 30 km of southeastern Tunisia along the border with Libya due to terrorism, mountainous areas in the country?s west, including the Chaambi Mountain National Park area, due to terrorism the desert south of Remada due to the military zone, Jendouba south of Ain Drahem and west of RN15, El Kef, and Kasserine, next to the Algerian border due to terrorism, Sidi Bou Zid in central Tunisia due to terrorism."
  },
  {
    Country: "Serbia",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Serbia due to crime."
  },
  {
    Country: "Italy",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Italy due to terrorism."
  },
  {
    Country: "Israel, The West Bank and Gaza",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Israel due to terrorism. Do not travel to Gaza due to terrorism, civil unrest, and armed conflict. Reconsider travel to the West Bank due to terrorism, potentially violent civil unrest, and the potential for armed conflict."
  },
  {
    Country: "Tanzania",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Tanzania due to crime, terrorism, and targeting of LGBTI persons."
  },
  {
    Country: "France",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in France due to terrorism."
  },
  {
    Country: "Burma (Myanmar)",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Burma due to areas of civil unrest and armed conflict.�"
  },
  {
    Country: "Belgium",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Belgium due to terrorism."
  },
  {
    Country: "United Kingdom",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in the United Kingdom due to terrorism."
  },
  {
    Country: "Uganda",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Uganda due to crime."
  },
  {
    Country: "Azerbaijan",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Azerbaijan due to the risk of terrorism."
  },
  {
    Country: "Jordan",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Jordan due to terrorism. Do not travel to the border with Syria and Iraq due to terrorism and armed conflict."
  },
  {
    Country: "Côte d'Ivoire",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Cote d?Ivoire due to crime and terrorism."
  },
  {
    Country: "Russian Federation",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise Increased Caution due to terrorism, harassment, and the arbitrary enforcement of local laws. Some areas have increased risk. Read the entire Travel Advisory. Do not travel to the north Caucasus, including Chechnya and Mount Elbrus, due to terrorism and risk of civil unrest, Crimea due to Russia?s occupation of the Ukrainian territory and abuses by its occupying authorities."
  },
  {
    Country: "Spain",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Spain due to terrorism."
  },
  {
    Country: "Ukraine",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Ukraine due to crime and civil unrest. Some areas have increased risk. Read the entire Travel Advisory."
  },
  {
    Country: "Sierra Leone",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Sierra Leone due to crime."
  },
  {
    Country: "Mexico",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Mexico due to crime. Some areas have increased risk. Read the entire Travel Advisory."
  },
  {
    Country: "Comoros",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in The Union of the Comoros due to civil unrest."
  },
  {
    Country: "South Africa",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in South Africa due to crime, civil unrest, and drought."
  },
  {
    Country: "Netherlands",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in the Netherlands due to terrorism."
  },
  {
    Country: "Cuba",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Cuba�due to attacks targeting U.S. Embassy Havana employees resulting in the drawdown of embassy staff."
  },
  {
    Country: "Tajikistan",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Tajikistan due to terrorism."
  },
  {
    Country: "Madagascar",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased precautions in Madagascar due to civil unrest and crime."
  },
  {
    Country: "Guatemala",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Guatemala due to crime."
  },
  {
    Country: "Papua New Guinea",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Papua New Guinea due to crime, civil unrest, and a polio outbreak"
  },
  {
    Country: "Bangladesh",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Bangladesh due to crime and terrorism."
  },
  {
    Country: "Zimbabwe",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Zimbabwe due to crime and civil unrest."
  },
  {
    Country: "Colombia",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Colombia due to�crime and terrorism.�"
  },
  {
    Country: "Denmark",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Denmark due to terrorism."
  },
  {
    Country: "Bosnia and Herzegovina",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Bosnia-Herzegovina due to terrorism and land mines."
  },
  {
    Country: "Germany",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Germany due to terrorism."
  },
  {
    Country: "Kosovo",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Kosovo due to terrorism."
  },
  {
    Country: "Guyana",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Guyana due to crime."
  },
  {
    Country: "Saudi Arabia",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Saudi Arabia due to terrorism and the threat of missile attacks on civilian targets."
  },
  {
    Country: "Philippines",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in the Philippines due to crime, terrorism, civil unrest, and a measles outbreak."
  },
  {
    Country: "Cameroon",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Cameroon due to crime."
  },
  {
    Country: "Republic of the Congo",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in the Republic of the Congo due to crime and civil unrest."
  },
  {
    Country: "Kenya",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Kenya due to crime and terrorism."
  },
  {
    Country: "Eritrea",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Eritrea due to travel restrictions and limited consular assistance."
  },
  {
    Country: "Trinidad and Tobago",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Trinidad and Tobago due to crime and terrorism."
  },
  {
    Country: "Maldives",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Maldives due to terrorism and civil unrest."
  },
  {
    Country: "Turks and Caicos Islands",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in the Turks and Caicos Islands due to crime."
  },
  {
    Country: "The Bahamas",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in The Bahamas due to crime."
  },
  {
    Country: "Jamaica",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Jamaica due to crime."
  },
  {
    Country: "India",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in India due to crime and terrorism."
  },
  {
    Country: "Ghana",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Mozambique",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Uruguay",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Thailand",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Benin",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Sri Lanka",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Bhutan",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Togo",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Paraguay",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Sao Tome and Principe",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Gabon",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Saint Vincent and The Grenadines",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Saint Lucia",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Mongolia",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Canada",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Sint Maarten",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Montserrat",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Grenada",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Curacao",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Cayman Islands",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Bonaire, Sint Eustatius and Saba",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Bermuda",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Barbados",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Aruba",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Liberia",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Cambodia",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Georgia",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Vietnam",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Taiwan",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Qatar",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Luxembourg",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Croatia",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Bahrain",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Montenegro",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Macau",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Hong Kong",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Slovenia",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Slovakia",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Poland",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Mauritius",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Macedonia",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Timor-Leste",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Singapore",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Japan",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "South Korea",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Malawi",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Lesotho",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Fiji",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Vanuatu",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Solomon Island",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Palau",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "New Caledonia",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Namibia",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "French Polynesia",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Angola",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Zambia",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Tuvalu",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Nauru",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Eswatini",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Botswana",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Uzbekistan",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "United Arab Emirates",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Samoa",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Kuwait",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Czech Republic",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Turkmenistan",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Seychelles",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Djibouti",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "The Gambia",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Marshall Islands",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Equatorial Guinea",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Australia",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Malaysia",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Cabo Verde",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Argentina",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Micronesia",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Austria",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "New Zealand",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Tonga",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Ireland",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "French Guiana",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Suriname",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Kiribati",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Bulgaria",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Brunei",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Finland",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Switzerland",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Norway",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Costa Rica",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Andorra",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Chile",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Hungary",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Estonia",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Bolivia",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Romania",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Latvia",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Iceland",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Peru",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Laos",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Moldova",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Greece",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Malta",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Portugal",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Lithuania",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Cyprus",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Belarus",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Albania",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Kazakhstan",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Senegal",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Panama",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Saint Kitts and Nevis",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Oman",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Sweden",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "The Kyrgyz Republic",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Ecuador",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Armenia",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Dominica",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "British Virgin Islands",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Anguilla",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Rwanda",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Morocco",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "French West Indies",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Antigua and Barbuda",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  }
];

var arrayLength = travelRisk.length;

for (var i = 0; i < arrayLength; i++) {
  if (travelRisk[i].Country.toLowerCase() == countryName.toLowerCase()) {
    document.getElementById("saftey-level").innerText = travelRisk[i][
      "Risk Level"
    ].slice(0, 7);
    document.getElementById("saftey-level-description").innerText =
      travelRisk[i]["Risk Level Description"];
  }
}
