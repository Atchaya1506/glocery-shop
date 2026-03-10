# 🏪 தண்டபாணி மளிகை கடை
### Dhandapani Grocery Shop — Smart Debt Management System

A bilingual (Tamil & English) desktop application for managing customer debts in a grocery shop. Built with Electron + React.

---

## ✨ Features

- 📊 **Dashboard** — Total debt overview, monthly trend chart
- 👥 **Customer Management** — Add, edit, delete customers
- 💰 **Debt Tracking** — Record credit & payments per customer
- 🎤 **Voice Input** — Speak to add entries (Tamil & English)
- 🌐 **Bilingual** — Full Tamil & English support
- 💾 **Auto Save** — Data saved to local file automatically
- 🌙 **Dark Mode** — Light & dark theme support

---

## 🚀 Setup & Run

### Prerequisites
- [Node.js](https://nodejs.org) (LTS version)

### Install & Run
```bash
# 1. Clone the repo
git clone https://github.com/Atchaya1506/fake_detection-_sys.git
cd fake_detection-_sys

# 2. Install dependencies (only once)
npm install

# 3. Run the app
npm start
```

### Build .exe (Windows)
```bash
npm run build-win
```
Output: `dist/Dhandapani Grocery Shop 1.0.0.exe`

---

## 📁 Project Structure

```
├── index.html       # Main app UI (React + Babel)
├── main.js          # Electron main process
├── preload.js       # File-based data storage bridge
├── package.json     # App configuration
├── bg.jpg           # Sidebar background image
└── .gitignore       # Ignores node_modules & dist
```

---

## 💾 Data Storage

| Mode | Storage |
|------|---------|
| Electron App | JSON file on disk (persists across sessions) |
| Browser | localStorage |

**Data location (Windows):**
`C:\Users\<name>\AppData\Roaming\dhandapani-grocery-shop\dhandapani_data.json`

---

## 🛠 Tech Stack

- **Electron** — Desktop app wrapper
- **React** — UI (via CDN, no build step)
- **Web Speech API** — Voice recognition
- **Node.js fs** — File-based data persistence

---

## 📱 Mobile Use

Open `index.html` in Chrome → tap **⋮ → Add to Home Screen** for app-like experience.

---

Made with ❤️ for small grocery shops
## OUTPUT

<img width="1895" height="1008" alt="image" src="https://github.com/user-attachments/assets/468a906f-ad1f-415c-8944-ebe2775aabe6" />

<img width="1908" height="1007" alt="image" src="https://github.com/user-attachments/assets/f2ff3754-f5b8-4fcb-a84c-855401689ef8" />


<img width="1905" height="1017" alt="image" src="https://github.com/user-attachments/assets/49807fcb-50c1-4c9f-b0bc-3c3ca09de5f7" />


<img width="1888" height="1018" alt="image" src="https://github.com/user-attachments/assets/db3d987c-e121-4507-aaae-438a686a664f" />

<img width="1894" height="1000" alt="image" src="https://github.com/user-attachments/assets/6bff931d-7a50-4b6a-8048-c25ff3b6ba16" />



