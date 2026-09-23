console.log("===== MENU MAKANAN =====");
console.log("1. Burger  - 25000");
console.log("2. Pizza   - 35000");
console.log("3. Kentang - 15000");

let user1 = prompt("masukan menu anda :");
let jumlah = Number(prompt("masukan jumlah anda :"));
const saldo = 100000;

if (user1 == "1") {
  alert("barang di temukan  ");

  let harga = 25000;
  const total = harga * jumlah;

  alert(`total yang harus di bayar : ${total}`);

  let pembayaran = Number(prompt("masukan uang anda :"));

  let kembalian = pembayaran - total;

  alert(`pembayaran berhasil uang kembalian ${kembalian}`);
} else if (user1 == "2") {
  alert("barang di temukan ");

  let harga2 = 35000;
  let total2 = harga2 * jumlah;

  alert(`Total yang harus di bayar : ${total2}`);

  let pembayaran2 = Number(prompt("masukan uang anda :"));

  let kembalian2 = pembayaran2 - total2;

  alert(`pembayaran berhasil uang kembalian ${kembalian2}`);
} else if (user1 == "3") {
  alert("barang di temukan  ");

  let harga3 = 15000;
  const total3 = harga3 * jumlah;

  alert(`total yang harus di bayar :${total3}`);

  let pembayaran3 = Number(prompt("masukan uang anda :"));

  let kembalian3 = pembayaran3 - total3;

  alert(`pembayaran berhasil uang kembalian ${kembalian3}`);
} else {
  alert("barang gaib tidak di temukan");
}
