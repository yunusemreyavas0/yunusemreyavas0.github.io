const root = document.documentElement;

// Tema düğmesi: seçim tarayıcıda saklanır, yoksa sistem ayarı geçerli olur
document.getElementById("theme").addEventListener("click", () => {
  const dark = root.dataset.theme
    ? root.dataset.theme === "dark"
    : matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = dark ? "light" : "dark";
  try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
});

// Dil: Türkçe metinler index.html'de durur, İngilizceleri burada
const en = {
  "nav.about": "about",
  "nav.projects": "projects",
  "nav.skills": "skills",
  "nav.education": "education",
  "nav.contact": "contact",
  "lede": "I'm a 3rd-year Computer Engineering student focused on Apple ecosystem engineering.",
  "about.1": "I'm developing an iOS/macOS application with Swift and SwiftUI, and I built a web-based engine and gearbox simulator. I have an academic foundation in Object-Oriented Programming, Data Structures, Database Management, and Web Programming.",
  "about.2": "I'm curious and open to learning and growing in different areas. I approach problems calmly and with a solution-oriented mindset, and I work well in teams.",
  "p1.title": "Engine & Gearbox Simulator",
  "p1.desc": "An educational, browser-based web application that calculates and visualizes in real time how vehicle engines (inline, V, W, boxer, electric) and manual/automatic transmissions work, using physics formulas. I developed it with AI tools such as Claude Code, version-controlled it with Git/GitHub, and deployed it with Netlify.",
  "p2.title": "Cross-Platform iOS/macOS Application",
  "p2.status": "current",
  "p2.1": "I'm developing a personal cross-platform application natively for the Apple ecosystem (iOS & macOS).",
  "p2.2": "I'm integrating SwiftData for persistent local data management and model synchronization across devices.",
  "p2.3": "I'm managing physical device deployment and app configurations via Xcode.",
  "s.lang": "Programming languages",
  "s.tools": "Frameworks & tools",
  "s.concepts": "Concepts",
  "s.concepts.v": "Object-Oriented Programming (OOP), Data Structures, Database Management, Web Development",
  "s.spoken": "Languages",
  "s.spoken.v": "Turkish (native), English (A2)",
  "e.school": "Afyon Kocatepe University",
  "e.date": "Sep. 2024 – present",
  "e.degree": "Bachelor of Engineering in Computer Engineering · GPA 3.21 / 4.00",
  "c.mail": "Email",
};

const nodes = [...document.querySelectorAll("[data-i18n]")];
const tr = Object.fromEntries(nodes.map((el) => [el.dataset.i18n, el.textContent]));
const langButtons = [...document.querySelectorAll(".lang button")];

function setLang(lang) {
  const dict = lang === "en" ? en : tr;
  nodes.forEach((el) => { el.textContent = dict[el.dataset.i18n]; });
  root.lang = lang;
  langButtons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  try { localStorage.setItem("lang", lang); } catch (e) {}
}

langButtons.forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));

try {
  if (localStorage.getItem("lang") === "en") setLang("en");
} catch (e) {}
