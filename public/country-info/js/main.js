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
  "macau sar":
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
  "hong kong sar":
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
