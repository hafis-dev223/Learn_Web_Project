function prosesLogin() {
  let username = document.getElementById("Username").value;
  let Email = document.getElementById("email").value;
  let Passwordd = document.getElementById("password").value;

  if (username === "hafis123" && Email === "muliasi229@gmail.com" && Passwordd === "hafis123h") {
    alert("akun di temukan selamat datang");

    const masuk = confirm("apakah anda ingin masuk ke halaman haram kami?");

    if (masuk) {
      alert(`selamat datang  ${username}`);
      window.location.href = "../Hospital/rumahsakit.html";

    } else {
      alert("berhasil keluar dada monyet");
    }
  } else if (username === "hafis123" && Email === "muliasi229@gmail.com" && Passwordd !== "hafis123h") {
    alert("waduh password anda salah");
    
  } else if (!username || !Email || !Passwordd) {
    alert("maaf input tidak boleh kosong");

  } else {
    alert("maaf akun anda tidak di temukan");
  }
}
