import { projects } from './App.js';

const container = document.querySelector("#project-list");
const filterRow = document.querySelector("#filter-btn-row");
const emptyMsg = document.querySelector("#empty-message");
const form = document.querySelector("#contact-form");
const inputNama = document.querySelector("#nama");
const errorNama = document.querySelector("#error-nama");
const btnSubmit = document.querySelector("#submit-btn");

function buildCard(project) {
  const article = document.createElement("article");
  article.className = "kartu";

  const img = document.createElement("img");
  img.className = "kartu__gambar";
  img.src = project.image || "asset/image.png";
  img.alt = "";

  const isi = document.createElement("div");
  isi.className = "kartu__isi";

  const judul = document.createElement("h3");
  judul.className = "kartu__judul";
  judul.textContent = project.title;

  const deskripsi = document.createElement("p");
  deskripsi.textContent = project.description;

  isi.append(judul, deskripsi);

  const kaki = document.createElement("div");
  kaki.className = "kartu__kaki";

  const label = document.createElement("span");
  label.className = "label";
  label.textContent = project.category;

  const tombol = document.createElement("a");
  tombol.className = "tombol";
  tombol.href = "#";
  tombol.textContent = "Buka";

  kaki.append(label, tombol);
  article.append(img, isi, kaki);

  return article;
}
function render(list) {
  container.textContent = "";

  if (list.length === 0) {
    emptyMsg.hidden = false;
    return;
  }

  emptyMsg.hidden = true;

  list.forEach((project) => {
    container.append(buildCard(project));
  });
}

function markActiveButton(activeButton) {
  filterRow.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("active", button === activeButton);
  });
}

filterRow.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  const category = button.dataset.category;

  const selected = projects.filter(
    (project) => category === "all" || project.category === category
  );

  markActiveButton(button);
  render(selected);
});

inputNama.addEventListener("input", () => {
  const value = inputNama.value.trim();

  if (value === "") {
    errorNama.style.display = "block";
    inputNama.setAttribute("aria-invalid", "true");
    btnSubmit.disabled = true;
  } else {
    errorNama.style.display = "none";
    inputNama.removeAttribute("aria-invalid");
    btnSubmit.disabled = false;
  }
});
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const value = inputNama.value.trim();
  if (value === "") {
    inputNama.focus();
    return;
  }

  alert(`Proyek "${value}" berhasil dikirim!`);
  form.reset();
  btnSubmit.disabled = true;
});

render(projects);