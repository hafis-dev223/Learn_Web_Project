let jumlahSiswa = 5;
let nilai = [];
let nilaiTertinggi = 0;
let nilaiTerkecil = 0;
let jumlahLulus = 0;
let JumlahTidakLulus = 0;

for (let i = 0; i < jumlahSiswa; i++) {
  alert(`siswa ke : ${1 + i}`);

  const inputSiswa = Number(prompt("masukan nilai murid anda :"));

  nilai.push(inputSiswa);
}
 let totalSemua = nilai;

for (let j = 0; j < nilai.length; j++) {
 

  if (nilai[j] >= 75) {
    alert("lulus");
    nilaiTertinggi = nilai[j];
  } else if (nilai[j] <= 75) {
    alert("tidak lulus");
    nilaiTerkecil = nilai[j];
  }

  jumlahLulus += 1;
  JumlahTidakLulus += 1;
  let ratarata = totalSemua / jumlahSiswa;

  console.log(
    `
        Nilai Tertinggi : ${nilaiTertinggi}
        Nilai Terkecil : ${nilaiTerkecil}
        rata rata : ${ratarata}
        jumlah lulus  : ${jumlahLulus}: 
        jumlah tidak lulus : ${JumlahTidakLulus}

        `,
  );
}
