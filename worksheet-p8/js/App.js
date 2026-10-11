// LEMBAR B — Data Profil sebagai Variabel

const namaLengkap = "Ahmad Azzuri Pakalessy";
const peran = "Mahasiswa Informatika";
const keahlian = ["Video Editing", "Design Graphic", "UIUX"];
const jumlahProyek = 6;

let filterAktif = "semua"; 

const kalimatPerkenalan = `Nama saya ${namaLengkap}, saya seorang ${peran}. Saat ini saya menguasai ${keahlian.length} keahlian utama dan telah membuat ${jumlahProyek} proyek.`;

console.log(kalimatPerkenalan);

const profil = {
  nama: namaLengkap,
  peran: peran,
  keahlian: keahlian,
  alamat: {}
};

const kota = profil.alamat?.kota ?? "Ternate";
console.log(`Kota asal: ${kota}`);


// LEMBAR C

function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

// Lembar Kerja D

const daftarproyek = [
  { id: 1, judul: "Design feed Instagram FTI", tahun: 2026, selesai: true },
  { id: 2, judul: "Design feed Instagram Magister Statistika", tahun: 2026, selesai: true },
  { id: 3, judul: "Video Editing AMV", tahun: 2022, selesai: true },
  { id: 4, judul: "UIUX Design - Kala", tahun: 2026, selesai: false },
  { id: 5, judul: "UIUX Design expo - HealthSync", tahun: 2025, selesai: true },
  { id: 6, judul: "UIUX Design - Siskamling", tahun: 2026, selesai: false }
];

console.log("--- Lembar D: Tabel Semua Proyek ---");
console.table(daftarproyek);

const selesai = daftarproyek.filter((proyek) => proyek.selesai);
console.log("--- Lembar D: Filter Proyek Selesai ---");
console.table(selesai);

const katalog = daftarproyek.find((proyek) => proyek.judul === "UIUX Design - Kala");
console.log("--- Lembar D: Hasil Cari Proyek (find) ---");
console.log(katalog);

const daftarJudul = daftarproyek.map((proyek) => proyek.judul);
console.log("--- Lembar D: List Judul (map) ---");
console.log(daftarJudul);

const proyekTerurut = [...daftarproyek].sort((a, b) => b.tahun - a.tahun);
console.log("--- Lembar D: Proyek Urut Tahun Terbaru (sort) ---");
console.table(proyekTerurut);