const IMAGE_DELAY = 4000; // ms entre deux images

// Textes de l'interface (pour ajouter une langue : ajoute un bloc ici
// + un bouton dans index.html + une entrée dans chaque description de projects.js)
const ui = {
  en: {
    title: "Ana Charpentier – Portfolio",
    role: "Ana Charpentier · Developer",
    heading: "Explore my projects",
    prev: "Previous project",
    next: "Next project",
    shot: "screenshot"
  },
  fr: {
    title: "Ana Charpentier – Portfolio",
    role: "Ana Charpentier · Développeuse",
    heading: "Découvrez mes projets",
    prev: "Projet précédent",
    next: "Projet suivant",
    shot: "capture d’écran"
  }
};

const container = document.getElementById("slides");
const slides = [];
let current = 0;

// Langue : choix mémorisé, sinon langue du navigateur
let lang = navigator.language.startsWith("fr") ? "fr" : "en";
try {
  const saved = localStorage.getItem("lang");
  if (saved && ui[saved]) lang = saved;
} catch (e) {}

// Construit une slide à partir d'un objet de projects.js
function buildSlide(project) {
  const slide = document.createElement("article");
  slide.className = "slide";

  const top = document.createElement("div");
  top.className = "slide-top";
  const title = document.createElement("h2");
  title.textContent = project.title;
  const langTag = document.createElement("span");
  langTag.className = "lang";
  langTag.textContent = project.language;
  top.append(title, langTag);

  const body = document.createElement("div");
  body.className = "slide-body";

  const text = document.createElement("div");
  text.className = "slide-text";
  const desc = document.createElement("p");
  text.append(desc);
  body.append(text);

  const images = [];
  const dots = [];
  const state = { el: slide, images, dots, index: 0, project, desc };

  if (project.images && project.images.length) {
    const gallery = document.createElement("div");
    gallery.className = "gallery";
    const dotsBox = document.createElement("div");
    dotsBox.className = "dots";

    project.images.forEach((src, i) => {
      const img = document.createElement("img");
      img.src = src;
      if (i === 0) img.classList.add("active");
      gallery.append(img);
      images.push(img);

      const dot = document.createElement("span");
      dot.className = "dot" + (i === 0 ? " active" : "");
      dot.addEventListener("click", () => {
        showImage(state, i);
        restartTimer();
      });
      dotsBox.append(dot);
      dots.push(dot);
    });
    if (images.length > 1) gallery.append(dotsBox);
    body.append(gallery);
  }

  slide.append(top, body);
  container.append(slide);
  return state;
}

projects.forEach(p => slides.push(buildSlide(p)));

// Applique une langue à toute la page
function setLanguage(l) {
  lang = l;
  try { localStorage.setItem("lang", l); } catch (e) {}

  document.documentElement.lang = l;
  document.title = ui[l].title;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = ui[l][el.dataset.i18n];
  });
  document.getElementById("prev").setAttribute("aria-label", ui[l].prev);
  document.getElementById("next").setAttribute("aria-label", ui[l].next);

  slides.forEach(s => {
    const d = s.project.description;
    s.desc.textContent = typeof d === "string" ? d : (d[l] || d.en);
    s.images.forEach((img, i) => {
      img.alt = s.project.title + " – " + ui[l].shot + " " + (i + 1);
    });
  });

  document.querySelectorAll(".lang-switch button").forEach(b => {
    b.classList.toggle("active", b.dataset.lang === l);
  });
}

document.querySelectorAll(".lang-switch button").forEach(b => {
  b.addEventListener("click", () => setLanguage(b.dataset.lang));
});

// Change de projet
function show(i) {
  slides[current].el.classList.remove("active");
  current = (i + slides.length) % slides.length;
  slides[current].el.classList.add("active");
}

// Affiche l'image numéro i d'un projet
function showImage(s, i) {
  s.images[s.index].classList.remove("active");
  s.dots[s.index].classList.remove("active");
  s.index = (i + s.images.length) % s.images.length;
  s.images[s.index].classList.add("active");
  s.dots[s.index].classList.add("active");
}

// Image suivante dans le projet affiché
function nextImage() {
  const s = slides[current];
  if (s.images.length > 1) showImage(s, s.index + 1);
}

let timer;
function restartTimer() {
  clearInterval(timer);
  timer = setInterval(nextImage, IMAGE_DELAY);
}
restartTimer();
container.addEventListener("mouseenter", () => clearInterval(timer));
container.addEventListener("mouseleave", restartTimer);

document.getElementById("next").addEventListener("click", () => show(current + 1));
document.getElementById("prev").addEventListener("click", () => show(current - 1));
document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight") show(current + 1);
  if (e.key === "ArrowLeft") show(current - 1);
});

if (slides.length) slides[0].el.classList.add("active");
setLanguage(lang);