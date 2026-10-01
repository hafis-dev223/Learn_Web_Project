let angkaRahasia = Math.floor(Math.random() * 10) + 1;
let kesempatan = 3;
let skorUser = 0;

console.log(`angka rahasia nya adalah ${angkaRahasia}`);

while (kesempatan > 0) {
  const Input_angka = Number(prompt("masukan angka anda "));
  kesempatan -= 1;

  if (kesempatan === 0) {
    skorUser = 0;
  } else if (kesempatan === 1) {
    skorUser = 50;
  } else if (kesempatan === 2) {
    skorUser = 80;
  } else if (kesempatan === 3) {
    skorUser = 100;
  }

  if (Input_angka === angkaRahasia) {
    alert(`tebakan anda tepat : ${angkaRahasia} \t Skor yang di dapaet ${skorUser} `);

    const promptInput = prompt("apakah anda lanjut main lagi ? ketik : hafis ganteng/ hafis jelek ").toLocaleLowerCase().trim();

    if (promptInput.includes("hafis ganteng")) {
      alert("lanjut main, btw makasih udah bilang hafis ganteng xixixi");
      location.reload();
    } else {
      alert("terimakasih udah bermain btw ni jahat banget bilang hafis jelek demi bisa keluar");
      break;
    }
  } else if (Input_angka < angkaRahasia) {
    alert(`angka terlalu kecil sisa kesempatan anda : ${kesempatan}  `);
  } else if (Input_angka > angkaRahasia) {
    alert(`angka terlalu besar sisa kesempatan anda : ${kesempatan}  `);
  } else {
  }

  if (kesempatan === 0) {
    alert(`kesempatan anda habis skor yang di dapat adalah: ${skorUser} `);

    let yakinUser = prompt("jika anda ingin  lanjut main ketik y/n y lanjut n keluar");

    if (yakinUser.includes("y")) {
      alert("lanjut main ");
      location.reload();
      
    } else {
      alert("selamat anda boleh keluar ");
      break;
    }
  }
}
