import './api.js';
export const projects = [ 
  {
    title: "PANCASILA",
    description: "Design Feed untuk Instagram FTI UII hari Pancasila",
    category: "Design",
    image: "asset/PANCASILA.jpg"
  },
  {
    title: "Feed Statistika Magister",
    description: "Design u  ntuk Statistika Magister",
    category: "Design",
    image: "asset/Konsentrasi BISA & SDSB - 2.jpg"
  },
  {
    title: "Editing Video",
    description: "Mengedit video",
    category: "Video",
    image: "asset/Davinci.png"
  },
  {
    title: "UIUX - Kala",
    description: "Aplikasi berbasis AI yang mentrack mood sehari-hari.",
    category: "UIUX",
    image: "asset/UIUX KALA.png"
  },
  {
    title: "UIUX - HealthSync",
    description: "Aplikasi kesehatan",
    category: "UIUX",
    image: "asset/UIUX - HealthSync.png"
  },
  {
    title: "UIUX - Siskamling",
    description: "Aplikasi untuk masyarakat",
    category: "UIUX",
    image: "asset/Siskamling.png"
  }
];

//Try/Catch Lembar Kerja B
import { fetchNews } from './api.js';

async function init() {
    try {
        const data = await fetchNews();
        console.log("Berhasil memuat:", data);
    } catch (error) {
        console.error("Error ditangkap di App.js:", error.message);
    }
}

init();

//List Lembar Kerja D
const container = document.querySelector('#list');

function render(list) {
  container.textContent = '';
  list.forEach(function (n) {
    const card = document.createElement('article');
    const heading = document.createElement('h3');
    heading.textContent = n.title;
    card.appendChild(heading);
    container.appendChild(card);
  });
}
