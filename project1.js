function HitungCoffee(KodeVaucher, NamaPelanggan) {
  KodeVaucher = [
    { kode: "KOPI10", diskon: 0.1 },
    { kode: "BRAW20", diskon: 0.2 },
  ];
  NamaPelanggan = ["Jamal", "Sugianto", "Hafis"];

  const NamaInput = prompt("masukan nama anda :");
  const KodeInput = prompt("masukan Kode vaucher anda :");

  let diskonn = 0;

  for (const v of KodeVaucher) {
    if (v.kode === KodeInput) {
      diskonn = v.diskon;
      alert(`selamat ${NamaInput} anda mendapat kan diskon sebesar : ${diskonn}`);
      return diskonn;
    }
  }
  alert("maaf kode vaucher anda tidak valid");
  return 0;
}

function ProsesTransaksi() {
  const NominalBelanja = Number(prompt("masukan nominal belanja  anda:"));

  const diskon = HitungCoffee();

  let totalbayaran = NominalBelanja - (NominalBelanja * diskon);

  alert(`total belanja anda : ${totalbayaran}`);

  const UangBayar = Number(prompt("masukan uang bayar anda :"));

  const kembalian = UangBayar - totalbayaran;

  alert(`uang kembalian anda : ${kembalian}`);
}

ProsesTransaksi();
