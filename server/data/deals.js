const deals = [
  {
    id: 1,
    title: "HP Pavilion Laptop",
    description: "Refurbished HP Pavilion, 8GB RAM, 512GB SSD, ideal for coding.",
    price: 28999,
    image: "https://images.unsplash.com/photo-1663354027456-ce6a7e07d212?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: [
      "8GB DDR4 RAM, 512GB SSD",
      "Intel i5 10th Gen processor",
      "14-inch Full HD Display",
      "Battery backup up to 6 hours"
    ],
    dimensions: "32 x 22 x 2 cm",
    seller: {
      name: "Ankit Sharma",
      email: "ankit.hp@gmail.com",
      joinedAt: "2023-07-15T12:00:00Z",
      city: "Delhi",
      college: "Delhi University"
    }
  },
  {
    id: 2,
    title: "Dell Inspiron Laptop",
    description: "Used Dell Inspiron, 16GB RAM, 1TB HDD, great condition.",
    price: 25999,
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: [
      "16GB RAM, 1TB HDD",
      "15.6-inch HD display",
      "Windows 10 Home installed",
      "Charger included"
    ],
    dimensions: "36 x 25 x 2.2 cm",
    seller: {
      name: "Priya Verma",
      email: "priya.dell@gmail.com",
      joinedAt: "2023-08-01T10:00:00Z",
      city: "Mumbai",
      college: "Mumbai University"
    }
  },
  {
    id: 3,
    title: "Wooden Study Table",
    description: "Refurbished wooden study table with drawer.",
    price: 1499,
    image: "https://images.unsplash.com/photo-1616400619175-5beda3a17896?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: [
      "Sturdy wood with smooth finish",
      "Single drawer with lock",
      "Scratch-resistant surface",
      "Comfortable leg space"
    ],
    dimensions: "90 x 50 x 75 cm",
    seller: {
      name: "Rahul Kumar",
      email: "rahul.table@gmail.com",
      joinedAt: "2023-10-20T09:30:00Z",
      city: "Patna",
      college: "NIT Patna"
    }
  },
  {
    id: 4,
    title: "Ergonomic Chair",
    description: "Comfortable mesh back chair for long study hours.",
    price: 1299,
    image: "https://thot-media.thehouseofthings.com/media/catalog/product/cache/1148ab7f72254d0ec9e2adc78dc49797/c/o/cordoba-leather-chair-1800x1200.jpg",
    details: [
      "Adjustable height and tilt",
      "Breathable mesh backrest",
      "Smooth rolling wheels",
      "Durable build for daily use"
    ],
    dimensions: "60 x 60 x 100 cm",
    seller: {
      name: "Simran Batra",
      email: "simran.chair@gmail.com",
      joinedAt: "2023-06-12T14:45:00Z",
      city: "Bangalore",
      college: "Christ University"
    }
  },
  {
    id: 5,
    title: "Single Bed with Storage",
    description: "Used single bed, pine wood, with storage drawer.",
    price: 3499,
    image: "https://images.unsplash.com/photo-1424847262089-18a6858bd7e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: [
      "Pine wood frame",
      "Large pull-out drawer",
      "Mattress included",
      "Fits in compact spaces"
    ],
    dimensions: "200 x 90 x 45 cm",
    seller: {
      name: "Karan Mehta",
      email: "karan.bed@gmail.com",
      joinedAt: "2023-09-05T11:00:00Z",
      city: "Ahmedabad",
      college: "IIT Gandhinagar"
    }
  },
  {
    id: 6,
    title: "Electric Kettle",
    description: "1.5L capacity, perfect for hostel chai sessions.",
    price: 599,
    image: "https://images.unsplash.com/photo-1594213114663-d94db9b17125?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: [
      "1.5L stainless steel body",
      "Auto shut-off feature",
      "Boils water in 5 minutes",
      "Cordless design"
    ],
    dimensions: "22 x 16 x 20 cm",
    seller: {
      name: "Anjali Roy",
      email: "anjali.kettle@gmail.com",
      joinedAt: "2023-11-18T08:20:00Z",
      city: "Chandigarh",
      college: "Punjab University"
    }
  },
  {
    id: 7,
    title: "Microwave Oven",
    description: "Samsung 20L Solo Microwave Oven in good condition.",
    price: 2999,
    image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: [
      "20L solo microwave",
      "6 power levels",
      "Energy efficient",
      "Includes turntable glass tray"
    ],
    dimensions: "45 x 30 x 26 cm",
    seller: {
      name: "Mohit Raj",
      email: "mohit.microwave@gmail.com",
      joinedAt: "2023-08-22T07:10:00Z",
      city: "Kolkata",
      college: "Jadavpur University"
    }
  },
  {
  id: 10,
  title: "Mi LED Desk Lamp",
  description: "Minimalist LED lamp, 3 brightness modes.",
  price: 799,
  image: "https://m.media-amazon.com/images/I/31AU6yvEYXL.jpg",
  details: [
    "Three adjustable brightness levels",
    "Minimalist and modern design",
    "Touch-sensitive controls",
    "Energy-efficient LED technology",
    "Adjustable lamp head for focus lighting"
  ],
  dimensions: "15 x 12 x 38 cm",
  seller: {
    name: "Rohan Verma",
    email: "rohan.verma21@du.ac.in",
    joinedAt: "2024-09-20T00:00:00Z",
    city: "Delhi",
    college: "Atma Ram Sanatan Dharma College"
  }
}
];

module.exports = deals;
