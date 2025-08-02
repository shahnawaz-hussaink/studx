const featuredProduct = [
  {
    id: 11,
    title: "Wooden Bookshelf",
    description: "Compact and stylish wooden bookshelf that holds up to 50 books. Ideal for small rooms, study corners, or cozy reading nooks.",
    price: 999,
    image: "https://rukminim2.flixcart.com/image/832/832/l1tmf0w0/book-shelf/1/k/y/28-particle-board-80-34-fc895019-walnut-muvo-6-shelf-deckup-200-original-imagdac7uwthaug8.jpeg?q=70&crop=false",
    details: [
      "Versatile and Stylish: Enhances study corners or living spaces",
      "Space-Saving Elegance: Slim build fits anywhere",
      "Convenient Handling: Easy to assemble and shift",
      "Multi-Purpose Utility: Store books, plants, decor items"
    ],
    dimensions: "60 x 25 x 120 cm",
    seller: {
      name: "Ravi Malhotra",
      email: "ravi.chennai@gmail.com",
      joinedAt: "2023-08-20T10:12:45Z",
      city: "Chennai",
      college: "SRM University"
    }
  },
  {
    id: 12,
    title: "Mini Fridge - 45L",
    description: "Mini fridge with 45L capacity, compact and energy-efficient. Perfect for hostel rooms, office spaces, or small apartments.",
    price: 4699,
    image: "https://vsprod.vijaysales.com/media/catalog/product/2/2/224350-image1_1.jpg?optimize=medium&fit=bounds&height=500&width=500",
    details: [
      "Odour-Free Design: Keeps food fresh",
      "Contemporary Luxury: Sleek matte finish",
      "Energy Saver: Consumes less electricity",
      "Multi-Purpose: Store snacks, drinks, skincare"
    ],
    dimensions: "45 x 47 x 50 cm",
    seller: {
      name: "Ananya Verma",
      email: "ananya.coolgadgets@studx.com",
      joinedAt: "2024-02-14T15:00:00Z",
      city: "Delhi",
      college: "Lady Shri Ram College"
    }
  },
  {
    id: 13,
    title: "LED Study Lamp",
    description: "Basic study lamp featuring an adjustable neck and LED bulb. Provides focused lighting for reading or working at night.",
    price: 349,
    image: "https://rukminim2.flixcart.com/image/812/974/xif0q/table-lamp/o/q/4/neonglow-study-lamp-neonglow-study-lamp-24-energy-9-5-original-imahdmkyzpugg7pt.jpeg?q=60&crop=false",
    details: [
      "Focused Illumination: Reduces eye strain",
      "Modern Design: Blends with any study desk",
      "Energy Efficient: Long-lasting LED bulb",
      "Adjustable Neck: Direct light where needed"
    ],
    dimensions: "20 x 12 x 35 cm",
    seller: {
      name: "Nikhil Rao",
      email: "nikhil.electro@studx.com",
      joinedAt: "2022-11-10T08:30:00Z",
      city: "Mumbai",
      college: "IIT Bombay"
    }
  },
  {
    id: 14,
    title: "Foldable Laptop Stand",
    description: "Foldable and portable laptop stand with a sturdy aluminum body. Offers ergonomic height for comfortable working posture.",
    price: 599,
    image: "https://rukminim2.flixcart.com/image/812/974/xif0q/laptop-stand/f/r/3/200-aluminum-amextron-original-imahdpybgzavtsym.jpeg?q=60&crop=false",
    details: [
      "Ergonomic Comfort: Prevents neck strain",
      "Space-Saving Elegance: Foldable design",
      "Anti-Slip Base: Firm grip on any surface",
      "Durable Build: Lightweight aluminum body"
    ],
    dimensions: "28 x 22 x 6 cm (folded)",
    seller: {
      name: "Priya Sharma",
      email: "priya.gearhub@studx.com",
      joinedAt: "2024-06-01T09:15:00Z",
      city: "Pune",
      college: "MIT WPU"
    }
  },
  {
    id: 15,
    title: "Steel Clothes Rack",
    description: "Durable steel clothes rack with a space-saving foldable design. Ideal for drying or organizing clothes in limited spaces.",
    price: 899,
    image: "https://rukminim2.flixcart.com/image/1466/352/xif0q/cloth-dryer-stand/r/d/d/100-g-cds-sumo-mini-grazia-1-tier-original-imah7tnw2syjpd9e.jpeg?q=60",
    details: [
      "Multi-Tier Utility: Dries more in less space",
      "Rust-Free Steel: Built for long use",
      "Odour-Free Drying: Air-ventilated bars",
      "Portable & Foldable: Easy to carry and store"
    ],
    dimensions: "70 x 55 x 145 cm",
    seller: {
      name: "Amit Jha",
      email: "amit.homeneeds@studx.com",
      joinedAt: "2023-12-18T18:45:00Z",
      city: "Bangalore",
      college: "Christ University"
    }
  },
  {
    id: 16,
    title: "Table Fan - 3 Speed",
    description: "Efficient table fan with 3-speed settings and low-noise operation. Great for personal cooling during hot weather days.",
    price: 799,
    image: "https://rukminim2.flixcart.com/image/192/240/xif0q/fan/w/6/f/-original-imahfg3wv6ycmska.jpeg?q=60",
    details: [
      "Whisper-Quiet Operation: Peaceful cooling",
      "Portable Design: Carry anywhere",
      "3 Speed Settings: Adjustable airflow",
      "Energy Saving: Low power usage"
    ],
    dimensions: "30 x 25 x 45 cm",
    seller: {
      name: "Sonal Mehta",
      email: "sonal.coolcorner@studx.com",
      joinedAt: "2025-01-05T12:00:00Z",
      city: "Hyderabad",
      college: "Osmania University"
    }
  },
  {
    id: 17,
    title: "3L Pressure Cooker",
    description: "Basic 3-liter pressure cooker made of stainless steel. Suitable for daily cooking needs with quick and even heating.",
    price: 699,
    image: "https://rukminim2.flixcart.com/image/1466/352/xif0q/pressure-cooker/y/8/k/yes-1-18014-kent-original-imah3t8hzzf5hscv.jpeg?q=60",
    details: [
      "Fast Cooking: Saves time & fuel",
      "Contemporary Look: Mirror finish steel",
      "Safe to Use: Heat-resistant handle",
      "Multipurpose: Rice, curry, veggies"
    ],
    dimensions: "25 x 25 x 18 cm",
    seller: {
      name: "Rakesh Bhatt",
      email: "rakesh.kitchenware@studx.com",
      joinedAt: "2023-04-22T14:10:00Z",
      city: "Ahmedabad",
      college: "Nirma University"
    }
  },
  {
    id: 18,
    title: "Modern Wall Clock",
    description: "Battery-operated wall clock with a sleek and modern design. Perfect for home, office, or any minimalistic space.",
    price: 499,
    image: "https://rukminim2.flixcart.com/image/1470/1470/xif0q/wall-clock/t/j/z/ajanta-small-and-fancy-wall-clock-for-home-and-office-22-original-imagycxfpbbdpbyy.jpeg?q=60",
    details: [
      "Contemporary Luxury: Matte finish",
      "Odour-Free Design: Clean, dustproof",
      "Silent Sweep: No ticking sound",
      "Multi-Location Use: Hall, kitchen, office"
    ],
    dimensions: "30 x 30 x 4 cm",
    seller: {
      name: "Shruti Patel",
      email: "shruti.homevibe@studx.com",
      joinedAt: "2022-10-03T07:25:00Z",
      city: "Indore",
      college: "DAVV"
    }
  },
  {
    id: 19,
    title: "Laundry Basket - Woven",
    description: "Woven-style laundry basket that enhances room appearance while maintaining hygiene. Ideal for bedrooms or bathrooms.",
    price: 649,
    image: "https://m.media-amazon.com/images/I/71gDgdgh15L._SX679_.jpg",
    details: [
      "Versatile and Stylish: Matches decor",
      "Odour-Free Design: Vented body",
      "Contemporary Luxury: Textured surface",
      "Convenient Handling: Built-in handles"
    ],
    dimensions: "44 x 35 x 61 cm",
    seller: {
      name: "Karan Desai",
      email: "karan.organizeit@studx.com",
      joinedAt: "2023-09-10T16:45:00Z",
      city: "Surat",
      college: "SVNIT"
    }
  },
  {
    id: 20,
    title: "Noise Cancelling Headphones",
    description: "High-fidelity wireless headphones with ANC",
    price: 2499,
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/o/h/f/-original-imahdxvsuftg7njp.jpeg?q=70&crop=false",
    details: [
      "Active Noise Cancellation up to 30dB",
      "40mm drivers for deep bass",
      "Bluetooth 5.2 with 20 hours battery life",
      "Comfort-fit ear cushions for long use"
    ],
    dimensions: "18 x 16 x 9 cm",
    seller: {
      name: "Ananya Mehta",
      email: "ananya.mehta@gmail.com",
      joinedAt: "2023-12-15T00:00:00Z",
      city: "Kolkata",
      college: "Jadavpur University"
    }
  },
  {
  id: 21,
  title: "Ergonomic Study Chair",
  description: "Adjustable and cushioned chair ideal for long study sessions",
  price: 3199,
  image: "https://thesleepcompany.in/cdn/shop/files/1_52578784-331e-40b0-8f56-4c767f3cfef1.webp?v=1753711047&width=860",
  details: [
    "Mesh back support with lumbar adjustment",
    "360° swivel wheels",
    "Height adjustable seat",
    "Breathable fabric seat cushion"
  ],
  dimensions: "60 x 60 x 100 cm",
  seller: {
    name: "Ravi Sharma",
    email: "ravi.sharma123@gmail.com",
    joinedAt: "2024-04-12T00:00:00Z",
    city: "Delhi",
    college: "Delhi Technological University"
  }
},
{
  id: 22,
  title: "Scientific Calculator",
  description: "Multi-functional calculator suitable for engineering students",
  price: 899,
  image: "https://vlebazaar.in/image/cache/catalog/Casio-FX-82MS-2nd-Gen-Non-Programmable-Scientific-Calculator-240-Functio/Casio-FX-82MS-2nd-Gen-Non-Programmable-Scientific-Calculator-240-Functions-and-2-1100x1100.jpg",
  details: [
    "240+ functions",
    "Dual power: solar and battery",
    "Durable plastic keys",
    "2-line display"
  ],
  dimensions: "15 x 8 x 1.8 cm",
  seller: {
    name: "Sneha Kapoor",
    email: "sneha.kapoor@outlook.com",
    joinedAt: "2024-09-05T00:00:00Z",
    city: "Bhopal",
    college: "MANIT Bhopal"
  }
},
{
  id: 23,
  title: "Graph Paper Notebook",
  description: "A4 size graph notebook with thick pages",
  price: 179,
  image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-640,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/414f1c7a-82fd-4d3f-8411-d4e7aee7b45c/Ranka-Supremo-Graph-Book-Ruled-32-Pages-Assorted.jpg",
  details: [
    "80 GSM thick paper",
    "Single-line + Graph combo",
    "100 pages",
    "Spiral bound with hard cover"
  ],
  dimensions: "29.7 x 21 x 1.5 cm",
  seller: {
    name: "Aman Verma",
    email: "aman.verma1999@gmail.com",
    joinedAt: "2023-11-20T00:00:00Z",
    city: "Pune",
    college: "MIT WPU"
  }
},
{
  id: 24,
  title: "External Hard Drive - 1TB",
  description: "Portable HDD with USB 3.0 interface for fast data transfer",
  price: 3799,
  image: "https://m.media-amazon.com/images/I/41eFUZh+nHL.jpg",
  details: [
    "1TB storage capacity",
    "USB 3.0 and backward compatible with USB 2.0",
    "Shock-resistant exterior",
    "Plug-and-play, no software needed"
  ],
  dimensions: "11.5 x 8 x 1.5 cm",
  seller: {
    name: "Ritika Das",
    email: "ritika.das@gmail.com",
    joinedAt: "2024-01-10T00:00:00Z",
    city: "Chennai",
    college: "SRM University"
  }
},
{
  id: 25,
  title: "Desk Organizer Set",
  description: "5-in-1 set to keep your study desk clutter-free",
  price: 549,
  image: "https://m.media-amazon.com/images/I/41VSiPyZlzL.jpg",
  details: [
    "Includes pen stand, tray, sticky notes holder",
    "Made from recycled plastic",
    "Durable and lightweight",
    "Minimalist matte black finish"
  ],
  dimensions: "25 x 18 x 10 cm",
  seller: {
    name: "Harshit Sinha",
    email: "harshit.sinha12@gmail.com",
    joinedAt: "2024-05-06T00:00:00Z",
    city: "Lucknow",
    college: "IET Lucknow"
  }
},
{
  id: 26,
  title: "Digital Drawing Tablet",
  description: "Perfect for online classes, note-taking, and creative sketches",
  price: 2499,
  image: "https://m.media-amazon.com/images/I/51QoBaZBsjL._AC_SX296_SY426_FMwebp_QL65_.jpg",
  details: [
    "8192 pressure levels stylus",
    "Battery-free pen",
    "Compatible with Windows, Mac, Android",
    "Working area: 6 x 4 inches"
  ],
  dimensions: "20 x 14 x 1 cm",
  seller: {
    name: "Manya Arora",
    email: "manya.arora22@gmail.com",
    joinedAt: "2024-03-18T00:00:00Z",
    city: "Jaipur",
    college: "MNIT Jaipur"
  }
},
{
  id: 27,
  title: "Rechargeable Desk Lamp",
  description: "Eye-care LED lamp with adjustable brightness levels",
  price: 699,
  image: "https://m.media-amazon.com/images/I/71hRle2Q7tL._AC_SX296_SY426_FMwebp_QL65_.jpg",
  details: [
    "3 brightness modes",
    "Touch control panel",
    "360° adjustable neck",
    "USB rechargeable, 2000mAh battery"
  ],
  dimensions: "35 x 10 x 8 cm",
  seller: {
    name: "Pranav Mishra",
    email: "pranav.mishra@gmail.com",
    joinedAt: "2023-10-28T00:00:00Z",
    city: "Bangalore",
    college: "PES University"
  }
},
{
  id: 28,
  title: "Portable Whiteboard",
  description: "Double-sided mini whiteboard for quick notes and study plans",
  price: 449,
  image: "https://m.media-amazon.com/images/I/51Hque+SehL._AC_SX296_SY426_FMwebp_QL65_.jpg",
  details: [
    "Magnetic and rewritable",
    "Comes with marker and duster",
    "Sturdy frame with wall mount option",
    "Ideal for dorm room or hostel"
  ],
  dimensions: "30 x 25 x 2 cm",
  seller: {
    name: "Divya Jain",
    email: "divya.jain@studentmail.com",
    joinedAt: "2024-06-09T00:00:00Z",
    city: "Hyderabad",
    college: "IIIT Hyderabad"
  }
},
{
  id: 29,
  title: "Fitness Resistance Bands Set",
  description: "Pack of 5 resistance bands for home workouts",
  price: 599,
  image: "https://m.media-amazon.com/images/I/81ZbU6VSK8L._AC_SX296_SY426_FMwebp_QL65_.jpg",
  details: [
    "Different resistance levels from light to extra heavy",
    "Made of 100% natural latex",
    "Non-slip and durable",
    "Comes with carry pouch"
  ],
  dimensions: "25 x 5 x 4 cm",
  seller: {
    name: "Ishaan Ghosh",
    email: "ishaan.ghosh@hotmail.com",
    joinedAt: "2024-02-07T00:00:00Z",
    city: "Kolkata",
    college: "St. Xavier's College"
  }
},
{
  id: 30,
  title: "Laptop Cooling Pad",
  description: "Silent cooling pad with 5 fans for overheating laptops",
  price: 1099,
  image: "https://m.media-amazon.com/images/I/81pQi2N6-XL._AC_SX296_SY426_FMwebp_QL65_.jpg",
  details: [
    "5 ultra-quiet fans with adjustable speed",
    "Supports laptops up to 17 inches",
    "LED display + fan control buttons",
    "Ergonomic tilt angles"
  ],
  dimensions: "38 x 28 x 3.5 cm",
  seller: {
    name: "Tanvi Rathi",
    email: "tanvi.rathi@gmail.com",
    joinedAt: "2023-12-02T00:00:00Z",
    city: "Mumbai",
    college: "KJ Somaiya College"
  }
}
];

module.exports = featuredProduct;
