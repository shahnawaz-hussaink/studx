# 🎓 StudX – Campus Exchange Hub

StudX is a full-stack marketplace platform built with the MERN stack, designed specifically for **college students** to buy and sell second-hand academic and living essentials like books, furniture, electronics, and more within their **local campus community**.

## 📌 Features

- 👩‍🎓 **Student Access** via email id
- 🛍️ **Product Listings** with photos, categories, and pricing
- 🏫 **Campus** to filter items by college/university
- 💬 **In-App Chat** between buyer and seller
- 🔍 **Search & Filters** by category, price, and campus
- 🧾 **User Profiles & Product Management**
- 📱 **Responsive UI** for mobile and desktop

---

## 🧱 Tech Stack

| Layer      | Technology                     |
|------------|--------------------------------|
| Frontend   | React.js, Tailwind CSS, Vite   |
| Backend    | Node.js, Express.js            |
| Database   | MongoDB (Mongoose)             |
| Auth       | JWT + College Email Validation |
| File Upload| Cloudinary (for images)        |
| Hosting    | Vercel (Frontend) + Render (Backend) |

---

## 🗂️ Project Structure

studx/
├── client/ # React frontend
└── server/ # Node.js backend


---

## 🚀 Getting Started

### 🧰 Prerequisites

- Node.js & npm
- MongoDB (local or cloud e.g. MongoDB Atlas)

### ⚙️ Setup

```bash 
# Clone the repo
git clone https://github.com/your-username/studx.git
cd studx

# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
🧪 Run Development Servers
# In one terminal
cd server
npm run dev

# In another terminal
cd client
npm run dev
🌐 Deployment

Frontend: Deploy /client using Vercel
Backend: Deploy /server using Render or Railway
💡 Future Enhancements

Payment gateway for transactions
Admin dashboard
Product recommendations
Saved/favorited items
Notifications system
🤝 Contributing

Pull requests are welcome!

👨‍💻 Developed by

Shahnawaz Hussain 

---

### ✅ To Add This to Your Project:
1. Create a file:
```bash
touch README.md
Paste the above content in it.
Save and commit:
git add README.md
git commit -m "Added project README"
git push
