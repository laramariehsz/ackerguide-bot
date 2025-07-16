const chat = document.getElementById("chat");
const form = document.getElementById("form");
const input = document.getElementById("input");

let currentSystem = null;
let currentStep = "start";

const videos = {
  Raven: {
    Installation: "https://isa14.edumake.de/remote.php/dav/files/lara1/Videos%20Ackerguide/Raven/Raven_installation.mp4"
  },
  Trimble: {
    Installation: "https://isa14.edumake.de/remote.php/dav/files/lara1/Videos%20Ackerguide/Trimble/Trimble_installation.mp4"
  },
  Efix: {
    Installation: "https://isa14.edumake.de/remote.php/dav/files/lara1/Videos%20Ackerguide/Efix/Effix_installation.mp4"
  }
};

function appendMessage(sender, text, isHTML = false) {
  const msg = document.createElement("div");
  msg.className = sender === "Du" ? "user" : "bot";
  msg.innerHTML = isHTML ? text : `<strong>${sender}:</strong> ${text}`;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

function showVideo(url) {
  const videoHTML = `
    <video controls width="100%">
      <source src="${url}" type="video/mp4">
      Dein Browser unterstützt das Video-Tag nicht.
    </video>
    <p><em>Falls du nicht eingeloggt bist, wird dich Nextcloud zum Login auffordern.</em></p>
  `;
  appendMessage("Bot", videoHTML, true);
}

// Willkommensnachricht direkt beim Laden
window.onload = () => {
  appendMessage("Bot", "Willkommen beim Ackerguide Video-Chatbot!");
  appendMessage("Bot", "Für welches Lenksystem interessierst du dich: Raven, Trimble oder Efix?");
  currentStep = "system";
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userInput = input.value.trim();
  if (!userInput) return;

  appendMessage("Du", userInput);
  input.value = "";

  if (currentStep === "system") {
    const system = userInput.toLowerCase();
    if (["raven", "trimble", "efix"].includes(system)) {
      currentSystem = system.charAt(0).toUpperCase() + system.slice(1);
      currentStep = "topic";
      appendMessage("Bot", "Worum geht es genau: Installation, Kalibrierung oder Fehlerbehebung?");
    } else {
      appendMessage("Bot", "Bitte wähle eines der folgenden Lenksysteme: Raven, Trimble oder Efix.");
    }
  } else if (currentStep === "topic") {
    const topic = userInput.toLowerCase();
    if (topic === "installation") {
      if (videos[currentSystem] && videos[currentSystem].Installation) {
        showVideo(videos[currentSystem].Installation);
      } else {
        appendMessage("Bot", `Für ${currentSystem} wurde kein Installationsvideo gefunden.`);
      }
    } else {
      appendMessage("Bot", `Zu diesem Thema liegt aktuell kein Video vor. Mögliche Themen: Installation.`);
    }
    appendMessage("Bot", "Möchtest du noch etwas sehen? Dann wähle erneut ein System (Raven, Trimble oder Efix):");
    currentStep = "system";
    currentSystem = null;
  }
});
