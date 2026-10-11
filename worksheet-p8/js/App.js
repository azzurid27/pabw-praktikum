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