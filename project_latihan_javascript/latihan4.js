while (true) {
  let Layanan1 = "cuci Kering";
  let hargaCuciKering = 7_000;

  let layanan2 = "cuci setrika";
  let hargaCuciBersih = 10000;

  let layanan3 = "express";
  let hargaCuciExpress = 15000;

  let harga = 0;

  const InputLayanan = prompt("masukan layanan anda :").toLowerCase();
  const BeratPakian = Number(prompt("masukan berat pakian (Kg) :"));
  const NamaPelanggan = prompt("masukan nama anda :");

  console.log("======================== Selamat datang ==================");
  console.log("1. Layanan : Cuci Kering  | Harga : Rp 7.000");
  console.log("2. Layanan : Cuci Setrika | Harga : Rp 10.000");
  console.log("3. Layanan : Express      | Harga : Rp 15.000");
  console.log("===========================================================");

  if (InputLayanan.includes("Cuci Kering") || InputLayanan === "1") {
    const keranjang = InputLayanan;
    harga = BeratPakian * hargaCuciKering;
  } else if (InputLayanan.includes("cuci setrika") || InputLayanan === "2") {
    keranjang = InputLayanan;
    harga = BeratPakian * hargaCuciBersih;
  } else if (InputLayanan.includes("express") || InputLayanan === "3") {
    keranjang = InputLayanan;
    harga = BeratPakian * hargaCuciExpress;
  } else {
    alert("waduh barang lagi gak ada ni");
    continue;
  }

  console.log(
    `===== STRUK LAUNDRY =====
Pelanggan : ${NamaPelanggan}
Layanan   : ${keranjang}
Berat     : ${BeratPakian} kg
Total     : Rp${harga.toLocaleString("id-ID")}`,
  );
  break;
}
