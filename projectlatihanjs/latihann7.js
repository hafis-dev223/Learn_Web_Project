let namaBarang = "Keyboard";
let stok = 5;
let jumlahBeli = 3;

if (stok >= 0) {
  alert("stok cukup transaksi di lanjutkan");
}

if (jumlahBeli <= stok) {
  alert("stok mencukupi");
  stok -= jumlahBeli;
} else {
  alert("stok terlalu berlebih transaksi di tolak");
}

console.log("===== SISTEM INVENTARIS =====");
console.log("Nama barang    : " + namaBarang);
console.log("Jumlah dibeli  : " + jumlahBeli);
console.log("stok sekarang :  " + stok);
