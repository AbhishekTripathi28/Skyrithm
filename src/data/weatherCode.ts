export interface Song {
  songName: string;
  artist: string;
  link: string;
}

export interface ProductItem {
  productImage: string;
  productName: string;
  productAltText: string;
}


export interface WeatherConditionsType {
  [key: number]: {
    description: string;
    suggestion: Array<string>; 
   product: ProductItem[];
   songs: Song[];
  };
}

// suggestion data
export const weatherConditions: WeatherConditionsType = {
  200: {
    description: "Thunderstorm with light rain",
    suggestion: [
      "Stay indoors and enjoy a cozy movie session.",
      "Sip a hot drink and relax near the window."
    ],
    product: [
      {
        productImage: "https://unsplash.com/photos/person-wearing-blue-raincoat-7d7ftGJ5Gns",
        productName: "Light Waterproof Rain Jacket",
        productAltText: "person wearing blue raincoat"
      },
      {
        productImage: "https://unsplash.com/s/photos/blanket",
        productName: "Soft Throw Blanket",
        productAltText: "cozy throw blanket"
      },
      {
        productImage: "https://unsplash.com/s/photos/headphones",
        productName: "Noise-Cancelling Headphones (over-ear)",
        productAltText: "over ear headphones on table"
      },
      {
        productImage: "https://www.amazon.com/Surge-Protector-Power-Strip-Extension/dp/B09PDLBFKY",
        productName: "Portable Power Bank / Surge Protector (combo)",
        productAltText: "power strip / surge protector"
      }
    ],
    songs: [
      { songName: "Thunder", artist: "Imagine Dragons", link: "https://open.spotify.com/track/1zB4vmk8tFRmM9UULNzbLB" },
      { songName: "Set Fire to the Rain", artist: "Adele", link: "https://open.spotify.com/track/7j4OmvkjRz0PrjFADlHfQx" },
      { songName: "Stormy Weather", artist: "Etta James", link: "https://open.spotify.com/track/2IdwQxhJn9ZE4zIotcCefR" },
      { songName: "Here Comes The Rain Again", artist: "Eurythmics", link: "https://open.spotify.com/track/34wJ1aZsoYdhUH4RqkjrVb" }
    ]
  },

  201: {
    description: "Thunderstorm with rain",
    suggestion: [
      "Perfect moment to read a book indoors.",
      "Play calm background music and unwind."
    ],
    product: [
      {
        productImage: "https://www.amazon.com/dp/B07Z5Y6D3B", // example hot water bottle product page
        productName: "Hot Water Bottle (insulated cover)",
        productAltText: "hot water bottle with knitted cover"
      },
      {
        productImage: "https://unsplash.com/s/photos/indoor-slippers",
        productName: "Indoor Slippers",
        productAltText: "cozy home slippers"
      },
      {
        productImage: "https://www.amazon.com/s?k=scented+candles",
        productName: "Aromatic Scented Candles",
        productAltText: "set of scented candles"
      },
      {
        productImage: "https://www.amazon.com/s?k=waterproof+phone+pouch",
        productName: "Waterproof Phone Pouch",
        productAltText: "clear waterproof phone pouch"
      }
    ],
    songs: [
      { songName: "Riders on the Storm", artist: "The Doors", link: "https://open.spotify.com/track/14XWXWv5FoCbFzLksawpEe" },
      { songName: "The Rain Song", artist: "Led Zeppelin", link: "https://open.spotify.com/track/1NB8xbMhoye2jt0ifngowy" },
      { songName: "Lightning", artist: "Little Mix", link: "https://open.spotify.com/track/4qP2SRn2u9tqv8gkGZb7XO" },
      { songName: "Rainy Day", artist: "Coldplay", link: "https://open.spotify.com/track/3Wn1xqjv0vJd2qzH8o4ZKB" }
    ]
  },

  202: {
    description: "Thunderstorm with heavy rain",
    suggestion: [
      "Great time for journaling or deep focus work.",
      "Stay inside and prepare a warm beverage."
    ],
    product: [
      {
        productImage: "https://www.amazon.com/s?k=emergency+flashlight",
        productName: "Rechargeable Emergency Flashlight",
        productAltText: "handheld LED flashlight"
      },
      {
        productImage: "https://unsplash.com/s/photos/thermal-wear",
        productName: "Thermal Base Layers",
        productAltText: "thermal innerwear folded"
      },
      {
        productImage: "https://www.amazon.com/s?k=waterproof+boots",
        productName: "Waterproof Boots",
        productAltText: "heavy duty waterproof boots"
      },
      {
        productImage: "https://www.amazon.com/s?k=surge+protector",
        productName: "Surge Protector Power Strip",
        productAltText: "surge protector power strip"
      }
    ],
    songs: [
      { songName: "Thunderstruck", artist: "AC/DC", link: "https://open.spotify.com/track/57bgtoPSgt236HzfBOd8kj" },
      { songName: "Rain On Me", artist: "Lady Gaga & Ariana Grande", link: "https://open.spotify.com/track/24ySl2hOPGCDcxBxFIqWBu" },
      { songName: "November Rain", artist: "Guns N' Roses", link: "https://open.spotify.com/track/2Vq0qDkG8vJYl3uS4i4mCq" },
      { songName: "Purple Rain", artist: "Prince", link: "https://open.spotify.com/track/2YpeDb67231RjR0MgVLzsG" }
    ]
  },

  210: {
    description: "Light thunderstorm",
    suggestion: [
      "Enjoy calming instrumental music indoors.",
      "Perfect time to relax away from screens."
    ],
    product: [
      {
        productImage: "https://unsplash.com/s/photos/board-games",
        productName: "Board Games (group)",
        productAltText: "classic board game"
      },
      {
        productImage: "https://unsplash.com/s/photos/throw-blanket",
        productName: "Soft Throw Blanket",
        productAltText: "cozy throw blanket on couch"
      },
      {
        productImage: "https://www.amazon.com/s?k=aroma+diffuser",
        productName: "Aroma Diffuser (ultrasonic)",
        productAltText: "essential oil diffuser"
      },
      {
        productImage: "https://unsplash.com/s/photos/warm-socks",
        productName: "Warm Socks",
        productAltText: "pair of woolen socks"
      }
    ],
    songs: [
      { songName: "Electric Feel", artist: "MGMT", link: "https://open.spotify.com/track/4MM2i6w2v9wXb8v4TZgdiQ" },
      { songName: "Slow Dancing in the Dark", artist: "Joji", link: "https://open.spotify.com/track/7pKfPomDEeI4TPT6EOYjn9" },
      { songName: "Dreams", artist: "Fleetwood Mac", link: "https://open.spotify.com/track/1rfofaqEpACxVEHIZBJe6W" },
      { songName: "Thunderclouds", artist: "LSD", link: "https://open.spotify.com/track/6FJ0E4gYxwR3y5dJr6w9dF" }
    ]
  },

  211: {
    description: "Thunderstorm",
    suggestion: [
      "Perfect time for a warm drink and a good book.",
      "Make tea or coffee and relax."
    ],
    product: [
      {
        productImage: "https://unsplash.com/s/photos/hoodie",
        productName: "Warm Hoodie",
        productAltText: "cozy hoodie on hanger"
      },
      {
        productImage: "https://unsplash.com/s/photos/indoor-slippers",
        productName: "Indoor Slippers",
        productAltText: "comfort home slippers"
      },
      {
        productImage: "https://unsplash.com/s/photos/rain-jacket",
        productName: "Rain Jacket",
        productAltText: "waterproof rain jacket"
      },
      {
        productImage: "https://www.amazon.com/s?k=hot+water+bag",
        productName: "Hot Water Bag",
        productAltText: "classic hot water bag"
      }
    ],
    songs: [
      { songName: "Chasing Cars", artist: "Snow Patrol", link: "https://open.spotify.com/track/5z0nU6vQe2ndWfM5m8t8cF" },
      { songName: "Believer", artist: "Imagine Dragons", link: "https://open.spotify.com/track/0pqnGHJpmpxLKifKRmU6WP" },
      { songName: "Electric", artist: "Katy Perry", link: "https://open.spotify.com/track/5tV8T6kR8rXwDwz0YqX4Vm" },
      { songName: "Wake Me Up When September Ends", artist: "Green Day", link: "https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P" }
    ]
  },

  212: {
    description: "Heavy thunderstorm",
    suggestion: [
      "Perfect time for journaling or deep work indoors.",
      "Wrap yourself in a blanket and rest."
    ],
    product: [
      {
        productImage: "https://www.amazon.com/s?k=thermal+blanket",
        productName: "Thermal Emergency Blanket",
        productAltText: "compact thermal blanket"
      },
      {
        productImage: "https://www.amazon.com/s?k=led+lantern",
        productName: "Battery LED Lantern",
        productAltText: "portable led lantern"
      },
      {
        productImage: "https://www.amazon.com/s?k=emergency+flashlight",
        productName: "Emergency Flashlight (rechargeable)",
        productAltText: "rechargeable flashlight"
      },
      {
        productImage: "https://www.amazon.com/s?k=surge+protector",
        productName: "Surge Protector",
        productAltText: "heavy duty surge protector"
      }
    ],
    songs: [
      { songName: "Thunder Rolls", artist: "Garth Brooks", link: "https://open.spotify.com/track/1A5XIKWfGmVNTvKGgTg1w7" },
      { songName: "Storm Warning", artist: "Hunter Hayes", link: "https://open.spotify.com/track/3k4nFzC4s9PUd1q7r7rHn3" },
      { songName: "Dark Times", artist: "The Weeknd", link: "https://open.spotify.com/track/1Fz3W0Zb6fO3f0QzOQv0bq" },
      { songName: "Hurricane", artist: "Halsey", link: "https://open.spotify.com/track/1jJci4qxiYcOHhQR247rEU" }
    ]
  },

  221: {
    description: "Ragged thunderstorm",
    suggestion: [
      "Stay safe indoors and avoid outdoor travel.",
      "Play relaxing music and focus on self-care."
    ],
    product: [
      {
        productImage: "https://www.amazon.com/s?k=portable+charger",
        productName: "Portable Phone Charger (Anker style)",
        productAltText: "handheld power bank"
      },
      {
        productImage: "https://unsplash.com/s/photos/blanket",
        productName: "Warm Blanket",
        productAltText: "cozy blanket"
      },
      {
        productImage: "https://www.amazon.com/s?k=weather+radio",
        productName: "Battery-Powered Weather Radio",
        productAltText: "emergency weather radio"
      },
      {
        productImage: "https://unsplash.com/s/photos/board-games",
        productName: "Board Games",
        productAltText: "classic family board game"
      }
    ],
    songs: [
      { songName: "Shelter", artist: "Porter Robinson & Madeon", link: "https://open.spotify.com/track/0jzJq4m8O6Jp9x0w5tKk2y" },
      { songName: "Weather Storm", artist: "Massive Attack", link: "https://open.spotify.com/track/1r0kz1mK4R2y3v9m8sQ2uW" },
      { songName: "Clouds", artist: "NF", link: "https://open.spotify.com/track/1eKTO2d7gQq5aG0M4b3G7K" },
      { songName: "Another Storm", artist: "Mumford & Sons", link: "https://open.spotify.com/track/2y2m5J3k9sH1f2XQ9jJc3A" }
    ]
  },

  230: {
    description: "Thunderstorm with light drizzle",
    suggestion: [
      "Small indoor workout session.",
      "Watch a comfort movie or series."
    ],
    product: [
      {
        productImage: "https://unsplash.com/s/photos/card-games",
        productName: "Card Games",
        productAltText: "playing cards on table"
      },
      {
        productImage: "https://unsplash.com/s/photos/throw-blanket",
        productName: "Soft Blanket",
        productAltText: "knitted throw blanket"
      },
      {
        productImage: "https://unsplash.com/s/photos/raincoat",
        productName: "Light Raincoat",
        productAltText: "compact raincoat"
      },
      {
        productImage: "https://www.amazon.com/s?k=portable+humidifier",
        productName: "Portable Humidifier",
        productAltText: "small USB humidifier"
      }
    ],
    songs: [
      { songName: "Drizzle", artist: "Nujabes", link: "https://open.spotify.com/track/6fG3E2m1B3b5dFqZg1x8y2" },
      { songName: "A Storm Is Coming", artist: "Hans Zimmer", link: "https://open.spotify.com/track/3uXcJfjQxR3vJdZ8Z2z5qH" },
      { songName: "Lovely", artist: "Billie Eilish", link: "https://open.spotify.com/track/0wG4jm9Sv28R3w9uGuJ4AV" },
      { songName: "Lightning Bolt", artist: "Jake Bugg", link: "https://open.spotify.com/track/4w8niZPIYd4YPxjLz2xY3H" }
    ]
  },

  231: {
    description: "Thunderstorm with drizzle",
    suggestion: [
      "Relax with light music indoors.",
      "Enjoy warm snacks or soup."
    ],
    product: [
      {
        productImage: "https://www.amazon.com/s?k=emergency+torch",
        productName: "Emergency Torch",
        productAltText: "compact rechargeable torch"
      },
      {
        productImage: "https://unsplash.com/s/photos/wool-shawl",
        productName: "Warm Shawl",
        productAltText: "soft warm shawl"
      },
      {
        productImage: "https://www.amazon.com/s?k=waterproof+shoes",
        productName: "Rainproof Shoes",
        productAltText: "water resistant walking shoes"
      },
      {
        productImage: "https://www.amazon.com/s?k=aroma+diffuser",
        productName: "Aroma Diffuser",
        productAltText: "ultrasonic aroma diffuser"
      }
    ],
    songs: [
      { songName: "Drifting", artist: "G-Eazy", link: "https://open.spotify.com/track/3pqy6x5F8bDg1X4mQk2mDA" },
      { songName: "Rain", artist: "The Script", link: "https://open.spotify.com/track/6k0WwN7d8x7k6R6B7qvQqD" },
      { songName: "Lightning Crashes", artist: "Live", link: "https://open.spotify.com/track/2hTn8pQZQ2dO3a9nQ6r2cG" },
      { songName: "Storms", artist: "Fleetwood Mac", link: "https://open.spotify.com/track/3b8oKk6hWk5xK7Fj6nF9Dj" }
    ]
  },

  232: {
    description: "Thunderstorm with heavy drizzle",
    suggestion: [
      "Do some journaling or meditation indoors.",
      "Wrap yourself warm and relax."
    ],
    product: [
      {
        productImage: "https://www.amazon.com/s?k=led+lantern",
        productName: "LED Lantern",
        productAltText: "compact led lantern for emergencies"
      },
      {
        productImage: "https://unsplash.com/s/photos/thermal-wear",
        productName: "Thermal Wear",
        productAltText: "folded thermal innerwear"
      },
      {
        productImage: "https://unsplash.com/s/photos/raincoat",
        productName: "Rainproof Coat",
        productAltText: "long raincoat with hood"
      },
      {
        productImage: "https://www.amazon.com/s?k=surge+protector",
        productName: "Surge Protector",
        productAltText: "power strip with surge protection"
      }
    ],
    songs: [
      { songName: "Rainstorm", artist: "Paul Hardcastle", link: "https://open.spotify.com/track/6k5fF8a3y0Qj0l1sYt6x7E" },
      { songName: "Skyfall", artist: "Adele", link: "https://open.spotify.com/track/0RkVnI8gkQfQ8h9p4Q6s7R" },
      { songName: "Runaway", artist: "Aurora", link: "https://open.spotify.com/track/1d1b2MBGSaY7bYTAEN1uWb" },
      { songName: "Rainmaker", artist: "Iron Maiden", link: "https://open.spotify.com/track/4K5fQk3m2a8f0L0J3k9z6N" }
    ]
  },
  300: {
    description: "Light intensity drizzle",
    suggestion: [
      "Take a short peaceful walk with an umbrella.",
      "Listen to calm music while enjoying the light rain."
    ],
    product: [
      {
        productImage: "https://thecraze.in/products/womens-short-rain-boots-waterproof-wear-resistant", 
        productName: "Women’s Short Waterproof Rain Boots",
        productAltText: "rubber rain boots"
      },
      {
        productImage: "https://www.amazon.in/Powerful-Zoomable-Waterproof-Rechargeable-Emergency/dp/B093D4KHCC",
        productName: "5-Mode Waterproof Rechargeable LED Flashlight",
        productAltText: "zoomable LED torch"
      },
      {
        productImage: "https://turn0image1", 
        productName: "Water-Resistant Gumboots",
        productAltText: "gumboots standing in water"
      },
      {
        productImage: "https://turn0image2", 
        productName: "Black Safety Gumboot",
        productAltText: "tall black rubber safety boot"
      }
    ],
    songs: [
      { songName: "Someone Like You", artist: "Adele", link: "https://open.spotify.com/track/4kflIGfjdZJW4ot2ioixTB" },
      { songName: "Rivers and Roads", artist: "The Head and the Heart", link: "https://open.spotify.com/track/05ZyRFeL7tihEHuqa9nrmH" },
      { songName: "Falling", artist: "Harry Styles", link: "https://open.spotify.com/track/1CD6uwy7J5X0rhGeVQSEdR" },
      { songName: "Coffee", artist: "Beabadoobee", link: "https://open.spotify.com/track/2kgzv8twWwNPoTsxGn4Zx9" }
    ]
  },

  301: {
    description: "Drizzle",
    suggestion: [
      "Carry an umbrella if you're stepping outside.",
      "Perfect time for a light outdoor walk."
    ],
    product: [
      {
        productImage: "https://thecraze.in/products/womens-rubber-knee-high-rain-boots-waterproof-outdoor-work-shoes",
        productName: "Knee-High Waterproof Rain Boots",
        productAltText: "knee high rubber rain boots"
      },
      {
        productImage: "https://turn0image5",
        productName: "Kids’ Astronaut Rain Boots",
        productAltText: "blue rain boots with astronaut design"
      },
      {
        productImage: "https://turn0image0",
        productName: "Matte Rain Boots",
        productAltText: "lilac matte rain boots"
      },
      {
        productImage: "https://turn0image4",
        productName: "Cartoon Sky Rain Boots",
        productAltText: "blue cartoon rain boots"
      }
    ],
    songs: [
      { songName: "All I Want", artist: "Kodaline", link: "https://open.spotify.com/track/0LG7xp89InOJnbUqxfCyfT" },
      { songName: "Ophelia", artist: "The Lumineers", link: "https://open.spotify.com/track/0DyllKhzorHwLeMIbPltBX" },
      { songName: "Line Without a Hook", artist: "Ricky Montgomery", link: "https://open.spotify.com/track/7JSmrK1gPkkQ70QqJDVJHk" },
      { songName: "Youth", artist: "Daughter", link: "https://open.spotify.com/track/3DXIjXd7t9kkfTS3RD0fBm" }
    ]
  },

  302: {
    description: "Heavy intensity drizzle",
    suggestion: [
      "Use a raincoat when stepping outside.",
      "Stay indoors if possible to avoid the slippery roads."
    ],
    product: [
      {
        productImage: "https://www.amazon.in/s?k=raincoat", 
        productName: "Adjustable Double-Layer Raincoat",
        productAltText: "polyester raincoat with pants"
      },
      {
        productImage: "https://turn0image1",
        productName: "Water-Resistant Rubber Boots",
        productAltText: "waterproof gumboots"
      },
      {
        productImage: "https://turn0image2",
        productName: "Safety Work Boot Gumboots",
        productAltText: "black rubber safety boot"
      },
      {
        productImage: "https://turn0image7",
        productName: "Rechargeable Searchlight Torch",
        productAltText: "zoomable waterproof flashlight"
      }
    ],
    songs: [
      { songName: "Motion Picture Soundtrack", artist: "Radiohead", link: "https://open.spotify.com/track/6PbjtsX0mLgSRtDKoeZ3EW" },
      { songName: "I See You", artist: "Phoebe Bridgers", link: "https://open.spotify.com/track/3bF2rZa36SkAyv3t7OHEdU" },
      { songName: "Slow Dancing", artist: "Aly & AJ", link: "https://open.spotify.com/track/6l9f9J9rG9LfVxLZgOAI7S" },
      { songName: "Night Trouble", artist: "Petit Biscuit", link: "https://open.spotify.com/track/4dx0ZJnsYnYgcsQtdZRc2L" }
    ]
  },

  310: {
    description: "Light drizzle rain",
    suggestion: [
      "Enjoy a relaxing walk with light rain around.",
      "Read a book near the window to enjoy the weather."
    ],
    product: [
      {
        productImage: "https://turn0image1",
        productName: "Rubber Ankle Gumboots",
        productAltText: "short rubber rain boots"
      },
      {
        productImage: "https://turn0image0",
        productName: "Lilac Rain Boots",
        productAltText: "lilac matte rain boots"
      },
      {
        productImage: "https://turn0image2",
        productName: "Black Safety Gumboots",
        productAltText: "black safety boot"
      },
      {
        productImage: "https://turn0image7",
        productName: "Emergency LED Flashlight",
        productAltText: "zoomable torch"
      }
    ],
    songs: [
      { songName: "Gravity", artist: "John Mayer", link: "https://open.spotify.com/track/3Ow1ckZX1N4fcbi4P6iHAc" },
      { songName: "Cherry Wine", artist: "Hozier", link: "https://open.spotify.com/track/4dlznrWzra9gqwsjvL7dNl" },
      { songName: "Halo", artist: "Beyoncé", link: "https://open.spotify.com/track/3G69hZyR5tgb8inzfTlVje" },
      { songName: "Here With Me", artist: "d4vd", link: "https://open.spotify.com/track/7J9hM0oVBUq6G0Ri5ZTVLL" }
    ]
  },

  311: {
    description: "Drizzle rain",
    suggestion: [
      "Spend time reading your favorite book.",
      "Enjoy a warm drink and soft background music."
    ],
    product: [
      {
        productImage: "https://thecraze.in/products/womens-short-rain-boots-waterproof-wear-resistant",
        productName: "Short Waterproof Rain Boots",
        productAltText: "low height rain gumboots"
      },
      {
        productImage: "https://turn0image1",
        productName: "Water-Resistant Work Boot",
        productAltText: "rubber rain boot"
      },
      {
        productImage: "https://turn0image4",
        productName: "Cartoon Rain Boots",
        productAltText: "blue rain boots with cartoon pattern"
      },
      {
        productImage: "https://turn0image3",
        productName: "Kids’ Pink Rain Boots",
        productAltText: "pink rubber rain boots"
      }
    ],
    songs: [
      { songName: "Someone Like You", artist: "Adele", link: "https://open.spotify.com/track/4kflIGfjdZJW4ot2ioixTB" },
      { songName: "Holocene", artist: "Bon Iver", link: "https://open.spotify.com/track/6V9YnBmFj1c5sJb2kSu3h1" },
      { songName: "Lost In You", artist: "Lewis Capaldi", link: "https://open.spotify.com/track/0tEcoq77V3dWCnIrC94n1g" },
      { songName: "Someone New", artist: "Hozier", link: "https://open.spotify.com/track/2RSHsoi04658QL5xgQVov3" }
    ]
  },

  312: {
    description: "Heavy drizzle rain",
    suggestion: [
      "Avoid long outdoor travel.",
      "Stay warm and enjoy some indoor hobbies."
    ],
    product: [
      {
        productImage: "https://turn0image2",
        productName: "High-Boot Safety Gumboots",
        productAltText: "black tall rubber boots"
      },
      {
        productImage: "https://turn0image7",
        productName: "Rechargeable Waterproof Flashlight",
        productAltText: "waterproof zoom flashlight"
      },
      {
        productImage: "https://turn0image0",
        productName: "Stylish Rain Boots",
        productAltText: "purple matte rain boots"
      },
      {
        productImage: "https://turn0image3",
        productName: "Children’s Pink Rain Boots",
        productAltText: "pink rubber boots"
      }
    ],
    songs: [
      { songName: "Youth", artist: "Daughter", link: "https://open.spotify.com/track/0O1OrTcfqZ1q7m0Q1dwRf6" },
      { songName: "Jealous", artist: "Labrinth", link: "https://open.spotify.com/track/4GgdArQm4W8fUylXH7gFdk" },
      { songName: "Cherry", artist: "Lana Del Rey", link: "https://open.spotify.com/track/7wGoVu4Dady5GV0Sv4UIsx" },
      { songName: "Rain", artist: "Taeyeon", link: "https://open.spotify.com/track/3wAtaigMuHL2U9BfMmuWIr" }
    ]
  },

  313: {
    description: "Light shower drizzle",
    suggestion: [
      "Carry an umbrella to avoid getting wet.",
      "Have a peaceful walk with drizzle sound around."
    ],
    product: [
      {
        productImage: "https://turn0image4",
        productName: "Kids’ Cartoon Rain Boots",
        productAltText: "blue rain boots with cartoon design"
      },
      {
        productImage: "https://turn0image2",
        productName: "Black Safety Boot",
        productAltText: "black gumboot"
      },
      {
        productImage: "https://turn0image7",
        productName: "5-Mode Search Light",
        productAltText: "powerful zoom flashlight"
      },
      {
        productImage: "https://turn0image1",
        productName: "Rubber Work Boot",
        productAltText: "dark rain boot"
      }
    ],
    songs: [
      { songName: "First Day of My Life", artist: "Bright Eyes", link: "https://open.spotify.com/track/0q1zgnkwaF35kLu0rMN1t7" },
      { songName: "Line Without a Hook", artist: "Ricky Montgomery", link: "https://open.spotify.com/track/7JSmrK1gPkkQ70QqJDVJHk" },
      { songName: "Warmth", artist: "Bastille", link: "https://open.spotify.com/track/0RRR57hb0IJfYxjItkN0ZK" },
      { songName: "Sing", artist: "Travis", link: "https://open.spotify.com/track/1FkW4WIqvXvQ5Y2QBjWOWp" }
    ]
  },

  314: {
    description: "Shower drizzle",
    suggestion: [
      "Take a pleasant short walk outside.",
      "Enjoy a warm drink indoors."
    ],
    product: [
      {
        productImage: "https://turn0image0",
        productName: "Matte Lilac Rain Boots",
        productAltText: "lilac rain boots"
      },
      {
        productImage: "https://turn0image2",
        productName: "Safety Gumboot",
        productAltText: "black rubber safety boot"
      },
      {
        productImage: "https://turn0image4",
        productName: "Cartoon Rain Boot",
        productAltText: "kids sky cartoon boots"
      },
      {
        productImage: "https://turn0image7",
        productName: "Waterproof Torch",
        productAltText: "black zoom flashlight"
      }
    ],
    songs: [
      { songName: "Electric Love", artist: "BØRNS", link: "https://open.spotify.com/track/65zJBUoE3ArPo3bA8Iy6ci" },
      { songName: "Stubborn Love", artist: "The Lumineers", link: "https://open.spotify.com/track/4n0B7KW9yWySkHbReXoJXn" },
      { songName: "Adore You", artist: "Harry Styles", link: "https://open.spotify.com/track/6fLX02FOCalendarwIhBSfd6X" },
      { songName: "West Coast", artist: "Lana Del Rey", link: "https://open.spotify.com/track/1xKZOE1ypQp82nYF6HcogD" }
    ]
  },

  321: {
    description: "Heavy shower drizzle",
    suggestion: [
      "Stay indoors to avoid getting drenched.",
      "Enjoy soothing music and warm snacks."
    ],
    product: [
      {
        productImage: "https://turn0image0",
        productName: "Rain-Resistant Boots",
        productAltText: "purple matte rain boots"
      },
      {
        productImage: "https://turn0image2",
        productName: "Tall Safety Boots",
        productAltText: "black cuffed gumboots"
      },
      {
        productImage: "https://turn0image4",
        productName: "Kids Cartoon Rain Boots",
        productAltText: "blue boots with cartoon print"
      },
      {
        productImage: "https://turn0image7",
        productName: "Zoomable LED Flashlight",
        productAltText: "long black torch"
      }
    ],
    songs: [
      { songName: "Another Love", artist: "Tom Odell", link: "https://open.spotify.com/track/7gFo7nxFCDvV8T4EX1eKpN" },
      { songName: "Breezeblocks", artist: "alt-J", link: "https://open.spotify.com/track/7hQJA50XrCWABAu5v6QZ4i" },
      { songName: "Ocean Eyes", artist: "Billie Eilish", link: "https://open.spotify.com/track/4RVwu0g32PAqgUiJoXkkbb" },
      { songName: "Watermelon Sugar", artist: "Harry Styles", link: "https://open.spotify.com/track/6UelLqGlWMcVH1E5c4H7lY" }
    ]
  },

  500: {
    description: "Light rain",
    suggestion: [
      "Grab a warm drink and watch the raindrops fall.",
      "Take a short walk under a sturdy umbrella."
    ],
    product: [
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/81g3s8t9QDL._AC_UL1500_.jpg",
        productName: "Compact Folding Umbrella",
        productAltText: "small black folding umbrella"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/71P2hrc9z7L._AC_UL1500_.jpg",
        productName: "Waterproof Raincoat",
        productAltText: "lightweight hooded raincoat"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61yklnqebML._AC_UL1500_.jpg",
        productName: "Waterproof Phone Pouch",
        productAltText: "transparent waterproof phone holder"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/71Wxv5OWrVL._AC_UL1500_.jpg",
        productName: "Anti-Slip Rain Shoes",
        productAltText: "black water-resistant shoes"
      }
    ],
    songs: [
      { songName: "Set Fire to the Rain", artist: "Adele", link: "https://open.spotify.com/track/3tjFYV6RSFtuktYl3ZtYcq" },
      { songName: "Banana Pancakes", artist: "Jack Johnson", link: "https://open.spotify.com/track/0hXx0Fqgj6MfN1xJmT0iFx" },
      { songName: "Rainy Days", artist: "Alec Benjamin", link: "https://open.spotify.com/track/1k21LX40w4K8l0a6RkXSlB" },
      { songName: "Raindrops Keep Fallin’ on My Head", artist: "B.J. Thomas", link: "https://open.spotify.com/track/0rZ1xoQk6C0H3tK6pRJ6Hq" }
    ]
  },

  501: {
    description: "Moderate rain",
    suggestion: [
      "Perfect time for indoor hobbies or reading.",
      "Listen to soft music while relaxing by a window."
    ],
    product: [
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61eZpEwjV-L._AC_UL1500_.jpg",
        productName: "Foldable Rain Poncho",
        productAltText: "lightweight disposable rain poncho"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61K3i3ws0VL._AC_UL1500_.jpg",
        productName: "Transparent Umbrella",
        productAltText: "clear dome umbrella"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/71kccmwu0lL._AC_UL1500_.jpg",
        productName: "Waterproof Outdoor Backpack Cover",
        productAltText: "rainproof backpack cover"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61Z1eTsylhL._AC_UL1500_.jpg",
        productName: "Insulated Water Bottle",
        productAltText: "stainless steel thermal bottle"
      }
    ],
    songs: [
      { songName: "Come Rain or Come Shine", artist: "Ray Charles", link: "https://open.spotify.com/track/0JmBX5pSC3HgK6L8FcdJvY" },
      { songName: "Umbrella", artist: "Rihanna", link: "https://open.spotify.com/track/4kflIGfjdZJW4ot2ioixTB" },
      { songName: "Singing in the Rain", artist: "Gene Kelly", link: "https://open.spotify.com/track/0F1GQelG8tD6xjGsuUrE7t" },
      { songName: "Rain", artist: "The Script", link: "https://open.spotify.com/track/4z2yQDPByqQ5oFj4Nf6W2S" }
    ]
  },

  502: {
    description: "Heavy intensity rain",
    suggestion: [
      "Delay outdoor plans; ideal for cooking or baking indoors.",
      "Enjoy a movie marathon while listening to the rain."
    ],
    product: [
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/71uR8eGQMnL._AC_UL1500_.jpg",
        productName: "Full-Length Waterproof Raincoat",
        productAltText: "long hooded raincoat"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61tY8i4+u5L._AC_UL1500_.jpg",
        productName: "Heavy Duty Rain Boots",
        productAltText: "tall rubber boots"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/71kNux0cHUL._AC_UL1500_.jpg",
        productName: "Indoor Clothes Drying Rack",
        productAltText: "foldable drying rack"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61H4bG1qpWL._AC_UL1500_.jpg",
        productName: "Waterproof Gloves",
        productAltText: "thermal waterproof gloves"
      }
    ],
    songs: [
      { songName: "Rainy Night in Georgia", artist: "Brook Benton", link: "https://open.spotify.com/track/6c0BMXDJh4kDK8LzF4z9fM" },
      { songName: "Here Comes the Rain Again", artist: "Eurythmics", link: "https://open.spotify.com/track/0IY1HjnmKkG0HPD3Fg5CXH" },
      { songName: "Heavy Rain", artist: "Elbow", link: "https://open.spotify.com/track/7C7jHk2OTN9R0M1k5CJm2B" },
      { songName: "Rain King", artist: "Counting Crows", link: "https://open.spotify.com/track/0iyTLCr5s3ffxLfl7xslP0" }
    ]
  },

  503: {
    description: "Very heavy rain",
    suggestion: [
      "Stay indoors and focus on indoor hobbies.",
      "Listen to calming music and relax."
    ],
    product: [
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/71FC13iNGCL._AC_UL1500_.jpg",
        productName: "Stormproof Umbrella",
        productAltText: "large windproof umbrella"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61qvbsz+xxL._AC_UL1500_.jpg",
        productName: "Thermal Indoor Socks",
        productAltText: "warm cozy socks"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61kjG6c8sHL._AC_UL1500_.jpg",
        productName: "Aromatic Candles Set",
        productAltText: "candles for indoor relaxation"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61cxyRmCuFL._AC_UL1500_.jpg",
        productName: "Indoor Slippers",
        productAltText: "soft warm slippers"
      }
    ],
    songs: [
      { songName: "Have You Ever Seen the Rain", artist: "Creedence Clearwater Revival", link: "https://open.spotify.com/track/2xY0i3c9ee8pAb83Yb7L9v" },
      { songName: "Rainy Day Women #12 & 35", artist: "Bob Dylan", link: "https://open.spotify.com/track/2sZx3gXZsEycikpdyB8ecD" },
      { songName: "Purple Rain", artist: "Prince", link: "https://open.spotify.com/track/1Bktj22Yf9ppl0bXy36Zf1" },
      { songName: "Rain", artist: "Breaking Benjamin", link: "https://open.spotify.com/track/7g0nYkz2hRvnfQXyXv4bDr" }
    ]
  },

  504: {
    description: "Extreme rain",
    suggestion: [
      "Avoid outdoor activities; stay safe inside.",
      "Use this time to relax with music or a movie."
    ],
    product: [
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/71OQv9a4xVL._AC_UL1500_.jpg",
        productName: "Heavy Duty Waterproof Raincoat",
        productAltText: "full-length raincoat with hood"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61kkuF4hLIL._AC_UL1500_.jpg",
        productName: "Tall Rubber Rain Boots",
        productAltText: "black waterproof boots"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/71mb+6YVemL._AC_UL1500_.jpg",
        productName: "Indoor Electric Heater",
        productAltText: "compact room heater"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61PO0hC5xVL._AC_UL1500_.jpg",
        productName: "Emergency LED Lantern",
        productAltText: "battery-powered lantern"
      }
    ],
    songs: [
      { songName: "Rainy Day", artist: "Coldplay", link: "https://open.spotify.com/track/0LG7xp89InOJnbUqxfCyf" },
      { songName: "The Rain Song", artist: "Led Zeppelin", link: "https://open.spotify.com/track/3Y6dS8iSct6TrpH2hXDfqT" },
      { songName: "Rain", artist: "Breaking Benjamin", link: "https://open.spotify.com/track/7g0nYkz2hRvnfQXyXv4bDr" },
      { songName: "Set Fire to the Rain", artist: "Adele", link: "https://open.spotify.com/track/3tjFYV6RSFtuktYl3ZtYcq" }
    ]
  },

  511: {
    description: "Freezing rain",
    suggestion: [
      "Stay indoors and keep warm; avoid driving.",
      "Enjoy hot drinks and cozy activities inside."
    ],
    product: [
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/71ZxVhjkV3L._AC_UL1500_.jpg",
        productName: "Thermal Winter Gloves",
        productAltText: "insulated warm gloves"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61bXvZ4k-AL._AC_UL1500_.jpg",
        productName: "Ice Scraper",
        productAltText: "car windshield ice scraper"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61RQkAd-hvL._AC_UL1500_.jpg",
        productName: "Hand Warmers",
        productAltText: "reusable hand warmer packs"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/71M8kb9n5NL._AC_UL1500_.jpg",
        productName: "Insulated Thermal Jacket",
        productAltText: "warm winter jacket"
      }
    ],
    songs: [
      { songName: "Cold as Ice", artist: "Foreigner", link: "https://open.spotify.com/track/5J8em4Q6sH7yRL8nWTwSqp" },
      { songName: "Let It Snow! Let It Snow! Let It Snow!", artist: "Dean Martin", link: "https://open.spotify.com/track/7yD2UowUe7h8xTqR6cYkQp" },
      { songName: "Winter Song", artist: "Sara Bareilles & Ingrid Michaelson", link: "https://open.spotify.com/track/5q8W0hDnoyx3dTdtRk1I7Q" },
      { songName: "Frozen", artist: "Madonna", link: "https://open.spotify.com/track/4ADYvUZf3aBz1szXItlK3J" }
    ]
  },
 600: {
    description: "Light snow",
    suggestion: [
      "Take photos of snowflakes or go for a gentle walk.",
      "Enjoy a warm drink by the window."
    ],
    product: [
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/71c6tkb8ZNL._AC_UL1500_.jpg",
        productName: "Insulated Gloves",
        productAltText: "warm winter gloves"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/71iyC9UogpL._AC_UL1500_.jpg",
        productName: "Waterproof Snow Boots",
        productAltText: "tall insulated boots"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/81+7k+2zwqL._AC_UL1500_.jpg",
        productName: "Warm Scarf",
        productAltText: "cozy wool scarf"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/81PQp3LMHhL._AC_UL1500_.jpg",
        productName: "Thermal Socks",
        productAltText: "warm winter socks"
      }
    ],
    songs: [
      { songName: "Snow (Hey Oh)", artist: "Red Hot Chili Peppers", link: "https://open.spotify.com/track/0pqnGHJpmpxLKifKRmU6hD" },
      { songName: "White Winter Hymnal", artist: "Fleet Foxes", link: "https://open.spotify.com/track/4MTkypdGZ3nI6Ewi92jCym" },
      { songName: "Sweater Weather", artist: "The Neighbourhood", link: "https://open.spotify.com/track/3jjujdWJ72nww5eGnfs2E7" },
      { songName: "Let It Snow! Let It Snow! Let It Snow!", artist: "Dean Martin", link: "https://open.spotify.com/track/7yD2UowUe7h8xTqR6cYkQp" }
    ]
  },

  601: {
    description: "Snow",
    suggestion: [
      "Perfect time for a cozy indoor activity.",
      "Read a book or enjoy a warm beverage."
    ],
    product: [
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/71UuCjFq+YL._AC_UL1500_.jpg",
        productName: "Soft Blanket",
        productAltText: "cozy fleece blanket"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/71Ku9ByCEXL._AC_UL1500_.jpg",
        productName: "Indoor Slippers",
        productAltText: "warm fuzzy slippers"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61vS+yUzXDL._AC_UL1500_.jpg",
        productName: "Hot Water Bottle",
        productAltText: "rubber hot water bottle"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/71jl+QTPkqL._AC_UL1500_.jpg",
        productName: "Aromatic Candles",
        productAltText: "scented relaxation candles"
      }
    ],
    songs: [
      { songName: "Snowfall", artist: "Bing Crosby", link: "https://open.spotify.com/track/7F7kYJZUG4xVjgxMHlIP0F" },
      { songName: "Do You Want to Build a Snowman?", artist: "Kristen Bell", link: "https://open.spotify.com/track/3z1JDE2yX7rDFFkb8e2F9X" },
      { songName: "Winter Winds", artist: "Mumford & Sons", link: "https://open.spotify.com/track/7xUPwU7Bh2sTPm2l9hHq2v" },
      { songName: "Coldest Winter", artist: "Kanye West", link: "https://open.spotify.com/track/6trNtQUgC8cgbW6HJ9mWjM" }
    ]
  },

  602: {
    description: "Heavy snow",
    suggestion: [
      "Build a snowman or enjoy a hot chocolate indoors.",
      "Play board games with family or friends."
    ],
    product: [
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/71Zc2y8HbOL._AC_UL1500_.jpg",
        productName: "Shovel",
        productAltText: "snow shovel"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/71FZ5Gx6p6L._AC_UL1500_.jpg",
        productName: "Snow Boots",
        productAltText: "high insulated boots"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/71U1d1V-2qL._AC_UL1500_.jpg",
        productName: "Thermal Jacket",
        productAltText: "heavy insulated jacket"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/71Zoe3SBDpL._AC_UL1500_.jpg",
        productName: "Wool Beanie",
        productAltText: "warm winter hat"
      }
    ],
    songs: [
      { songName: "Snow (Hey Oh)", artist: "Red Hot Chili Peppers", link: "https://open.spotify.com/track/0pqnGHJpmpxLKifKRmU6hD" },
      { songName: "Ice Ice Baby", artist: "Vanilla Ice", link: "https://open.spotify.com/track/1V6dLqV8cVbsHbQfjHqg4P" },
      { songName: "Let It Snow! Let It Snow! Let It Snow!", artist: "Dean Martin", link: "https://open.spotify.com/track/7yD2UowUe7h8xTqR6cYkQp" },
      { songName: "Cold as Ice", artist: "Foreigner", link: "https://open.spotify.com/track/5J8em4Q6sH7yRL8nWTwSqp" }
    ]
  },

  611: {
    description: "Sleet",
    suggestion: [
      "Stay indoors to avoid slippery surfaces.",
      "Enjoy warm indoor activities or games."
    ],
    product: [
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61+tOhYV3wL._AC_UL1500_.jpg",
        productName: "Non-slip Winter Boots",
        productAltText: "boots with traction soles"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/71y9xP+e7XL._AC_UL1500_.jpg",
        productName: "Waterproof Gloves",
        productAltText: "insulated winter gloves"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61GfEx2x+PL._AC_UL1500_.jpg",
        productName: "Indoor Heater",
        productAltText: "compact electric heater"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/71gi4vWlGXL._AC_UL1500_.jpg",
        productName: "Warm Socks",
        productAltText: "thick thermal socks"
      }
    ],
    songs: [
      { songName: "Sleet", artist: "A Perfect Circle", link: "https://open.spotify.com/track/0vKTr0UgrlbzK5XAZfiTLa" },
      { songName: "Cold", artist: "Maroon 5", link: "https://open.spotify.com/track/5IeMhY4Qx9Yv6k06gOmZOR" },
      { songName: "Wintertime Love", artist: "The Doors", link: "https://open.spotify.com/track/4eR7kwssw4Fb3j6hwS7UZh" },
      { songName: "Snowblind", artist: "Black Sabbath", link: "https://open.spotify.com/track/0vY3FkH8tZwCc7vQlOVX0M" }
    ]
  },

  612: {
    description: "Light shower sleet",
    suggestion: [
      "Stay indoors to avoid slippery paths.",
      "Sip a warm beverage and read a book."
    ],
    product: [
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61+5J47aYtL._AC_UL1500_.jpg",
        productName: "Waterproof Winter Boots",
        productAltText: "low winter boots"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61NYF3p6R1L._AC_UL1500_.jpg",
        productName: "Thermal Gloves",
        productAltText: "warm insulated gloves"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61oDk5wVZaL._AC_UL1500_.jpg",
        productName: "Indoor Heater",
        productAltText: "electric compact heater"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/71GNHvVv3NL._AC_UL1500_.jpg",
        productName: "Wool Beanie",
        productAltText: "warm knit hat"
      }
    ],
    songs: [
      { songName: "Sleet", artist: "A Perfect Circle", link: "https://open.spotify.com/track/0vKTr0UgrlbzK5XAZfiTLa" },
      { songName: "Cold As Ice", artist: "Foreigner", link: "https://open.spotify.com/track/5J8em4Q6sH7yRL8nWTwSqp" },
      { songName: "Winter Song", artist: "Sara Bareilles & Ingrid Michaelson", link: "https://open.spotify.com/track/5q8W0hDnoyx3dTdtRk1I7Q" },
      { songName: "Snowblind", artist: "Black Sabbath", link: "https://open.spotify.com/track/0vY3FkH8tZwCc7vQlOVX0M" }
    ]
  },

  701: {
    description: "Mist",
    suggestion: [
      "Perfect ambiance for meditation or a quiet stroll.",
      "Enjoy calming music while sipping tea indoors."
    ],
    product: [
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61c+MZ1Ct0L._AC_UL1500_.jpg",
        productName: "Reflective Vest",
        productAltText: "safety reflective vest for walking in mist"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/71lYMjk3AyL._AC_UL1500_.jpg",
        productName: "LED Flashlight",
        productAltText: "handheld bright flashlight"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/71M9HlsfMuL._AC_UL1500_.jpg",
        productName: "Portable Mist Humidifier",
        productAltText: "compact air humidifier"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/71V5HcC5l1L._AC_UL1500_.jpg",
        productName: "Moisturizing Cream",
        productAltText: "hydrating cream for cold misty weather"
      }
    ],
    songs: [
      { songName: "A Foggy Day", artist: "Ella Fitzgerald", link: "https://open.spotify.com/track/6ujl8XOlQe2J0mVfZl4OTD" },
      { songName: "Misty", artist: "Johnny Mathis", link: "https://open.spotify.com/track/0evsHnQz7zL1ZtQFO77aXQ" },
      { songName: "Fog", artist: "Radiohead", link: "https://open.spotify.com/track/0Hba04QYd1hC1y0sIHcWw5" },
      { songName: "Morning Mist", artist: "Enya", link: "https://open.spotify.com/track/4vQH2O1cX2XwrTUzQwWnGm" }
    ]
  },

  711: {
    description: "Smoke",
    suggestion: [
      "Stay indoors and avoid outdoor activities.",
      "Keep air clean using purifiers or masks."
    ],
    product: [
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61MPup6G85L._AC_UL1500_.jpg",
        productName: "Air Purifier",
        productAltText: "home air purifier"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61y5lfJ4sDL._AC_UL1500_.jpg",
        productName: "Reusable Face Mask",
        productAltText: "high-quality anti-smoke mask"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61vA1UvwkXL._AC_UL1500_.jpg",
        productName: "Indoor Plants",
        productAltText: "air-purifying indoor plants"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61N2oI9V4XL._AC_UL1500_.jpg",
        productName: "Activated Carbon Filter",
        productAltText: "replaceable filter for purifier"
      }
    ],
    songs: [
      { songName: "Smoke Gets in Your Eyes", artist: "The Platters", link: "https://open.spotify.com/track/7mPmrkZQfJkk6z3wqD6fN7" },
      { songName: "Smoke on the Water", artist: "Deep Purple", link: "https://open.spotify.com/track/5sICkBXVmaCQk5aISGR3x1" },
      { songName: "Purple Smoke", artist: "Lisa Gerrard", link: "https://open.spotify.com/track/4jqEvFXeVwRdozH9D2NjTU" },
      { songName: "Fire and Smoke", artist: "Earl Thomas Conley", link: "https://open.spotify.com/track/1Q9o2iV0Wg0v84CIMFPNK4" }
    ]
  },

  721: {
    description: "Haze",
    suggestion: [
      "Avoid outdoor activities; enjoy indoor leisure.",
      "Listen to soft instrumental music and relax."
    ],
    product: [
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61GDAeMf0rL._AC_UL1500_.jpg",
        productName: "Air Purifier",
        productAltText: "air purifier for haze conditions"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61Okfo1fXVL._AC_UL1500_.jpg",
        productName: "Face Mask",
        productAltText: "high-quality reusable mask"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61ehs4bV2tL._AC_UL1500_.jpg",
        productName: "Window Insulation Kit",
        productAltText: "keep indoor air clean and warm"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61xjVnmYYdL._AC_UL1500_.jpg",
        productName: "Essential Oil Diffuser",
        productAltText: "diffuse soothing scents indoors"
      }
    ],
    songs: [
      { songName: "Hazy Shade of Winter", artist: "Simon & Garfunkel", link: "https://open.spotify.com/track/5Rm0mO7rXITz9YkgJX4H9h" },
      { songName: "Into the Haze", artist: "Coldplay", link: "https://open.spotify.com/track/3XbA7QXJpERXxNSH6dbD2q" },
      { songName: "Haze", artist: "Kanye West", link: "https://open.spotify.com/track/3D1eKMBnqFltG6ycNGUvqa" },
      { songName: "Lost in the Haze", artist: "NF", link: "https://open.spotify.com/track/1YsoiokGXLZPwxVZn4Ck9p" }
    ]
  },

  731: {
    description: "Sand or dust",
    suggestion: [
      "Stay indoors to protect from particles.",
      "Use air purifiers and wear masks if stepping out."
    ],
    product: [
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61ZfGqM1+NL._AC_UL1500_.jpg",
        productName: "Air Purifier",
        productAltText: "home air purifier for dust"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61f5lU6iB3L._AC_UL1500_.jpg",
        productName: "Dust Mask",
        productAltText: "reusable anti-dust mask"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61BdxphvJmL._AC_UL1500_.jpg",
        productName: "Window Seal Kit",
        productAltText: "seal windows from dust"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61B8ZTCv1QL._AC_UL1500_.jpg",
        productName: "Vacuum Cleaner",
        productAltText: "vacuum with HEPA filter"
      }
    ],
    songs: [
      { songName: "Dust in the Wind", artist: "Kansas", link: "https://open.spotify.com/track/0k17h0D3J5VfsdmQ1iZtE9" },
      { songName: "Blowin’ in the Wind", artist: "Bob Dylan", link: "https://open.spotify.com/track/2sZx3gXZsEycikpdyB8ecD" },
      { songName: "Sandstorm", artist: "Darude", link: "https://open.spotify.com/track/1Z3xRkdXrq0rOKzDz9j0Pm" },
      { songName: "Dust", artist: "Eminem", link: "https://open.spotify.com/track/1Xk2vXHgmTSKzt1H0N6x5k" }
    ]
  },

  741: {
    description: "Fog",
    suggestion: [
      "Listen to an audiobook indoors or stay in cozy surroundings.",
      "Use fog lights if driving and maintain caution."
    ],
    product: [
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61fJYhTLxWL._AC_UL1500_.jpg",
        productName: "Car Fog Lights",
        productAltText: "LED fog lights for cars"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/71IztfQ3PbL._AC_UL1500_.jpg",
        productName: "Anti-Fog Glasses Spray",
        productAltText: "spray to prevent glasses from fogging"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61c1aPT1CQL._AC_UL1500_.jpg",
        productName: "Reflective Jacket",
        productAltText: "safety reflective jacket"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61-2XrExK9L._AC_UL1500_.jpg",
        productName: "Portable Flashlight",
        productAltText: "high-brightness torch"
      }
    ],
    songs: [
      { songName: "Foggy Dew", artist: "The Chieftains", link: "https://open.spotify.com/track/5G3qv2Ejz1R5o6QZp4ZzAB" },
      { songName: "The Fog", artist: "Kate Bush", link: "https://open.spotify.com/track/5V34GkL7Eeb3J9CwE1Zr3Q" },
      { songName: "Into the Fog", artist: "Stone Sour", link: "https://open.spotify.com/track/6uXGvU7U8o69fWlXeb2X4q" },
      { songName: "Morning Fog", artist: "Enya", link: "https://open.spotify.com/track/4vQH2O1cX2XwrTUzQwWnGm" }
    ]
  },

  751: {
    description: "Sand",
    suggestion: [
      "Stay indoors to avoid sand exposure.",
      "Protect airways using masks if stepping outside."
    ],
    product: [
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61ZfGqM1+NL._AC_UL1500_.jpg",
        productName: "Air Purifier",
        productAltText: "home purifier for sand/dust"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61f5lU6iB3L._AC_UL1500_.jpg",
        productName: "Face Mask",
        productAltText: "anti-sand reusable mask"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61BdxphvJmL._AC_UL1500_.jpg",
        productName: "Window Seal Kit",
        productAltText: "seal windows from sand"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61B8ZTCv1QL._AC_UL1500_.jpg",
        productName: "Vacuum Cleaner with HEPA Filter",
        productAltText: "vacuum for sand/dust cleanup"
      }
    ],
    songs: [
      { songName: "Sands of Time", artist: "Fleetwood Mac", link: "https://open.spotify.com/track/3b0oU9m3Hvh0ZhZLdcVh0a" },
      { songName: "Desert Sand", artist: "Enya", link: "https://open.spotify.com/track/2GqfB0w4ROf8FmgDz1V7K7" },
      { songName: "Sandstorm", artist: "Darude", link: "https://open.spotify.com/track/1Z3xRkdXrq0rOKzDz9j0Pm" },
      { songName: "Dust in the Wind", artist: "Kansas", link: "https://open.spotify.com/track/0k17h0D3J5VfsdmQ1iZtE9" }
    ]
  },

  801: {
    description: "Few clouds (11–25%)",
    suggestion: [
      "Ideal for a casual walk or a bike ride.",
      "Perfect time for photography of scattered clouds."
    ],
    product: [
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/71sF8yLk5UL._AC_UL1500_.jpg",
        productName: "Light Jacket",
        productAltText: "windbreaker jacket"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61mQOwM9mRL._AC_UL1500_.jpg",
        productName: "DSLR Camera",
        productAltText: "digital camera for cloud photography"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/71Pi7pBxhIL._AC_UL1500_.jpg",
        productName: "Running Shoes",
        productAltText: "comfortable shoes for walking"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61CfoZKN4JL._AC_UL1500_.jpg",
        productName: "Backpack",
        productAltText: "daypack for outdoor essentials"
      }
    ],
    songs: [
      { songName: "Clouds", artist: "Zach Sobiech", link: "https://open.spotify.com/track/0kVbNzyRKa39Djx6TYcK7F" },
      { songName: "Little Cloud", artist: "The Whitest Boy Alive", link: "https://open.spotify.com/track/4ICsvtC1VLZ1U4GG6q2XyY" },
      { songName: "Both Sides, Now", artist: "Joni Mitchell", link: "https://open.spotify.com/track/6wWVKhxIU2cEi0K81v7HvM" },
      { songName: "Cloudbusting", artist: "Kate Bush", link: "https://open.spotify.com/track/0S2eX1VgPAf8dJ0T3mZrKH" }
    ]
  },

  802: {
    description: "Scattered clouds (25–50%)",
    suggestion: [
      "Perfect for a picnic or outdoor gathering.",
      "Take a light jog or cycling in fresh air."
    ],
    product: [
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61u0xEjxHUL._AC_UL1500_.jpg",
        productName: "Picnic Basket",
        productAltText: "basket with picnic essentials"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/71IqHK1yPpL._AC_UL1500_.jpg",
        productName: "Portable Speaker",
        productAltText: "bluetooth speaker for outdoors"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61E7xd0bAUL._AC_UL1500_.jpg",
        productName: "Sunscreen",
        productAltText: "SPF 50 sunscreen"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61PkCUM2JqL._AC_UL1500_.jpg",
        productName: "Sun Hat",
        productAltText: "wide-brim hat for sun protection"
      }
    ],
    songs: [
      { songName: "Cloudy Day", artist: "Tones and I", link: "https://open.spotify.com/track/2PPLT1y1yo5VhSgYt6LRxV" },
      { songName: "Both Sides Now", artist: "Judy Collins", link: "https://open.spotify.com/track/7xICmUwv5AAJSP0Z4f6bDA" },
      { songName: "Above the Clouds", artist: "Paul McCartney", link: "https://open.spotify.com/track/3SKmMC7rhrGxZGUDNfp4KP" },
      { songName: "Cloud Nine", artist: "Jamiroquai", link: "https://open.spotify.com/track/4bVIFtG4BOfMjMBaZGr7oh" }
    ]
  },

  803: {
    description: "Broken clouds (51–84%)",
    suggestion: [
      "Great for a casual walk or outdoor activities.",
      "Carry a light jacket in case the weather shifts."
    ],
    product: [
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/71P3cP7gV+L._AC_UL1500_.jpg",
        productName: "Windbreaker Jacket",
        productAltText: "lightweight jacket for variable weather"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61IF8Yy3wZL._AC_UL1500_.jpg",
        productName: "Running Shoes",
        productAltText: "comfortable shoes for walking"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61hE9iBx8pL._AC_UL1500_.jpg",
        productName: "Water Bottle",
        productAltText: "reusable hydration bottle"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61G0mzRnAUL._AC_UL1500_.jpg",
        productName: "Camera",
        productAltText: "compact camera for outdoor photography"
      }
    ],
    songs: [
      { songName: "Partly Cloudy", artist: "Benny Sings", link: "https://open.spotify.com/track/2x4W0uVZqLgHuQ4wJb6nGp" },
      { songName: "Broken Clouds", artist: "AURORA", link: "https://open.spotify.com/track/0yAF0AKV0bXgDyaZ1x7bZ0" },
      { songName: "Clouds", artist: "Imagine Dragons", link: "https://open.spotify.com/track/1X5UuYyXl1mjW12xLkF0j3" },
      { songName: "Overcast", artist: "Travis", link: "https://open.spotify.com/track/1y6hVs0b0JSv6y3z8yKgy7" }
    ]
  },

  804: {
    description: "Overcast clouds (85–100%)",
    suggestion: [
      "Focus day – ideal for work, writing, or deep focus tasks.",
      "Enjoy indoor hobbies like painting or reading."
    ],
    product: [
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61BxZmn3BhL._AC_UL1500_.jpg",
        productName: "Desk Lamp",
        productAltText: "LED desk lamp for work"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/71u0Tx9eH1L._AC_UL1500_.jpg",
        productName: "Warm Beverage Mug",
        productAltText: "ceramic mug for hot drinks"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61p3hPoF6JL._AC_UL1500_.jpg",
        productName: "Cozy Blanket",
        productAltText: "soft fleece blanket"
      },
      {
        productImage: "https://images-na.ssl-images-amazon.com/images/I/61Or7pO5wHL._AC_UL1500_.jpg",
        productName: "Notebook",
        productAltText: "journal or notebook for writing"
      }
    ],
    songs: [
      { songName: "Overcast", artist: "Travis", link: "https://open.spotify.com/track/1y6hVs0b0JSv6y3z8yKgy7" },
      { songName: "Cloudy Day", artist: "Tones and I", link: "https://open.spotify.com/track/2PPLT1y1yo5VhSgYt6LRxV" },
      { songName: "Gray Skies", artist: "Metric", link: "https://open.spotify.com/track/3LpQk4RbG7vDpe5xv5Zx5B" },
      { songName: "Dark Clouds", artist: "Spacey Jane", link: "https://open.spotify.com/track/0T6zPBqX0PFG6fNzF6hX0y" }
    ]
  }
};
