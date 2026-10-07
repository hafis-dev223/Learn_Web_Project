let NamaPemilik = "";
let JenisKendaraan = "";
let hargaParkir = "";
let lamaParkit = 0;
let tarif = 0;
let TotalBayar = 0;
let diskon = 0;

while (true) {
  const InputNama = prompt("masukan nama anda :");
  NamaPemilik = InputNama;

  const InputJenisKendaraan = prompt("masukan jenis kendaraan anda :").toLowerCase();
  JenisKendaraan = InputJenisKendaraan;

  const InputBerapaJam = Number(prompt("masukan berapa lama jam anda parkir :"));
  lamaParkit = InputBerapaJam;

  if (lamaParkit > 0) {
    alert("selamat anda lolos ");
  } else {
    alert("maaf lama parkir harus melebehi 1 jam");
    continue;
  }

  if (InputJenisKendaraan === "motor") {
    tarif = 2000;
  } else if (InputJenisKendaraan === "mobil") {
    tarif = 5000;
  }

  let subTotal = lamaParkit * tarif;

  if (InputBerapaJam <= 5) {
    diskon = subTotal * 0.1;
  } else if (InputBerapaJam <= 10) {
    diskon = subTotal * 0.2;
  }

  if (InputJenisKendaraan !== "motor" && InputJenisKendaraan !== "mobil") {
    alert("maaf input lu di luar nalar silahkan isi lagi yang bener");
    continue;
  }

  TotalBayar = subTotal - diskon;

  let InputPadaUser = prompt("apakah anda ingin lanjut parkir lagi? ketik (y/n)");

  if (InputPadaUser.includes("y")) {
    alert("program akan di lanjut ");
    continue;
  } else {
    alert("program di hentikan");

    console.log(`
========================
      PARKIR MASUK
========================
Nama        : ${NamaPemilik}
Kendaraan   : ${JenisKendaraan}
Lama Parkir : ${lamaParkit} jam
sub total   : Rp${subTotal}
diskound    : Rp ${diskon}
Tarif       : Rp${tarif}/jam
Total Bayar : Rp${TotalBayar}

========================
Terima kasih!
`);
  }
  break;
}
