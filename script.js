const IMAGE_DELAY = 4500;

const container = document.getElementById("slides");
const slides = [];
let current = 0;

function buildSlide(project) {
  const slide = document.createElement("article");
  slide.className = "slide";

  const top = document.createElement("div");
  top.className = "slide-top";
  const title = document.createElement("h2");
  title.textContent = project.title;
  const lang = document.createElement("span");
  lang.className = "lang";
  lang.textContent = project.language;
  top.append(title, lang);

  const body = document.createElement("div");
  body.className = "slide-body";

  const text = document.createElement("div");
  text.className = "slide-text";
  const desc = document.createElement("p");
  desc.textContent = project.description;
  text.append(desc);
  body.append(text);

  const images = [];
  const dots = [];
  if (project.images && project.images.length) {
    const gallery = document.createElement("div");
    gallery.className = "gallery";
    const dotsBox = document.createElement("div");
    dotsBox.className = "dots";

    project.images.forEach((src, i) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = project.title + " – screenshot " + (i + 1);
      if (i === 0) img.classList.add("active");
      gallery.append(img);
      images.push(img);

      const dot = document.createElement("span");
      dot.className = "dot" + (i === 0 ? " active" : "");
      dotsBox.append(dot);
      dots.push(dot);
    });
    if (images.length > 1) gallery.append(dotsBox);
    body.append(gallery);
  }

  slide.append(top, body);
  container.append(slide);
  return { el: slide, images, dots, index: 0 };
}

projects.forEach(p => slides.push(buildSlide(p)));

function show(i) {
  slides[current].el.classList.remove("active");
  current = (i + slides.length) % slides.length;
  slides[current].el.classList.add("active");
}

function nextImage() {
  const s = slides[current];
  if (s.images.length < 2) return;
  s.images[s.index].classList.remove("active");
  s.dots[s.index].classList.remove("active");
  s.index = (s.index + 1) % s.images.length;
  s.images[s.index].classList.add("active");
  s.dots[s.index].classList.add("active");
}

let timer = setInterval(nextImage, IMAGE_DELAY);
container.addEventListener("mouseenter", () => clearInterval(timer));
container.addEventListener("mouseleave", () => { timer = setInterval(nextImage, IMAGE_DELAY); });

document.getElementById("next").addEventListener("click", () => show(current + 1));
document.getElementById("prev").addEventListener("click", () => show(current - 1));
document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight") show(current + 1);
  if (e.key === "ArrowLeft") show(current - 1);
});

if (slides.length) slides[0].el.classList.add("active");