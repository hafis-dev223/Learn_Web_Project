let namaBuku1 = "Laskar pelangi";
let idBuku1 = "01234";
let namaBuku2 = "Bumi";
let IdBuku2 = "067843";
let namaBuku3 = "Buku Bokep";
let idBuku3 = "097843";
let kesempatan = 4;

let NamaPelanggan = [];
let Idpelanggan = [];

console.log("================== Buku Peminjaman =============");
console.log(" \t Batas Peminjaman Buku 4 kali");
console.log("================================================");
while (kesempatan > 0) {
  kesempatan -= 1;

  const namaPelanggan = prompt("masukan nama anda :").toLocaleLowerCase();
  const IdPelanggan = prompt("masukan id anda :").toLocaleLowerCase();

  alert("kami akan memeriksa nama anda dan id anda ");

  NamaPelanggan.push(namaPelanggan);
  Idpelanggan.push(IdPelanggan);

  let ketemu = false;

  for (let i = 0; i < NamaPelanggan.length; i++) {
    if (NamaPelanggan[i] === namaPelanggan && Idpelanggan[i] === IdPelanggan) {
      ketemu = true;
      alert(` ${i + 1}nama anda di temukan \n 
            nama : ${NamaPelanggan[i]};
            id : ${IdPelanggan[i]};
            `);
      break;
    }
  }
  if (!ketemu) {
    alert("waduh nama lu ghaib ni");
    continue;
  }

  const Buku = prompt("masukan nama buku anda :").toLocaleLowerCase();
  const idBuku = prompt("masukan id buku anda :").toLocaleLowerCase();
  const inputBerapaLama = Number(prompt("masukan berapa lama anda pinjam buku :"));

  let namaBukuDitemukan = "";
  if (namaBuku1.toLocaleLowerCase().includes(Buku) && idBuku1.includes(idBuku)) {
    alert("id buku di temukan");
    namaBukuDitemukan = namaBuku1;
  } else if (namaBuku2.toLocaleLowerCase().includes(Buku) && IdBuku2.includes(idBuku)) {
    alert("buku 2 di temukan");
    namaBukuDitemukan = namaBuku2;
  } else if (namaBuku3.toLocaleUpperCase().includes(Buku) && idBuku3.includes(idBuku)) {
    alert("buku 3 di temukan ");
    namaBukuDitemukan = namaBuku3;
  } else {
    alert("maaf buku yang di cari anda tidak di temukan");
  }

  let denda = 0;
  if (inputBerapaLama > 7) {
    denda = 5000;
  }

  let formatDenda = denda > 0 ? `Rp${denda.toLocaleString("id-ID")}` : "Rp0";

  alert(
    `===== PEMINJAMAN =====
Buku       : ${namaBukuDitemukan}
Peminjam   : ${namaPelanggan}
Lama       : ${inputBerapaLama} hari
Denda      : ${formatDenda}`,
  );
  break;
}
