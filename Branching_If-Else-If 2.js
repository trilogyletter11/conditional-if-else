let month = prompt("Nama Bulan (Inputkan angka:)");
let monthName = "";

if (month == 1) {
  monthName = "Bulan Januari";
} else if (month == 2) {
  monthName = "Bulan Februari";
} else if (month == 3) {
  monthName = "Bulan Maret";
} else if (month == 4) {
  monthName = "Bulan April";
} else if (month == 5) {
  monthName = "Bulan Mei";
} else if (month == 6) {
  monthName = "Bulan Juni";
} else if (month == 7) {
  monthName = "Bulan Juli";
} else if (month == 8) {
  monthName = "Bulan Agustus";
} else if (month == 9) {
  monthName = "Bulan September";
} else if (month == 10) {
  monthName = "Bulan Oktober";
} else if (month == 11) {
  monthName = "Bulan November";
} else if (month == 12) {
  monthName = "Bulan Desember";
} else {
  monthName = "Tidak valid";
}
console.log(monthName);
document.write(`<p>Angka yang anda masukkan: ${monthName}</p>`);
