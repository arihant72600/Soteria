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

countryName = findGetParameter("name").replace("+", " ");

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
      "Reconsider travel to Turkey due to terrorism and arbitrary detentions. Some areas have increased risk. Read the entire Travel Advisory. Do not travel to areas near the Syria and Iraq borders due to terrorism."
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
      "Exercise increased caution in Côte d'Ivoire due to crime and terrorism."
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
  },
  {
    Country: "United States",
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
    document.getElementById("saftey-level-blurb").innerText = travelRisk[i][
      "Risk Level"
    ].slice(8);
    document.getElementById("saftey-level-description").innerText =
      travelRisk[i]["Risk Level Description"];
  }
}

var healthLevels = {
  belgium: "Watch Level 1, Practice Usual Precautions",
  barbados: "Alert Level 2, Practice Enhanced Precautions",
  belize: "Alert Level 2, Practice Enhanced Precautions",
  "bosnia and herzegovina": "Watch Level 1, Practice Usual Precautions",
  bonaire: "Alert Level 2, Practice Enhanced Precautions",
  sudan: "Watch Level 1, Practice Usual Precautions",
  yemen: "Watch Level 1, Practice Usual Precautions",
  vietnam: "Watch Level 1, Practice Usual Precautions",
  venezuela: "Warning Level 3, Avoid Nonessential Travel",
  uruguay: "Watch Level 1, Practice Usual Precautions",
  ukraine: "Watch Level 1, Practice Usual Precautions",
  turkey: "Watch Level 1, Practice Usual Precautions",
  tonga: "Watch Level 1, Practice Usual Precautions",
  "trinidad and tobago": "Alert Level 2, Practice Enhanced Precautions",
  thailand: "Watch Level 1, Practice Usual Precautions",
  taiwan: "Watch Level 1, Practice Usual Precautions",
  switzerland: "Watch Level 1, Practice Usual Precautions",
  "south sudan": "Alert Level 2, Practice Enhanced Precautions",
  "south korea": "Watch Level 1, Practice Usual Precautions",
  somalia: "Alert Level 2, Practice Enhanced Precautions",
  "solomon islands": "Alert Level 2, Practice Enhanced Precautions",
  slovenia: "Watch Level 1, Practice Usual Precautions",
  slovakia: "Watch Level 1, Practice Usual Precautions",
  "sint maarten": "Alert Level 2, Practice Enhanced Precautions",
  "sint eustatius": "Alert Level 2, Practice Enhanced Precautions",
  serbia: "Watch Level 1, Practice Usual Precautions",
  senegal: "Watch Level 1, Practice Usual Precautions",
  singapore: "Watch Level 1, Practice Usual Precautions",
  samoa: "Alert Level 2, Practice Enhanced Precautions",
  "saint martin": "Alert Level 2, Practice Enhanced Precautions",
  "saint lucia": "Alert Level 2, Practice Enhanced Precautions",
  "st kitts and nevis": "Alert Level 2, Practice Enhanced Precautions",
  "usvirgin islands": "Alert Level 2, Practice Enhanced Precautions",
  saba: "Alert Level 2, Practice Enhanced Precautions",
  "russian federation": "Watch Level 1, Practice Usual Precautions",
  romania: "Watch Level 1, Practice Usual Precautions",
  portugal: "Watch Level 1, Practice Usual Precautions",
  poland: "Watch Level 1, Practice Usual Precautions",
  philippines: "Watch Level 1, Practice Usual Precautions",
  "papua new guinea": "Alert Level 2, Practice Enhanced Precautions",
  pakistan: "Alert Level 2, Practice Enhanced Precautions",
  norway: "Watch Level 1, Practice Usual Precautions",
  "northern mariana islands": "Warning Level 3, Avoid Nonessential Travel",
  nigeria: "Watch Level 1, Practice Usual Precautions",
  niger: "Alert Level 2, Practice Enhanced Precautions",
  netherlands: "Watch Level 1, Practice Usual Precautions",
  montserrat: "Alert Level 2, Practice Enhanced Precautions",
  moldova: "Watch Level 1, Practice Usual Precautions",
  micronesia: "Watch Level 1, Practice Usual Precautions",
  mexico: "Alert Level 2, Practice Enhanced Precautions",
  mauritius: "Watch Level 1, Practice Usual Precautions",
  malta: "Watch Level 1, Practice Usual Precautions",
  macau: "Watch Level 1, Practice Usual Precautions",
  malaysia: "Watch Level 1, Practice Usual Precautions",
  lithuania: "Watch Level 1, Practice Usual Precautions",
  madagascar: "Watch Level 1, Practice Usual Precautions",
  macedonia: "Watch Level 1, Practice Usual Precautions",
  luxembourg: "Watch Level 1, Practice Usual Precautions",
  laos: "Watch Level 1, Practice Usual Precautions",
  kyrgyzstan: "Watch Level 1, Practice Usual Precautions",
  kazakhstan: "Watch Level 1, Practice Usual Precautions",
  japan: "Alert Level 2, Practice Enhanced Precautions",
  kenya: "Watch Level 1, Practice Usual Precautions",
  israel: "Watch Level 1, Practice Usual Precautions",
  indonesia: "Watch Level 1, Practice Usual Precautions",
  india: "Alert Level 2, Practice Enhanced Precautions",
  "hong kong": "Watch Level 1, Practice Usual Precautions",
  italy: "Watch Level 1, Practice Usual Precautions",
  "guinea bissau": "Alert Level 2, Practice Enhanced Precautions",
  "saint vincent and the grenadines":
    "Alert Level 2, Practice Enhanced Precautions",
  greece: "Watch Level 1, Practice Usual Precautions",
  grenada: "Alert Level 2, Practice Enhanced Precautions",
  france: "Watch Level 1, Practice Usual Precautions",
  ethiopia: "Watch Level 1, Practice Usual Precautions",
  "united kingdom": "Watch Level 1, Practice Usual Precautions",
  dominica: "Alert Level 2, Practice Enhanced Precautions",
  "congo drc": "Watch Level 1, Practice Usual Precautions",
  curacao: "Alert Level 2, Practice Enhanced Precautions",
  cuba: "Alert Level 2, Practice Enhanced Precautions",
  colombia: "Watch Level 1, Practice Usual Precautions",
  china: "Watch Level 1, Practice Usual Precautions",
  chad: "Alert Level 2, Practice Enhanced Precautions",
  cameroon: "Alert Level 2, Practice Enhanced Precautions",
  "turks and caicos": "Alert Level 2, Practice Enhanced Precautions",
  brazil: "Watch Level 1, Practice Usual Precautions",
  australia: "Watch Level 1, Practice Usual Precautions",
  aruba: "Alert Level 2, Practice Enhanced Precautions",
  argentina: "Watch Level 1, Practice Usual Precautions",
  "antigua and barbuda": "Alert Level 2, Practice Enhanced Precautions",
  "british virgin islands": "Alert Level 2, Practice Enhanced Precautions",
  anguilla: "Alert Level 2, Practice Enhanced Precautions",
  angola: "Alert Level 2, Practice Enhanced Precautions"
};

var healthSummaries = {
  barbados:
    "Zika virus (or Zika) has been reported. Public health officials have reported that mosquitoes are infected with Zika and spreading it to people.",
  bonaire:
    "Zika virus (or Zika) has been reported. Public health officials have reported that mosquitoes are infected with Zika and spreading it to people.",
  belize:
    "Zika virus (or Zika) has been reported. Public health officials have reported that mosquitoes are infected with Zika and spreading it to people.",
  cuba:
    "Zika virus (or Zika) has been reported. Public health officials have reported that mosquitoes are infected with Zika and spreading it to people.",
  yemen:
    "There is a widespread cholera outbreak in Yemen. Between April and July 2017, more than 400,000 cholera cases and nearly 2,000 deaths have been reported. Twenty-one of the country's 23 governorates have reported suspected cases.",
  vietnam:
    "The Year of the Pig begins on February 5, 2019, and many people will travel to Asia to celebrate the Lunar New Year. If you plan to travel to Asia to visit friends or relatives or participate in the festivities, you can take some simple precautions to help you stay safe and healthy. ",
  venezuela:
    "CDC recommends that travelers avoid all nonessential travel to Venezuela. The country is experiencing outbreaks of infectious diseases, and adequate health care is currently not available in most of the country. ",
  ukraine:
    "Health officials in Ukraine have reported an outbreak of measles. CDC recommends that travelers to Ukraine protect themselves by making sure they are vaccinated against measles.",
  turkey:
    "As of November 11, 2013, the World Health Organization (WHO) has reported 7,132 confirmed measles cases in Turkey during 2013, up from approximately 700 reported cases in all of 2012. The Turkish Ministry of Health is working to address the outbreak.",
  "trinidad and tobago":
    "Zika virus (or Zika) has been reported. Public health officials have reported that mosquitoes are infected with Zika and spreading it to people.",
  thailand:
    "The Year of the Pig begins on February 5, 2019, and many people will travel to Asia to celebrate the Lunar New Year. If you plan to travel to Asia to visit friends or relatives or participate in the festivities, you can take some simple precautions to help you stay safe and healthy. ",
  taiwan:
    "The Year of the Pig begins on February 5, 2019, and many people will travel to Asia to celebrate the Lunar New Year. If you plan to travel to Asia to visit friends or relatives or participate in the festivities, you can take some simple precautions to help you stay safe and healthy. ",
  sudan:
    "As of December 3, 2013, the World Health Organization (WHO) has reported 44 suspected cases of yellow fever, including 14 deaths, from October 3 to November 24, 2013. ",
  "south korea":
    "The Year of the Pig begins on February 5, 2019, and many people will travel to Asia to celebrate the Lunar New Year. If you plan to travel to Asia to visit friends or relatives or participate in the festivities, you can take some simple precautions to help you stay safe and healthy. ",
  somalia:
    "There is a polio outbreak in Somalia. CDC recommends that all travelers to Somalia be vaccinated fully against polio.",
  "solomon islands":
    "Zika virus (or Zika) has been reported. Public health officials have reported that mosquitoes are infected with Zika and spreading it to people.",
  "sint maarten":
    "Zika virus (or Zika) has been reported. Public health officials have reported that mosquitoes are infected with Zika and spreading it to people.",
  "sint eustatius":
    "Zika virus (or Zika) has been reported. Public health officials have reported that mosquitoes are infected with Zika and spreading it to people.",
  singapore:
    "The Year of the Pig begins on February 5, 2019, and many people will travel to Asia to celebrate the Lunar New Year. If you plan to travel to Asia to visit friends or relatives or participate in the festivities, you can take some simple precautions to help you stay safe and healthy. ",
  serbia:
    "Health officials in Serbia have reported an outbreak of measles. CDC recommends that travelers to Serbia protect themselves by making sure they are vaccinated against measles.",
  senegal:
    "There is an outbreak of dengue in Senegal. Travelers to Senegal should protect themselves by preventing mosquito bites.",
  samoa:
    "Zika virus (or Zika) has been reported. Public health officials have reported that mosquitoes are infected with Zika and spreading it to people.",
  "saint martin":
    "Zika virus (or Zika) has been reported. Public health officials have reported that mosquitoes are infected with Zika and spreading it to people.",
  "saint lucia":
    "Zika virus (or Zika) has been reported. Public health officials have reported that mosquitoes are infected with Zika and spreading it to people.",
  "st kitts and nevis":
    "Zika virus (or Zika) has been reported. Public health officials have reported that mosquitoes are infected with Zika and spreading it to people.",
  "usvirgin islands":
    "Zika virus (or Zika) has been reported. Public health officials have reported that mosquitoes are infected with Zika and spreading it to people.",
  saba:
    "Zika virus (or Zika) has been reported. Public health officials have reported that mosquitoes are infected with Zika and spreading it to people.",
  romania:
    "A measles outbreak has been reported in Romania. CDC recommends that travelers to Romania protect themselves by making sure they are vaccinated against measles.",
  philippines:
    "There is an outbreak of measles in the Philippines. Travelers to the Philippines should make sure they are vaccinated against measles with the MMR (measles, mumps, and rubella) vaccine.",
  "papua new guinea":
    "There is an outbreak of polio in Papua New Guinea. CDC recommends that all travelers to Papua New Guinea be fully vaccinated against polio.",
  pakistan:
    "There is an ongoing outbreak of extensively drug-resistant (XDR) typhoid fever in Pakistan that does not respond to most antibiotics. Travelers to South Asia, including Pakistan, should take precautions to protect themselves from typhoid fever, including getting a typhoid fever vaccination. Travelers to these areas should also take extra care to follow safe food and water guidelines.",
  "northern mariana islands":
    "Because of the typhoon that crossed the Northern Mariana Islands on October 25, travelers to the area may experience serious health and safety risks, and medical care may not be available. CDC recommends that travelers avoid all nonessential travel to the Northern Mariana Islands.",
  nigeria:
    "Nigerian health officials have declared an outbreak of Lassa fever in Nigeria. Travelers to Nigeria should avoid contact with rats, especially rat urine and feces, and keep their accommodations or campsites clean.",
  niger:
    "The Nigerian Ministry of Health has reported several cases of poliovirus in the state of Borno in northeastern Nigeria. CDC recommends that all travelers to Nigeria be vaccinated fully against polio. Because of the risk of cross-border transmission, CDC recommends a one-time booster dose of polio vaccine for fully vaccinated adults traveling to Niger, Cameroon, or Chad to work in healthcare facilities, refugee camps, or other humanitarian aid settings. ",
  montserrat:
    "Zika virus (or Zika) has been reported. Public health officials have reported that mosquitoes are infected with Zika and spreading it to people.",
  moldova:
    "There is an outbreak of measles in Moldova. Travelers to Moldova should make sure they are vaccinated against measles with the MMR (measles, mumps, and rubella) vaccine.",
  mexico:
    "Recently, some US residents returning from Tijuana, Baja California, Mexico, were diagnosed with infections caused by an antibiotic-resistant form of Pseudomonas aeruginosa bacteria.",
  mauritius:
    "The Year of the Pig begins on February 5, 2019, and many people will travel to Asia to celebrate the Lunar New Year. If you plan to travel to Asia to visit friends or relatives or participate in the festivities, you can take some simple precautions to help you stay safe and healthy. ",
  madagascar:
    "There is an outbreak of measles in Madagascar. Travelers to Madagascar should make sure they are vaccinated against measles with the MMR (measles, mumps, and rubella) vaccine.",
  macau:
    "The Year of the Pig begins on February 5, 2019, and many people will travel to Asia to celebrate the Lunar New Year. If you plan to travel to Asia to visit friends or relatives or participate in the festivities, you can take some simple precautions to help you stay safe and healthy. ",
  laos:
    "The Year of the Pig begins on February 5, 2019, and many people will travel to Asia to celebrate the Lunar New Year. If you plan to travel to Asia to visit friends or relatives or participate in the festivities, you can take some simple precautions to help you stay safe and healthy. ",
  kenya:
    "There is an outbreak of Rift Valley fever (RVF) in Kenya. Travelers to Kenya should protect themselves from RVF by avoiding contact with infected animals and preventing mosquito bites.",
  kazakhstan:
    "There is an outbreak of measles in Kazakhstan. Travelers to Kazakhstan should make sure they are vaccinated against measles with the MMR (measles, mumps, and rubella) vaccine.",
  japan:
    "There is an outbreak of rubella in Japan. Travelers to Japan should make sure they are vaccinated against rubella with the MMR (measles, mumps, and rubella) vaccine before travel.",
  israel:
    "There is an outbreak of leptospirosis in northern Israel (Golan Heights). Travelers at highest risk are those exposed to contaminated fresh water like lakes and rivers in the affected area, such as through swimming, wading, kayaking, or rafting.",
  indonesia:
    "There is an outbreak of measles in Indonesia. CDC recommends that travelers to Indonesia protect themselves by making sure they are vaccinated against measles.",
  india:
    "An outbreak of Zika has been reported in India. Pregnant women should NOT travel to areas with risk of Zika.",
  "hong kong":
    "The Year of the Pig begins on February 5, 2019, and many people will travel to Asia to celebrate the Lunar New Year. If you plan to travel to Asia to visit friends or relatives or participate in the festivities, you can take some simple precautions to help you stay safe and healthy. ",
  italy:
    "Health officials in Italy have reported an outbreak of measles. CDC recommends that travelers to Italy protect themselves by making sure they are vaccinated against measles.",
  "guinea bissau":
    "Zika virus (or Zika) has been reported. Public health officials have reported that mosquitoes are infected with Zika and spreading it to people.",
  "saint vincent and the grenadines":
    "Zika virus (or Zika) has been reported. Public health officials have reported that mosquitoes are infected with Zika and spreading it to people.",
  grenada:
    "Zika virus (or Zika) has been reported. Public health officials have reported that mosquitoes are infected with Zika and spreading it to people.",
  france:
    "There is an outbreak of measles in France. Travelers to France should make sure they are vaccinated against measles with the MMR (measles, mumps, and rubella) vaccine.",
  dominica:
    "Zika virus (or Zika) has been reported. Public health officials have reported that mosquitoes are infected with Zika and spreading it to people.",
  "congo drc":
    "Health officials in the Democratic Republic of the Congo have reported an outbreak of measles. CDC recommends that travelers protect themselves by making sure they are vaccinated against measles.",
  curacao:
    "Zika virus (or Zika) has been reported. Public health officials have reported that mosquitoes are infected with Zika and spreading it to people.",
  colombia:
    "There is an outbreak of measles in Colombia. Travelers to Colombia should make sure they are vaccinated against measles with the MMR (measles, mumps, and rubella) vaccine.",
  chad:
    "The Nigerian Ministry of Health has reported several cases of poliovirus in the state of Borno in northeastern Nigeria. CDC recommends that all travelers to Nigeria be vaccinated fully against polio. Because of the risk of cross-border transmission, CDC recommends a one-time booster dose of polio vaccine for fully vaccinated adults traveling to Niger, Cameroon, or Chad to work in healthcare facilities, refugee camps, or other humanitarian aid settings. ",
  china:
    "Chinese health authorities have confirmed human cases of avian influenza A (H7N9) since September 2016. CDC advises people traveling to China to avoid contact with poultry (including poultry markets and farms), birds, and their droppings and to avoid eating undercooked poultry. Infected birds that appear healthy may still be able to transmit this virus to humans. ",
  cameroon:
    "The Nigerian Ministry of Health has reported several cases of poliovirus in the state of Borno in northeastern Nigeria. CDC recommends that all travelers to Nigeria be vaccinated fully against polio. Because of the risk of cross-border transmission, CDC recommends a one-time booster dose of polio vaccine for fully vaccinated adults traveling to Niger, Cameroon, or Chad to work in healthcare facilities, refugee camps, or other humanitarian aid settings. ",
  "turks and caicos":
    "Zika virus (or Zika) has been reported. Public health officials have reported that mosquitoes are infected with Zika and spreading it to people.",
  brazil:
    "A measles outbreak has been reported in Brazil. CDC recommends that travelers to Brazil protect themselves by making sure they are vaccinated against measles.",
  australia:
    "The Year of the Pig begins on February 5, 2019, and many people will travel to Asia to celebrate the Lunar New Year. If you plan to travel to Asia to visit friends or relatives or participate in the festivities, you can take some simple precautions to help you stay safe and healthy. ",
  aruba:
    "Zika virus (or Zika) has been reported. Public health officials have reported that mosquitoes are infected with Zika and spreading it to people.",
  argentina:
    "There is an outbreak of Andes virus in Argentina, specifically in Chubut Province of Patagonia. Travelers to Argentina should avoid contact with rodents and their droppings (urine and feces), and avoid close contact with anyone who may be sick.",
  "antigua and barbuda":
    "Zika virus (or Zika) has been reported. Public health officials have reported that mosquitoes are infected with Zika and spreading it to people.",
  anguilla:
    "Zika virus (or Zika) has been reported. Public health officials have reported that mosquitoes are infected with Zika and spreading it to people.",
  angola:
    "Zika virus (or Zika) has been reported. Public health officials have reported that mosquitoes are infected with Zika and spreading it to people.",
  "british virgin islands":
    "Zika virus (or Zika) has been reported. Public health officials have reported that mosquitoes are infected with Zika and spreading it to people."
};

if (healthLevels[countryName.toLowerCase()] != undefined) {
  var level = healthLevels[countryName.toLowerCase()];
  document.getElementById("health-level").innerText = level.slice(0, 13);
  document.getElementById("health-level-blurb").innerText = level.slice(15);
}

if (healthSummaries[countryName.toLowerCase()] != undefined) {
  var summary = healthSummaries[countryName.toLowerCase()];
  document.getElementById("health-warning-descripton").innerText = summary;
}

var epiScores = [
  {
    Country: "Afghanistan",
    EPI2018Score: 37.74
  },
  {
    Country: "Albania",
    EPI2018Score: 65.46
  },
  {
    Country: "Algeria",
    EPI2018Score: 57.18
  },
  {
    Country: "Angola",
    EPI2018Score: 37.44
  },
  {
    Country: "Antigua and Barbuda",
    EPI2018Score: 59.18
  },
  {
    Country: "Argentina",
    EPI2018Score: 59.3
  },
  {
    Country: "Armenia",
    EPI2018Score: 62.07
  },
  {
    Country: "Australia",
    EPI2018Score: 74.12
  },
  {
    Country: "Austria",
    EPI2018Score: 78.97
  },
  {
    Country: "Azerbaijan",
    EPI2018Score: 62.33
  },
  {
    Country: "Bahamas",
    EPI2018Score: 54.99
  },
  {
    Country: "Bahrain",
    EPI2018Score: 55.15
  },
  {
    Country: "Bangladesh",
    EPI2018Score: 29.56
  },
  {
    Country: "Barbados",
    EPI2018Score: 55.76
  },
  {
    Country: "Belarus",
    EPI2018Score: 64.98
  },
  {
    Country: "Belgium",
    EPI2018Score: 77.38
  },
  {
    Country: "Belize",
    EPI2018Score: 57.79
  },
  {
    Country: "Benin",
    EPI2018Score: 38.17
  },
  {
    Country: "Bhutan",
    EPI2018Score: 47.22
  },
  {
    Country: "Bolivia",
    EPI2018Score: 55.98
  },
  {
    Country: "Bosnia and Herzegovina",
    EPI2018Score: 41.84
  },
  {
    Country: "Botswana",
    EPI2018Score: 51.7
  },
  {
    Country: "Brazil",
    EPI2018Score: 60.7
  },
  {
    Country: "Brunei Darussalam",
    EPI2018Score: 63.57
  },
  {
    Country: "Bulgaria",
    EPI2018Score: 67.85
  },
  {
    Country: "Burkina Faso",
    EPI2018Score: 42.83
  },
  {
    Country: "Burundi",
    EPI2018Score: 27.43
  },
  {
    Country: "Côte d'Ivoire",
    EPI2018Score: 45.25
  },
  {
    Country: "Cabo Verde",
    EPI2018Score: 56.94
  },
  {
    Country: "Cambodia",
    EPI2018Score: 43.23
  },
  {
    Country: "Cameroon",
    EPI2018Score: 40.81
  },
  {
    Country: "Canada",
    EPI2018Score: 72.18
  },
  {
    Country: "Central African Republic",
    EPI2018Score: 36.42
  },
  {
    Country: "Chad",
    EPI2018Score: 45.34
  },
  {
    Country: "Chile",
    EPI2018Score: 57.49
  },
  {
    Country: "China",
    EPI2018Score: 50.74
  },
  {
    Country: "Colombia",
    EPI2018Score: 65.22
  },
  {
    Country: "Comoros",
    EPI2018Score: 44.24
  },
  {
    Country: "Costa Rica",
    EPI2018Score: 67.85
  },
  {
    Country: "Croatia",
    EPI2018Score: 65.45
  },
  {
    Country: "Cuba",
    EPI2018Score: 63.42
  },
  {
    Country: "Cyprus",
    EPI2018Score: 72.6
  },
  {
    Country: "Czech Republic",
    EPI2018Score: 67.68
  },
  {
    Country: "Congo DRC",
    EPI2018Score: 30.41
  },
  {
    Country: "Denmark",
    EPI2018Score: 81.6
  },
  {
    Country: "Djibouti",
    EPI2018Score: 40.04
  },
  {
    Country: "Dominica",
    EPI2018Score: 59.38
  },
  {
    Country: "Dominican Republic",
    EPI2018Score: 64.71
  },
  {
    Country: "Ecuador",
    EPI2018Score: 57.42
  },
  {
    Country: "Egypt",
    EPI2018Score: 61.21
  },
  {
    Country: "El Salvador",
    EPI2018Score: 53.91
  },
  {
    Country: "Equatorial Guinea",
    EPI2018Score: 60.4
  },
  {
    Country: "Eritrea",
    EPI2018Score: 39.34
  },
  {
    Country: "Estonia",
    EPI2018Score: 64.31
  },
  {
    Country: "Ethiopia",
    EPI2018Score: 44.78
  },
  {
    Country: "Fiji",
    EPI2018Score: 53.09
  },
  {
    Country: "Finland",
    EPI2018Score: 78.64
  },
  {
    Country: "France",
    EPI2018Score: 83.95
  },
  {
    Country: "Gabon",
    EPI2018Score: 45.05
  },
  {
    Country: "Gambia",
    EPI2018Score: 42.42
  },
  {
    Country: "Georgia",
    EPI2018Score: 55.69
  },
  {
    Country: "Germany",
    EPI2018Score: 78.37
  },
  {
    Country: "Ghana",
    EPI2018Score: 49.66
  },
  {
    Country: "Greece",
    EPI2018Score: 73.6
  },
  {
    Country: "Grenada",
    EPI2018Score: 50.93
  },
  {
    Country: "Guatemala",
    EPI2018Score: 52.33
  },
  {
    Country: "Guinea",
    EPI2018Score: 46.62
  },
  {
    Country: "Guinea-Bissau",
    EPI2018Score: 44.67
  },
  {
    Country: "Guyana",
    EPI2018Score: 47.93
  },
  {
    Country: "Haiti",
    EPI2018Score: 33.74
  },
  {
    Country: "Honduras",
    EPI2018Score: 51.51
  },
  {
    Country: "Hungary",
    EPI2018Score: 65.01
  },
  {
    Country: "Iceland",
    EPI2018Score: 78.57
  },
  {
    Country: "India",
    EPI2018Score: 30.57
  },
  {
    Country: "Indonesia",
    EPI2018Score: 46.92
  },
  {
    Country: "Iran",
    EPI2018Score: 58.16
  },
  {
    Country: "Iraq",
    EPI2018Score: 43.2
  },
  {
    Country: "Ireland",
    EPI2018Score: 78.77
  },
  {
    Country: "Israel",
    EPI2018Score: 75.01
  },
  {
    Country: "Italy",
    EPI2018Score: 76.96
  },
  {
    Country: "Jamaica",
    EPI2018Score: 58.58
  },
  {
    Country: "Japan",
    EPI2018Score: 74.69
  },
  {
    Country: "Jordan",
    EPI2018Score: 62.2
  },
  {
    Country: "Kazakhstan",
    EPI2018Score: 54.56
  },
  {
    Country: "Kenya",
    EPI2018Score: 47.25
  },
  {
    Country: "Kiribati",
    EPI2018Score: 55.26
  },
  {
    Country: "Kuwait",
    EPI2018Score: 62.28
  },
  {
    Country: "Kyrgyzstan",
    EPI2018Score: 54.86
  },
  {
    Country: "Laos",
    EPI2018Score: 42.94
  },
  {
    Country: "Latvia",
    EPI2018Score: 66.12
  },
  {
    Country: "Lebanon",
    EPI2018Score: 61.08
  },
  {
    Country: "Lesotho",
    EPI2018Score: 33.78
  },
  {
    Country: "Liberia",
    EPI2018Score: 41.62
  },
  {
    Country: "Libya",
    EPI2018Score: 49.79
  },
  {
    Country: "Lithuania",
    EPI2018Score: 69.33
  },
  {
    Country: "Luxembourg",
    EPI2018Score: 79.12
  },
  {
    Country: "Macedonia",
    EPI2018Score: 61.06
  },
  {
    Country: "Madagascar",
    EPI2018Score: 33.73
  },
  {
    Country: "Malawi",
    EPI2018Score: 49.21
  },
  {
    Country: "Malaysia",
    EPI2018Score: 59.22
  },
  {
    Country: "Maldives",
    EPI2018Score: 52.14
  },
  {
    Country: "Mali",
    EPI2018Score: 43.71
  },
  {
    Country: "Malta",
    EPI2018Score: 80.9
  },
  {
    Country: "Mauritania",
    EPI2018Score: 39.24
  },
  {
    Country: "Mauritius",
    EPI2018Score: 56.63
  },
  {
    Country: "Mexico",
    EPI2018Score: 59.69
  },
  {
    Country: "Micronesia",
    EPI2018Score: 49.8
  },
  {
    Country: "Moldova",
    EPI2018Score: 51.97
  },
  {
    Country: "Mongolia",
    EPI2018Score: 57.51
  },
  {
    Country: "Montenegro",
    EPI2018Score: 61.33
  },
  {
    Country: "Morocco",
    EPI2018Score: 63.47
  },
  {
    Country: "Mozambique",
    EPI2018Score: 46.37
  },
  {
    Country: "Myanmar",
    EPI2018Score: 45.32
  },
  {
    Country: "Namibia",
    EPI2018Score: 58.46
  },
  {
    Country: "Nepal",
    EPI2018Score: 31.44
  },
  {
    Country: "Netherlands",
    EPI2018Score: 75.46
  },
  {
    Country: "New Zealand",
    EPI2018Score: 75.96
  },
  {
    Country: "Nicaragua",
    EPI2018Score: 55.04
  },
  {
    Country: "Niger",
    EPI2018Score: 35.74
  },
  {
    Country: "Nigeria",
    EPI2018Score: 54.76
  },
  {
    Country: "Norway",
    EPI2018Score: 77.49
  },
  {
    Country: "Oman",
    EPI2018Score: 51.32
  },
  {
    Country: "Pakistan",
    EPI2018Score: 37.5
  },
  {
    Country: "Panama",
    EPI2018Score: 62.71
  },
  {
    Country: "Papua New Guinea",
    EPI2018Score: 39.35
  },
  {
    Country: "Paraguay",
    EPI2018Score: 53.93
  },
  {
    Country: "Peru",
    EPI2018Score: 61.92
  },
  {
    Country: "Philippines",
    EPI2018Score: 57.65
  },
  {
    Country: "Poland",
    EPI2018Score: 64.11
  },
  {
    Country: "Portugal",
    EPI2018Score: 71.91
  },
  {
    Country: "Qatar",
    EPI2018Score: 67.8
  },
  {
    Country: "Republic of Congo",
    EPI2018Score: 42.39
  },
  {
    Country: "Romania",
    EPI2018Score: 64.78
  },
  {
    Country: "Russian Federation",
    EPI2018Score: 63.79
  },
  {
    Country: "Rwanda",
    EPI2018Score: 43.68
  },
  {
    Country: "Sao Tome and Principe",
    EPI2018Score: 54.01
  },
  {
    Country: "Saint Lucia",
    EPI2018Score: 56.18
  },
  {
    Country: "Saint Vincent and the Grenadines",
    EPI2018Score: 66.48
  },
  {
    Country: "Samoa",
    EPI2018Score: 54.5
  },
  {
    Country: "Saudi Arabia",
    EPI2018Score: 57.47
  },
  {
    Country: "Senegal",
    EPI2018Score: 49.52
  },
  {
    Country: "Serbia",
    EPI2018Score: 57.49
  },
  {
    Country: "Seychelles",
    EPI2018Score: 66.02
  },
  {
    Country: "Sierra Leone",
    EPI2018Score: 42.54
  },
  {
    Country: "Singapore",
    EPI2018Score: 64.23
  },
  {
    Country: "Slovakia",
    EPI2018Score: 70.6
  },
  {
    Country: "Slovenia",
    EPI2018Score: 67.57
  },
  {
    Country: "Solomon Islands",
    EPI2018Score: 43.22
  },
  {
    Country: "South Africa",
    EPI2018Score: 44.73
  },
  {
    Country: "South Korea",
    EPI2018Score: 62.3
  },
  {
    Country: "Spain",
    EPI2018Score: 78.39
  },
  {
    Country: "Sri Lanka",
    EPI2018Score: 60.61
  },
  {
    Country: "Sudan",
    EPI2018Score: 51.49
  },
  {
    Country: "Suriname",
    EPI2018Score: 54.2
  },
  {
    Country: "Swaziland",
    EPI2018Score: 40.32
  },
  {
    Country: "Sweden",
    EPI2018Score: 80.51
  },
  {
    Country: "Switzerland",
    EPI2018Score: 87.42
  },
  {
    Country: "Taiwan",
    EPI2018Score: 72.84
  },
  {
    Country: "Tajikistan",
    EPI2018Score: 47.85
  },
  {
    Country: "Tanzania",
    EPI2018Score: 50.83
  },
  {
    Country: "Thailand",
    EPI2018Score: 49.88
  },
  {
    Country: "Timor-Leste",
    EPI2018Score: 49.54
  },
  {
    Country: "Togo",
    EPI2018Score: 41.78
  },
  {
    Country: "Tonga",
    EPI2018Score: 62.49
  },
  {
    Country: "Trinidad and Tobago",
    EPI2018Score: 67.36
  },
  {
    Country: "Tunisia",
    EPI2018Score: 62.35
  },
  {
    Country: "Turkey",
    EPI2018Score: 52.96
  },
  {
    Country: "Turkmenistan",
    EPI2018Score: 66.1
  },
  {
    Country: "Uganda",
    EPI2018Score: 44.28
  },
  {
    Country: "Ukraine",
    EPI2018Score: 52.87
  },
  {
    Country: "United Arab Emirates",
    EPI2018Score: 58.9
  },
  {
    Country: "United Kingdom",
    EPI2018Score: 79.89
  },
  {
    Country: "United States",
    EPI2018Score: 71.19
  },
  {
    Country: "Uruguay",
    EPI2018Score: 64.65
  },
  {
    Country: "Uzbekistan",
    EPI2018Score: 45.88
  },
  {
    Country: "Vanuatu",
    EPI2018Score: 44.55
  },
  {
    Country: "Venezuela",
    EPI2018Score: 63.89
  },
  {
    Country: "Vietnam",
    EPI2018Score: 46.96
  },
  {
    Country: "Zambia",
    EPI2018Score: 50.97
  },
  {
    Country: "Zimbabwe",
    EPI2018Score: 43.41
  }
];

var arrayLength = epiScores.length;

for (var i = 0; i < arrayLength; i++) {
  if (epiScores[i].Country.toLowerCase() == countryName.toLowerCase()) {
    document.getElementById("epi-score").innerText = epiScores[i].EPI2018Score;
  }
}

var waterScores = [
  {
    "Countries and Area": "Afghanistan",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Albania",
    "Clean Water Score": 69
  },
  {
    "Countries and Area": "Algeria",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "American Samoa",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Andorra",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Angola",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Anguilla",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Antigua and Barbuda",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Argentina",
    "Clean Water Score": 99
  },
  {
    "Countries and Area": "Armenia",
    "Clean Water Score": 61
  },
  {
    "Countries and Area": "Aruba",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Australia",
    "Clean Water Score": 99
  },
  {
    "Countries and Area": "Austria",
    "Clean Water Score": 99
  },
  {
    "Countries and Area": "Azerbaijan",
    "Clean Water Score": 72
  },
  {
    "Countries and Area": "Bahamas",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Bahrain",
    "Clean Water Score": 99
  },
  {
    "Countries and Area": "Bangladesh",
    "Clean Water Score": 61
  },
  {
    "Countries and Area": "Barbados",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Belarus",
    "Clean Water Score": 94
  },
  {
    "Countries and Area": "Belgium",
    "Clean Water Score": 98
  },
  {
    "Countries and Area": "Belize",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Benin",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Bermuda",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Bhutan",
    "Clean Water Score": 45
  },
  {
    "Countries and Area": "Bolivia",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Bosnia and Herzegovina",
    "Clean Water Score": 89
  },
  {
    "Countries and Area": "Botswana",
    "Clean Water Score": 84
  },
  {
    "Countries and Area": "Brazil",
    "Clean Water Score": 97
  },
  {
    "Countries and Area": "British Virgin Islands",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Brunei Darussalam",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Bulgaria",
    "Clean Water Score": 97
  },
  {
    "Countries and Area": "Burkina Faso",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Burundi",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Cabo Verde",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Cambodia",
    "Clean Water Score": 55
  },
  {
    "Countries and Area": "Cameroon",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Canada",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Caribbean Netherlands",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Cayman Islands",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Central African Republic",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Chad",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Channel Islands",
    "Clean Water Score": 92
  },
  {
    "Countries and Area": "Chile",
    "Clean Water Score": 98
  },
  {
    "Countries and Area": "China",
    "Clean Water Score": 91
  },
  {
    "Countries and Area": "Hong Kong",
    "Clean Water Score": 100
  },
  {
    "Countries and Area": "Macau",
    "Clean Water Score": 100
  },
  {
    "Countries and Area": "Colombia",
    "Clean Water Score": 81
  },
  {
    "Countries and Area": "Comoros",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Congo",
    "Clean Water Score": 37
  },
  {
    "Countries and Area": "Cook Islands",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Costa Rica",
    "Clean Water Score": 90
  },
  {
    "Countries and Area": "Côte d'Ivoire",
    "Clean Water Score": 65
  },
  {
    "Countries and Area": "Croatia",
    "Clean Water Score": 90
  },
  {
    "Countries and Area": "Cuba",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Curacao",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Cyprus",
    "Clean Water Score": 100
  },
  {
    "Countries and Area": "Czech Republic",
    "Clean Water Score": 98
  },
  {
    "Countries and Area": "North Korea",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Cong DRC",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Denmark",
    "Clean Water Score": 97
  },
  {
    "Countries and Area": "Djibouti",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Dominica",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Dominican Republic",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Ecuador",
    "Clean Water Score": 85
  },
  {
    "Countries and Area": "Egypt",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "El Salvador",
    "Clean Water Score": 77
  },
  {
    "Countries and Area": "Equatorial Guinea",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Eritrea",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Estonia",
    "Clean Water Score": 82
  },
  {
    "Countries and Area": "Ethiopia",
    "Clean Water Score": 38
  },
  {
    "Countries and Area": "Falkland Islands",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Faroe Islands",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Fiji",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Finland",
    "Clean Water Score": 97
  },
  {
    "Countries and Area": "France",
    "Clean Water Score": 93
  },
  {
    "Countries and Area": "French Guiana",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "French Polynesia",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Gabon",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Gambia",
    "Clean Water Score": 70
  },
  {
    "Countries and Area": "Georgia",
    "Clean Water Score": 73
  },
  {
    "Countries and Area": "Germany",
    "Clean Water Score": 99
  },
  {
    "Countries and Area": "Ghana",
    "Clean Water Score": 44
  },
  {
    "Countries and Area": "Gibraltar",
    "Clean Water Score": 99
  },
  {
    "Countries and Area": "Greece",
    "Clean Water Score": 99
  },
  {
    "Countries and Area": "Greenland",
    "Clean Water Score": 97
  },
  {
    "Countries and Area": "Grenada",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Guadeloupe",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Guam",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Guatemala",
    "Clean Water Score": 61
  },
  {
    "Countries and Area": "Guinea",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Guinea-Bissau",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Guyana",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Haiti",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Holy See",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Honduras",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Hungary",
    "Clean Water Score": 82
  },
  {
    "Countries and Area": "Iceland",
    "Clean Water Score": 98
  },
  {
    "Countries and Area": "India",
    "Clean Water Score": 49
  },
  {
    "Countries and Area": "Indonesia",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Iran",
    "Clean Water Score": 94
  },
  {
    "Countries and Area": "Iraq",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Ireland",
    "Clean Water Score": 99
  },
  {
    "Countries and Area": "Isle of Man",
    "Clean Water Score": 96
  },
  {
    "Countries and Area": "Israel",
    "Clean Water Score": 99
  },
  {
    "Countries and Area": "Italy",
    "Clean Water Score": 94
  },
  {
    "Countries and Area": "Jamaica",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Japan",
    "Clean Water Score": 97
  },
  {
    "Countries and Area": "Jordan",
    "Clean Water Score": 93
  },
  {
    "Countries and Area": "Kazakhstan",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Kenya",
    "Clean Water Score": 54
  },
  {
    "Countries and Area": "Kiribati",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Kuwait",
    "Clean Water Score": 100
  },
  {
    "Countries and Area": "Kyrgyzstan",
    "Clean Water Score": 93
  },
  {
    "Countries and Area": "Laos",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Latvia",
    "Clean Water Score": 82
  },
  {
    "Countries and Area": "Lebanon",
    "Clean Water Score": 48
  },
  {
    "Countries and Area": "Lesotho",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Liberia",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Libya",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Liechtenstein",
    "Clean Water Score": 100
  },
  {
    "Countries and Area": "Lithuania",
    "Clean Water Score": 92
  },
  {
    "Countries and Area": "Luxembourg",
    "Clean Water Score": 98
  },
  {
    "Countries and Area": "Madagascar",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Malawi",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Malaysia",
    "Clean Water Score": 92
  },
  {
    "Countries and Area": "Maldives",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Mali",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Malta",
    "Clean Water Score": 100
  },
  {
    "Countries and Area": "Marshall Islands",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Martinique",
    "Clean Water Score": 100
  },
  {
    "Countries and Area": "Mauritania",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Mauritius",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Mayotte",
    "Clean Water Score": 85
  },
  {
    "Countries and Area": "Mexico",
    "Clean Water Score": 43
  },
  {
    "Countries and Area": "Micronesia",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Monaco",
    "Clean Water Score": 100
  },
  {
    "Countries and Area": "Mongolia",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Montenegro",
    "Clean Water Score": 94
  },
  {
    "Countries and Area": "Montserrat",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Morocco",
    "Clean Water Score": 89
  },
  {
    "Countries and Area": "Mozambique",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Myanmar",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Namibia",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Nauru",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Nepal",
    "Clean Water Score": 34
  },
  {
    "Countries and Area": "Netherlands",
    "Clean Water Score": 100
  },
  {
    "Countries and Area": "New Caledonia",
    "Clean Water Score": 97
  },
  {
    "Countries and Area": "New Zealand",
    "Clean Water Score": 100
  },
  {
    "Countries and Area": "Nicaragua",
    "Clean Water Score": 79
  },
  {
    "Countries and Area": "Niger",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Nigeria",
    "Clean Water Score": 19
  },
  {
    "Countries and Area": "Niue",
    "Clean Water Score": 97
  },
  {
    "Countries and Area": "Northern Mariana Islands",
    "Clean Water Score": 82
  },
  {
    "Countries and Area": "Norway",
    "Clean Water Score": 95
  },
  {
    "Countries and Area": "Oman",
    "Clean Water Score": 89
  },
  {
    "Countries and Area": "Pakistan",
    "Clean Water Score": 41
  },
  {
    "Countries and Area": "Palau",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Panama",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Papua New Guinea",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Paraguay",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Peru",
    "Clean Water Score": 58
  },
  {
    "Countries and Area": "Philippines",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Poland",
    "Clean Water Score": 94
  },
  {
    "Countries and Area": "Portugal",
    "Clean Water Score": 95
  },
  {
    "Countries and Area": "Puerto Rico",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Qatar",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Republic of Korea",
    "Clean Water Score": 98
  },
  {
    "Countries and Area": "Republic of Moldova",
    "Clean Water Score": 70
  },
  {
    "Countries and Area": "Romania",
    "Clean Water Score": 88
  },
  {
    "Countries and Area": "Russian Federation",
    "Clean Water Score": 76
  },
  {
    "Countries and Area": "Rwanda",
    "Clean Water Score": 36
  },
  {
    "Countries and Area": "Saint Helena",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Saint Kitts and Nevis",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Saint Lucia",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Saint Pierre and Miquelon",
    "Clean Water Score": 83
  },
  {
    "Countries and Area": "Saint Vincent and the Grenadines",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Samoa",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "San Marino",
    "Clean Water Score": 100
  },
  {
    "Countries and Area": "Sao Tome and Principe",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Saudi Arabia",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Senegal",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Serbia",
    "Clean Water Score": 88
  },
  {
    "Countries and Area": "Seychelles",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Sierra Leone",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Singapore",
    "Clean Water Score": 100
  },
  {
    "Countries and Area": "Sint Maarten",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Slovakia",
    "Clean Water Score": 93
  },
  {
    "Countries and Area": "Slovenia",
    "Clean Water Score": 98
  },
  {
    "Countries and Area": "Solomon Islands",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Somalia",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "South Africa",
    "Clean Water Score": 85
  },
  {
    "Countries and Area": "South Sudan",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Spain",
    "Clean Water Score": 98
  },
  {
    "Countries and Area": "Sri Lanka",
    "Clean Water Score": 93
  },
  {
    "Countries and Area": "Sudan",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Suriname",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Swaziland",
    "Clean Water Score": 88
  },
  {
    "Countries and Area": "Sweden",
    "Clean Water Score": 98
  },
  {
    "Countries and Area": "Switzerland",
    "Clean Water Score": 95
  },
  {
    "Countries and Area": "Syrian Arab Republic",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Tajikistan",
    "Clean Water Score": 47
  },
  {
    "Countries and Area": "Thailand",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "The former Yugoslav Republic of Macedonia",
    "Clean Water Score": 90
  },
  {
    "Countries and Area": "Timor-Leste",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Togo",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Tokelau",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Tonga",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Trinidad and Tobago",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Tunisia",
    "Clean Water Score": 93
  },
  {
    "Countries and Area": "Turkey",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Turkmenistan",
    "Clean Water Score": 87
  },
  {
    "Countries and Area": "Turks and Caicos",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Tuvalu",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Uganda",
    "Clean Water Score": 18
  },
  {
    "Countries and Area": "Ukraine",
    "Clean Water Score": 92
  },
  {
    "Countries and Area": "United Arab Emirates",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "United Kingdom",
    "Clean Water Score": 96
  },
  {
    "Countries and Area": "United Republic of Tanzania",
    "Clean Water Score": 34
  },
  {
    "Countries and Area": "United States Virgin Islands",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "United States",
    "Clean Water Score": 100
  },
  {
    "Countries and Area": "Uruguay",
    "Clean Water Score": 94
  },
  {
    "Countries and Area": "Uzbekistan",
    "Clean Water Score": 87
  },
  {
    "Countries and Area": "Vanuatu",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Venezuela",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Vietnam",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Wallis and Futuna Islands",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "West Bank and Gaza Strip",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Western Sahara",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Yemen",
    "Clean Water Score": 0
  },
  {
    "Countries and Area": "Zambia",
    "Clean Water Score": 47
  },
  {
    "Countries and Area": "Zimbabwe",
    "Clean Water Score": 0
  }
];

var arrayLength = waterScores.length;

for (var i = 0; i < arrayLength; i++) {
  if (
    waterScores[i]["Countries and Area"].toLowerCase() ==
    countryName.toLowerCase()
  ) {
    document.getElementById("water-level").innerText =
      waterScores[i]["Clean Water Score"];
    if (waterScores[i]["Clean Water Score"] >= 90) {
      document.getElementById("water-description").innerText =
        "Clean – Safe water source is widely available. Most of the country’s water source is improved (piped household water connection located inside the user’s dwelling, plot or yard).";
    }
    if (waterScores[i]["Clean Water Score"] < 70) {
      document.getElementById("water-description").innerText =
        "Dangerous -  Low access to safe water source, low proportion of water source is improved (piped household water connection located inside the user’s dwelling, plot or yard). Public water is not safe to consume.";
    }
    if (
      waterScores[i]["Clean Water Score"] >= 70 &&
      waterScores[i]["Clean Water Score"] < 90
    ) {
      document.getElementById("water-description").innerText =
        "Moderate – Medium access to safe water source. Safe water source will typically be available in urban areas.";
    }
  }
}

function standardDeviation(values) {
  var avg = average(values);

  var squareDiffs = values.map(function(value) {
    var diff = value - avg;
    var sqrDiff = diff * diff;
    return sqrDiff;
  });

  var avgSquareDiff = average(squareDiffs);

  var stdDev = Math.sqrt(avgSquareDiff);
  return stdDev;
}

function average(data) {
  var sum = data.reduce(function(sum, value) {
    return sum + value;
  }, 0);

  var avg = sum / data.length;
  return avg;
}

fetch("https://api.openaq.org/v1/countries")
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    var countryCodes = myJson.results;
    var numCodes = countryCodes.length;
    for (var i = 0; i < numCodes; i++) {
      if (countryCodes[i].name.toLowerCase() == countryName.toLowerCase()) {
        return fetch(
          "https://api.openaq.org/v1/latest?country=" + countryCodes[i].code
        );
      }
    }
  })
  .then(function(response) {
    return response.json();
  })
  .then(
    function(myJson) {
      var airResults = myJson.results;
      console.log(airResults);
      var pm25Values = [];
      for (var i = 0; i < airResults.length; i++) {
        var measurements = airResults[i].measurements;
        for (var j = 0; j < measurements.length; j++) {
          if (measurements[j].parameter == "pm25") {
            pm25Values.push(measurements[j].value);
          }
        }
      }
      pm25Average = average(pm25Values);
      pm24stdDev = standardDeviation(pm25Values);
      var lowerBound = pm25Average - 1.2 * pm24stdDev;
      var upperBound = pm25Average + 1.2 * pm24stdDev;
      if (lowerBound < 0) lowerBound = 0;
      lowerBound = Math.round(lowerBound * 10) / 10;
      upperBound = Math.round(upperBound * 10) / 10;
      console.log(pm25Values);
      console.log(lowerBound);
      console.log(upperBound);
      if (!isNaN(lowerBound) && !isNaN(upperBound))
        document.getElementById("air-quality").innerText =
          lowerBound + " - " + upperBound;
      if (pm25Average > 300) {
        var insertText =
          'Hazardous" AQI greater than 300. This would trigger a health warnings of emergency conditions. The entire population is more likely to be affected.';
      }
      if (pm25Average > 200 && pm25Average <= 250) {
        var insertText =
          '"Very Unhealthy" AQI is 201 to 300. This would trigger a health alert signifying that everyone may experience more serious health effects.';
      }
      if (pm25Average > 150 && pm25Average <= 200) {
        var insertText =
          '"Unhealthy" AQI is 151 to 200. Everyone may begin to experience some adverse health effects, and members of the sensitive groups may experience more serious effects.';
      }
      if (pm25Average > 100 && pm25Average <= 150) {
        var insertText =
          '"Unhealthy for Sensitive Groups" AQI is 101 to 150. Although general public is not likely to be affected at this AQI range, people with lung disease, older adults and children are at a greater risk from exposure to ozone, whereas persons with heart and lung disease, older adults and children are at greater risk from the presence of particles in the air.';
      }
      if (pm25Average > 50 && pm25Average <= 100) {
        var insertText =
          '"Moderate" AQI is 51 to 100. Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people. For example, people who are unusually sensitive to ozone may experience respiratory symptoms.';
      }
      if (pm25Average <= 50) {
        var insertText =
          '"Good" AQI is 0 to 50. Air quality is considered satisfactory, and air pollution poses little or no risk.';
      }
      document.getElementById("air-description").innerText = insertText;
    },
    function(error) {}
  );

var vaccine = {
  afghanistan: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Poliomyelitis",
    "Hepatitis B",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  belarus: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  barbados: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  bangladesh: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Cholera",
    "Hepatitis B",
    "Japanese encephalitis",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  bhutan: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Japanese encephalitis",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  bonaire: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  belgium: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  bahrain: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  bolivia: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  benin: [
    "Routine",
    "Yellow Fever",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Hepatitis B",
    "Meningococcal disease",
    "Rabies"
  ],
  bermuda: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B", "Rabies"],
  belize: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever",
    "Malaria"
  ],
  bahamas: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  azerbaijan: ["Routine", "Hepatitis A", "Hepatitis B", "Malaria", "Rabies"],
  "czech republic": ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  maldives: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Yellow Fever"
  ],
  azores: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  zimbabwe: [
    "Routine",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Cholera",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  zambia: [
    "Routine",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Cholera",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  austria: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  yemen: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Cholera",
    "Hepatitis B",
    "Malaria",
    "Rabies"
  ],
  "western sahara": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Malaria",
    "Rabies"
  ],
  "wake Island": ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B"],
  vietnam: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Japanese encephalitis",
    "Hepatitis B",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  venezuela: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  vanuatu: ["Routine", "Hepatitis A", "Malaria", "Typhoid", "Hepatitis B"],
  uzbekistan: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B", "Rabies"],
  uruguay: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B", "Rabies"],
  "united states": [],
  ukraine: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  uganda: [
    "Routine",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Yellow Fever",
    "Cholera",
    "Hepatitis B",
    "Meningococcal disease",
    "Rabies"
  ],
  tuvalu: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B"],
  turkmenistan: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B", "Rabies"],
  turkey: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B", "Rabies"],
  tunisia: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B", "Rabies"],
  tonga: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B"],
  tokelau: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B"],
  togo: [
    "Routine",
    "Yellow Fever",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Hepatitis B",
    "Meningococcal disease",
    "Rabies"
  ],
  "trinidad and tobago": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  "east timor": [
    "Routine",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Hepatitis B",
    "Japanese encephalitis",
    "Rabies",
    "Yellow Fever"
  ],
  thailand: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Japanese encephalitis",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  tanzania: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Cholera",
    "Hepatitis B",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  tajikistan: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Malaria"
  ],
  taiwan: [
    "Routine",
    "Hepatitis A",
    "Hepatitis B",
    "Japanese encephalitis",
    "Rabies"
  ],
  "sao Tome and Principe": [
    "Routine",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Yellow Fever",
    "Hepatitis B",
    "Rabies"
  ],
  syria: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B", "Rabies"],
  switzerland: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  sweden: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  suriname: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Yellow Fever",
    "Hepatitis B",
    "Malaria",
    "Rabies"
  ],
  sudan: [
    "Routine",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Hepatitis B",
    "Meningococcal disease",
    "Rabies",
    "Yellow Fever"
  ],
  "sri lanka": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Japanese encephalitis",
    "Rabies",
    "Yellow Fever"
  ],
  spain: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  "south sudan": [
    "Routine",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Yellow Fever",
    "Cholera",
    "Hepatitis B",
    "Meningococcal disease",
    "Rabies"
  ],
  "south korea": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Japanese encephalitis",
    "Malaria",
    "Rabies"
  ],
  "south georgia south sandwich islands": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B"
  ],
  "south africa": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  somalia: [
    "Routine",
    "Hepatitis A",
    "Malaria",
    "Poliomyelitis",
    "Typhoid",
    "Cholera",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  "solomon islands": [
    "Routine",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Hepatitis B",
    "Yellow Fever"
  ],
  slovenia: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  slovakia: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  "sint maarten": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  singapore: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  "sierra leone": [
    "Routine",
    "Yellow Fever",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Hepatitis B",
    "Rabies"
  ],
  seychelles: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  serbia: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  senegal: [
    "Routine",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Yellow Fever",
    "Hepatitis B",
    "Meningococcal disease",
    "Rabies"
  ],
  "sint eustatius": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  "saudi arabia": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Malaria",
    "Meningococcal disease",
    "Rabies",
    "Yellow Fever"
  ],
  "san marino": ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  samoa: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B", "Yellow Fever"],
  "saint pierre and miquelon": [
    "Routine",
    "Rabies",
    "Hepatitis A",
    "Hepatitis B"
  ],
  "saint Martin": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  "saint lucia": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  "st kitts and nevis": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  "saint helena": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies"
  ],
  "usvirgin islands": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies"
  ],
  saba: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  reunion: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  rwanda: [
    "Routine",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  "russian federation": [
    "Routine",
    "Hepatitis A",
    "Hepatitis B",
    "Japanese encephalitis",
    "Rabies"
  ],
  romania: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  "puerto Rico": ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B", "Rabies"],
  "saint barthelemy": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  paraguay: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever",
    "Malaria"
  ],
  "papua new guinea": [
    "Routine",
    "Hepatitis A",
    "Poliomyelitis",
    "Typhoid",
    "Hepatitis B",
    "Japanese encephalitis",
    "Malaria",
    "Rabies"
  ],
  portugal: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  poland: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  "pitcairn islands": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Yellow Fever"
  ],
  philippines: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Japanese encephalitis",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  peru: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  qatar: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B", "Rabies"],
  panama: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever",
    "Malaria"
  ],
  palau: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B"],
  pakistan: [
    "Routine",
    "Hepatitis A",
    "Poliomyelitis",
    "Typhoid",
    "Hepatitis B",
    "Japanese encephalitis",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  oman: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Malaria",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  norway: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  "northern mariana islands": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B"
  ],
  "north korea": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Japanese encephalitis",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  "norfolk island": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Yellow Fever"
  ],
  niue: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B", "Yellow Fever"],
  nigeria: [
    "Routine",
    "Hepatitis A",
    "Malaria",
    "Poliomyelitis",
    "Typhoid",
    "Yellow Fever",
    "Cholera",
    "Hepatitis B",
    "Rabies",
    "Meningococcal disease"
  ],
  niger: [
    "Routine",
    "Yellow Fever",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Cholera",
    "Hepatitis B",
    "Meningococcal disease",
    "Poliomyelitis",
    "Rabies"
  ],
  nicaragua: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Malaria",
    "Rabies"
  ],
  "new zealand": ["Routine", "Hepatitis A", "Hepatitis B"],
  "new caledonia": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Yellow Fever"
  ],
  netherlands: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  nepal: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Japanese encephalitis",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  nauru: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B", "Yellow Fever"],
  namibia: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  mozambique: [
    "Routine",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Cholera",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  morocco: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B", "Rabies"],
  montserrat: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  montenegro: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  mongolia: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B", "Rabies"],
  moldova: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  micronesia: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B"],
  mexico: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Malaria",
    "Rabies"
  ],
  mayotte: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Malaria",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  mauritius: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  mauritania: [
    "Routine",
    "Malaria",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  martinique: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  monaco: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  "marshall islands": ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B"],
  malta: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies", "Yellow Fever"],
  mali: [
    "Routine",
    "Yellow Fever",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Hepatitis B",
    "Meningococcal disease",
    "Rabies"
  ],
  malaysia: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Japanese encephalitis",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  malawi: [
    "Routine",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Cholera",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  "maderia islands": ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  madagascar: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Malaria",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  macedonia: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  macau: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B", "Rabies"],
  luxembourg: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  lithuania: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  liechtenstein: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  libya: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  liberia: [
    "Routine",
    "Yellow Fever",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Hepatitis B",
    "Rabies"
  ],
  lesotho: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  lebanon: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B", "Rabies"],
  latvia: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  lhaos: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Japanese encephalitis",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  kyrgyzstan: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  kuwait: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B", "Rabies"],
  kosovo: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  kiribati: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Yellow Fever"
  ],
  kenya: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Cholera",
    "Hepatitis B",
    "Malaria",
    "Meningococcal disease",
    "Poliomyelitis",
    "Rabies",
    "Yellow Fever"
  ],
  kazakhstan: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  jordan: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  japan: [
    "Routine",
    "Hepatitis A",
    "Hepatitis B",
    "Japanese encephalitis",
    "Rabies"
  ],
  jamaica: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  israel: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies", "Typhoid"],
  ireland: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  iraq: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  iran: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Poliomyelitis",
    "Hepatitis B",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  indonesia: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Japanese encephalitis",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  india: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Cholera",
    "Hepatitis B",
    "Malaria",
    "Japanese encephalitis",
    "Rabies",
    "Yellow Fever"
  ],
  iceland: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  hungary: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  "hong kong": ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B", "Rabies"],
  honduras: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  italy: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  haiti: [
    "Routine",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Cholera",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  guyana: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Yellow Fever",
    "Hepatitis B",
    "Malaria",
    "Rabies"
  ],
  "guinea bissau": [
    "Routine",
    "Yellow Fever",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Hepatitis B",
    "Meningococcal disease",
    "Rabies"
  ],
  guinea: [
    "Routine",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Yellow Fever",
    "Hepatitis B",
    "Meningococcal disease",
    "Rabies"
  ],
  guatemala: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  guam: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B"],
  guadeloupe: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  "saint vincent and the grenadines": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  grenada: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  greenland: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  greece: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  gibraltar: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  ghana: [
    "Routine",
    "Yellow Fever",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Hepatitis B",
    "Meningococcal disease",
    "Rabies"
  ],
  germany: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  georgia: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  "the gambia": [
    "Routine",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Yellow Fever",
    "Hepatitis B",
    "Meningococcal disease",
    "Rabies"
  ],
  gabon: [
    "Routine",
    "Yellow Fever",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Hepatitis B",
    "Rabies"
  ],
  "french guiana": [
    "Routine",
    "Yellow Fever",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Malaria",
    "Rabies"
  ],
  finland: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  fiji: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B", "Yellow Fever"],
  "faroe island": ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  "falkland islands": ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B"],
  ethiopia: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Cholera",
    "Hepatitis B",
    "Malaria",
    "Meningococcal disease",
    "Poliomyelitis",
    "Rabies",
    "Yellow Fever"
  ],
  eswatini: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  estonia: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  france: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  eritrea: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Malaria",
    "Meningococcal disease",
    "Rabies",
    "Yellow Fever"
  ],
  "equatorial guinea": [
    "Routine",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Yellow Fever",
    "Hepatitis B",
    "Rabies"
  ],
  "united kingdom": ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  "el salvador": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  egypt: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  ecuador: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  "easter island": ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B"],
  "united arab emirates": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies"
  ],
  "dominican republic": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Cholera",
    "Hepatitis B",
    "Malaria",
    "Rabies"
  ],
  dominica: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  djibouti: [
    "Routine",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  denmark: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  "congo drc": [
    "Routine",
    "Yellow Fever",
    "Poliomyelitis",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Cholera",
    "Hepatitis B",
    "Rabies"
  ],
  cyprus: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  curacao: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  "côte d'ivoire": [
    "Routine",
    "Yellow Fever",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Hepatitis B",
    "Meningococcal disease",
    "Rabies"
  ],
  cuba: ["Routine", "Typhoid", "Hepatitis A", "Rabies", "Hepatitis B"],
  croatia: ["Routine", "Hepatitis A", "Rabies", "Hepatitis B"],
  "costa rica": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Malaria",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  "cook islands": ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B"],
  congo: [
    "Routine",
    "Yellow Fever",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Hepatitis B",
    "Rabies"
  ],
  comoros: [
    "Routine",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Hepatitis B",
    "Rabies"
  ],
  colombia: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  "christmas island": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Yellow Fever"
  ],
  china: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Japanese encephalitis",
    "Poliomyelitis",
    "Rabies",
    "Yellow Fever",
    "Malaria"
  ],
  chile: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B", "Rabies"],
  chad: [
    "Routine",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Cholera",
    "Hepatitis B",
    "Meningococcal disease",
    "Poliomyelitis",
    "Rabies",
    "Yellow Fever"
  ],
  "central african republic": [
    "Routine",
    "Yellow Fever",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Hepatitis B",
    "Meningococcal disease",
    "Rabies"
  ],
  "cocos islands": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Yellow Fever"
  ],
  "cayman islands": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies"
  ],
  "cape verde": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  "canary islands": ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  canada: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  cameroon: [
    "Routine",
    "Yellow Fever",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Cholera",
    "Hepatitis B",
    "Meningococcal disease",
    "Poliomyelitis",
    "Rabies"
  ],
  cambodia: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Japanese encephalitis",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  "turks and caicos": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies"
  ],
  burundi: [
    "Routine",
    "Yellow Fever",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Cholera",
    "Hepatitis B",
    "Rabies"
  ],
  burma: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Japanese encephalitis",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  "burkina faso": [
    "Routine",
    "Yellow Fever",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Hepatitis B",
    "Meningococcal disease",
    "Rabies"
  ],
  bulgaria: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  brunei: [
    "Routine",
    "Typhoid",
    "Hepatitis A",
    "Hepatitis B",
    "Japanese encephalitis",
    "Rabies",
    "Yellow Fever"
  ],
  "british indian ocean territory": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B"
  ],
  brazil: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  botswana: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  "bosnia and herzegovina": ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  australia: [
    "Routine",
    "Hepatitis A",
    "Hepatitis B",
    "Japanese encephalitis",
    "Rabies",
    "Yellow Fever"
  ],
  "french polynesia": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Yellow Fever",
    "Hepatitis B"
  ],
  aruba: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B", "Rabies"],
  armenia: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  argentina: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  "antigua and barbuda": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  antarctica: [],
  anguilla: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B", "Rabies"],
  angola: [
    "Yellow Fever",
    "Routine",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Cholera",
    "Hepatitis B",
    "Rabies"
  ],
  "british virgin islands": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies"
  ],
  andorra: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  "american samoa": ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B"],
  algeria: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Cholera",
    "Malaria",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  albania: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies", "Yellow Fever"]
};

var vaccineDescriptions = {
  Routine:
    "Make sure you are up-to-date on routine vaccines before every trip. These vaccines include measles-mumps-rubella (MMR) vaccine, diphtheria-tetanus-pertussis vaccine, varicella (chickenpox) vaccine, polio vaccine, and your yearly flu shot.",
  "Hepatitis A":
    "CDC recommends this vaccine because you can get hepatitis A through contaminated food or water, regardless of where you are eating or staying.",
  Typhoid:
    "You can get typhoid through contaminated food or water. CDC recommends this vaccine for most travelers, especially if you are staying with friends or relatives, visiting smaller cities or rural areas, or if you are an adventurous eater.",
  Poliomyelitis: "You may need a polio vaccine before your trip.",
  "Hepatitis B":
    "You can get hepatitis B through sexual contact, contaminated needles, and blood products, so CDC recommends this vaccine if you might have sex with a new partner, get a tattoo or piercing, or have any medical procedures.",
  Malaria:
    "You may need to take prescription medicine before, during, and after your trip to prevent malaria, especially if you are visiting low-altitude areas.",
  Rabies:
    "Although rabies can be found in dogs, bats, and other mammals, it is not a major risk to most travelers. A vaccine is recommended if travelers are involved in outdoor and other activities in remote areas that put them at risk for animal bites (such as adventure travel and caving).",
  "Yellow Fever":
    "If you are traveling from a country other than the US, check with a doctor or the CDC to see if you may be required to get the yellow fever vaccine.",
  "Japanese encephalitis":
    "You may need this vaccine if your trip will last more than a month, depending on where you are going.",
  "Meningococcal disease":
    "CDC recommends this vaccine if you plan to visit areas located in the meningitis belt during the dry season (December–June), when the disease is most common.",
  Cholera:
    "CDC recommends this vaccine for adults who are traveling to areas of active cholera transmission."
};

if (vaccine[countryName.toLowerCase()] != undefined) {
  var vaccines = vaccine[countryName.toLowerCase()];
  console.log(vaccines);
  var numVaccines = vaccines.length;
  var innerTable = "";
  for (var i = 0; i < numVaccines; i++) {
    innerTable +=
      "<tr><td style=\"padding:12px;text-align: left; color: #58585f;font-family: 'Lato', sans-serif;\" >";
    innerTable += vaccines[i];
    innerTable +=
      "</td><td style=\"padding:12px;text-align: left; color: #58585f;font-family: 'Lato', sans-serif;\">";
    innerTable += vaccineDescriptions[vaccines[i]];
    innerTable += "</td></tr>";
  }
  console.log(innerTable);
  document.getElementById("vaccine-table").innerHTML = innerTable;
}
