export interface WeatherCondition {
  [key: number]: {
    description: string;
    suggestion: string; 
    product: string;
  };
}

// suggestion data
export const weatherConditions: WeatherCondition = {
  200: {
    description: "Thunderstorm with light rain",
    suggestion: "Stay indoors and enjoy a cozy movie day.",
    product: "Noise-cancelling headphones or a rain jacket",
  },
  201: {
    description: "Thunderstorm with rain",
    suggestion: "Perfect time for a warm drink and a good book.",
    product: "Comfortable blanket or hot water bottle",
  },
  202: {
    description: "Thunderstorm with heavy rain",
    suggestion: "Perfect time for journaling or deep work indoors.",
    product: "Emergency flashlight and surge protector",
  },

  210: {
    description: "Light thunderstorm",
    suggestion: "Great time for a cozy indoor activity.",
    product: "Board games or a puzzle",
  },
  211: {
    description: "Thunderstorm",
    suggestion: "Perfect time for a warm drink and a good book.",
    product: "Comfortable blanket or hot water bottle",
  },
  212: {
    description: "Heavy thunderstorm",
    suggestion: "Perfect time for journaling or deep work indoors.",
    product: "Emergency flashlight and surge protector",
  },
  221: {
    description: "Ragged thunderstorm",
    suggestion: "Great time for a cozy indoor activity.",
    product: "Board games or a puzzle",
  },
  230: {
    description: "Thunderstorm with light drizzle",
    suggestion: "Great time for a cozy indoor activity.",
    product: "Board games or a puzzle",
  },
  231: {
    description: "Thunderstorm with drizzle",
    suggestion: "Perfect time for journaling or deep work indoors.",
    product: "Emergency flashlight and surge protector",
  },
  232: {
    description: "Thunderstorm with heavy drizzle",
    suggestion: "Perfect time for journaling or deep work indoors.",
    product: "Emergency flashlight and surge protector",
  },
  300: {
    description: "Light intensity drizzle",
    suggestion: "Take a short walk with a cup of warm coffee.",
    product: "Compact umbrella or a light hoodie",
  },
  301: {
    description: "Drizzle rain",
    suggestion: "Perfect time for a cozy indoor activity.",
    product: "Board games or a puzzle",
  },
  302: {
    description: "Heavy intensity drizzle",
    suggestion: "Great time for a cozy indoor activity.",
    product: "Board games or a puzzle",
  },
  310: {
    description: "Light intensity drizzle rain",
    suggestion: "Take a short walk with a cup of warm coffee.",
    product: "Compact umbrella or a light hoodie",
  },
  311: {
    description: "Drizzle rain",
    suggestion: "Perfect time for a cozy indoor activity.",
    product: "Board games or a puzzle",
  },
  312: {
    description: "Heavy drizzle rain",
    suggestion: "Listen to lo-fi or ambient music while reading.",
    product: "Water-resistant shoes or bag cover",
  },
  313: {
    description: "Shower rain and drizzle",
    suggestion: "Perfect time for a cozy indoor activity.",
    product: "Board games or a puzzle",
  },
  314: {
    description: "heavy shower rain and drizzle",
    suggestion: "Perfect time for a cozy indoor activity.",
    product: "Board games or a puzzle",
  },
  321: {
    description: "Shower drizzle",
    suggestion: "Perfect time for a cozy indoor activity.",
    product: "Board games or a puzzle",
  },
  500: {
    description: "Light rain",
    suggestion: "Grab a warm drink and watch the raindrops.",
    product: "Transparent umbrella or waterproof phone case",
  },
  501: {
    description: "Moderate rain",
    suggestion: "Perfect time for a cozy indoor activity.",
    product: "Board games or a puzzle",
  },
  503: {
    description: "very heavy rain",
    suggestion: "Perfect time for a cozy indoor activity.",
    product: "Board games or a puzzle",
  },
  504: {
    description: "extreme rain",
    suggestion: "Perfect time for a cozy indoor activity.",
    product: "Board games or a puzzle",
  },
  502: {
    description: "Heavy intensity rain",
    suggestion: "Delay outdoor plans; great time to bake or cook.",
    product: "Heavy-duty raincoat or indoor drying rack",
  },
  511: {
    description: "Freezing rain",
    suggestion: "Stay in and keep warm; avoid driving.",
    product: "Ice scraper and hand warmers",
  },
  520: {
    description: "Light intensity shower rain",
    suggestion: "Perfect time for a cozy indoor activity.",
    product: "Board games or a puzzle",
  },
  521: {
    description: "Shower rain",
    suggestion: "Perfect time for a cozy indoor activity.",
    product: "Board games or a puzzle",
  },
  522: {
    description: "Heavy intensity shower rain",
    suggestion: "Perfect time for a cozy indoor activity.",
    product: "Board games or a puzzle",
  },
  531: {
    description: "Ragged shower rain",
    suggestion: "Perfect time for a cozy indoor activity.",
    product: "Board games or a puzzle",
  },
  600: {
    description: "Light snow",
    suggestion: "Take photos of the snowflakes or go for a gentle walk.",
    product: "Gloves and insulated boots",
  },
  601: {
    description: "Snow",
    suggestion: "Perfect time for a cozy indoor activity.",
    product: "Board games or a puzzle",
  },
  602: {
    description: "Heavy snow",
    suggestion: "Build a snowman or have a hot chocolate by the window.",
    product: "Shovel and snow boots",
  },

  611: {
    description: "Sleet",
    suggestion: "Perfect time for a cozy indoor activity.",
    product: "Board games or a puzzle",
  },
  612: {
    description: "Light shower sleet",
    suggestion: "Perfect time for a cozy indoor activity.",
    product: "Board games or a puzzle",
  },
  615: {
    description: "Light rain and snow",
    suggestion: "Perfect time for a cozy indoor activity.",
    product: "Board games or a puzzle",
  },
  616: {
    description: "Rain and snow",
    suggestion: "Perfect time for a cozy indoor activity.",
    product: "Board games or a puzzle",
  },
  620: {
    description: "Light shower snow",
    suggestion: "Perfect time for a cozy indoor activity.",
    product: "Board games or a puzzle",
  },
  621: {
    description: "Shower snow",
    suggestion: "Perfect time for a cozy indoor activity.",
    product: "Board games or a puzzle",
  },
  622: {
    description: "Heavy shower snow",
    suggestion: "Perfect time for a cozy indoor activity.",
    product: "Board games or a puzzle",
  },

  701: {
    description: "Mist",
    suggestion: "Perfect ambiance for meditation or a quiet stroll.",
    product: "Reflective gear or a flashlight",
  },
  711: {
    description: "Smoke",
    suggestion: "Stay indoors and avoid outdoor activities.",
    product: "Air purifier or face mask",
  },
  721: {
    description: "Haze",
    suggestion: "Stay indoors and avoid outdoor activities.",
    product: "Air purifier or face mask",
  },
  731: {
    description: "Sand or dust",
    suggestion: "Stay indoors and avoid outdoor activities.",
    product: "Air purifier or face mask",
  },

  741: {
    description: "Fog",
    suggestion: "Listen to an audiobook indoors.",
    product: "Car fog lights or anti-fog glasses spray",
  },
  751: {
    description: "Sand",
    suggestion: "Stay indoors and avoid outdoor activities.",
    product: "Air purifier or face mask",
  },
  761: {
    description: "Dust",
    suggestion: "Stay indoors and avoid outdoor activities.",
    product: "Air purifier or face mask",
  },
  762: {
    description: "volcanic ash",
    suggestion: "Stay indoors and avoid outdoor activities.",
    product: "Air purifier or face mask",
  },
  771: {
    description: "Squall",
    suggestion: "Stay indoors and avoid outdoor activities.",
    product: "Emergency kit with food and first aid",
  },
  781: {
    description: "Tornado",
    suggestion: "Seek shelter immediately.",
    product: "Emergency kit with food and first aid",
  },
  800: {
    description: "Clear sky",
    suggestion: "Great day for outdoor adventures or stargazing at night.",
    product: "Sunglasses or picnic mat",
  },
  801: {
    description: "Few clouds (11–25%)",
    suggestion: "Ideal for a casual walk or a bike ride.",
    product: "Light jacket or camera for cloud photography",
  },
  802: {
    description: "Scattered clouds (25–50%)",
    suggestion: "Perfect for a picnic or outdoor gathering.",
    product: "Sunscreen or portable charger",
  },
  803: {
    description: "Broken clouds (51–84%)",
    suggestion: "Great for a casual walk or outdoor activities.",
    product: "Light jacket or camera for cloud photography",
  },
  804: {
    description: "Overcast clouds (85–100%)",
    suggestion: "Focus day – ideal for work, writing, or deep focus tasks.",
    product: "Desk lamp or warm beverage",
  },
};
