# தண்டபாணி மளிகை கடை — Desktop App Setup

## Files இந்த folder-ல் இருக்கணும்:
```
dhandapani-app/
  ├── index.html      ← App UI
  ├── main.js         ← Electron main process
  ├── preload.js      ← File storage bridge
  └── package.json    ← App config
```

---

## முதல் முறை Setup (ஒரே ஒரு தடவை):

### 1. Node.js install பண்ணுங்க
https://nodejs.org → LTS version download → Install

### 2. Terminal / Command Prompt open பண்ணுங்க
- Windows: Start → "cmd" search → Enter
- Mac: Terminal app

### 3. இந்த folder-க்கு போங்க:
```
cd C:\Users\YourName\Downloads\dhandapani-app
```

### 4. Electron install பண்ணுங்க:
```
npm install
```
(5-10 minutes ஆகும், internet வேணும்)

### 5. App run பண்ணுங்க:
```
npm start
```

---

## .exe File உருவாக்க (Share பண்ண):
```
npm run build-win
```
`dist` folder-ல் `.exe` file வரும் — அதை யாருக்கும் share பண்ணலாம்!

---

## Data எங்கே Save ஆகுது?

**Windows:** `C:\Users\YourName\AppData\Roaming\dhandapani-grocery-shop\dhandapani_data.json`
**Mac:** `~/Library/Application Support/dhandapani-grocery-shop/dhandapani_data.json`

இந்த JSON file-ஐ copy பண்ணி வேற computer-க்கு transfer பண்ணலாம்!

---

## Browser-லயும் Use பண்ணலாம்:
`index.html` file-ஐ Chrome-ல் open பண்ணுங்க — localStorage use ஆகும்.
Electron-ல் open பண்ணும்போது file storage use ஆகும்.
