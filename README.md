
## 📝 1. Projekttitel

**Ackerguide Video Chatbot**

---

## 📝 2. Projektbeschreibung

Der AckerGuide-Bot ist eine einfache Webanwendung, die Nutzer:innen beim Erlernen der Einrichtung und Kalibrierung landwirtschaftlicher Systeme unterstützt.  
Über einen Chatbot können gezielt Anleitungen (Videos) zu den Geräten *Raven*, *Trimble* und *Efix* abgerufen werden.  
Das Ziel ist es, Lerninhalte auf einfache Weise interaktiv und visuell bereitzustellen.

---

### 📂 Ordnerstruktur des www-Verzeichnisses



```
ackerguide-bot1/
├── ackerguide_chatbot_local.html
├── style.css
├── script.js
├── server.js
├── .env
├── .env.example
├── README.md
├── package.json
└── node_modules/ 
```

---

## 🛠️ 3. Verwendete Technologien und Versionen

### 🔢 Node.js Version

```bash
node -v
```
✏️ Ergebnis: `v18.20.5`

---

### 🔢 Webserver: Express.js

Wird als Dependency über `npm` installiert:

```bash
npm install express
```

---

### 🔢 WebDAV-Client

```bash
npm install webdav
```

Verbindung zu einem Nextcloud-basierten WebDAV-Server zur Abfrage der Video-Dateien.

---

### 🔢 Git Version

```bash
git --version
```
✏️ Ergebnis: z. B. `git version 2.42.0`

---

### 🔢 Frontend Technologien

- HTML5
- CSS3
- JavaScript (DOM-Manipulation, Fetch API)
- Lokale Datei: `ackerguide_chatbot_local.html` (Chat UI)

---

## 📝 4. Tutorials & Inhalte

- **U0:** Node.js & Terminalbefehle
- **U1:** Projektstruktur mit Git
- **U2:** Webserver mit Express.js
- **U3:** REST-API mit WebDAV-Anbindung
- **U4:** Deployment auf Railway
- **U5:** .env-Dateien & Geheimnisse verwalten
- **U6:** Lokale Entwicklung vs. Production Deployment
- **U7:** Einfaches Frontend mit JavaScript-Logik

---

## ⚙️ 5. Installationsanleitung

1. Repository klonen:
```bash
git clone https://github.com/laramariehsz/ackerguide-bot.git
cd ackerguide-bot
```

2. Abhängigkeiten installieren:
```bash
npm install
```

3. `.env` Datei anlegen und folgendes befüllen:
```env
USERNAME=deinusername
PASSWORD=deinpasswort
PORT=3000
```

4. Server starten:
```bash
node server.js
```

5. Anwendung im Browser öffnen:
```text
http://localhost:3000
```

API (nur Videos):
```text
http://localhost:3000/api/videos
```

---

## 💡 6. Nutzung & Bedienung

- Die Startseite zeigt den Chatbot an.
- User kann Begriffe wie „Efix installieren“ oder „Raven kalibrieren“ eingeben.
- Die Anwendung ruft die passende Video-URL von einem WebDAV-Server ab und zeigt sie im Chat an.
- Die Datenstruktur wird dynamisch aus `/api/videos` geladen.

---

## 🐞 7. Bekannte Probleme & Bugs

- Deployment auf Railway liefert manchmal `502`-Fehler, wenn HTML-Datei nicht korrekt verlinkt ist.
- Keine Fallback-Fehlermeldung im Frontend bei fehlendem Video.
- Frontend-Design minimal und nicht responsiv.
- Passwortschutz fehlt für WebDAV-Zugriff (Zugang nur durch .env-Schutz)

---

## ✨ 8. Reflexion

### ✅ Was lief gut?

- Die Anbindung an WebDAV war sehr interessant.
- Lokale Entwicklung lief stabil.
- Die API funktionierte schnell und zuverlässig.

### ⚠️ Wo gab es Schwierigkeiten?

- Deployment auf Railway war fehleranfällig (PORT, HTML-Pfad, .env).
- Unterschiedliches Verhalten zwischen lokalem Server und Cloud-Dienst.



---

---