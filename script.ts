// class DataMahasiswa {
//   name: string;
//   nrp: string;
// }
// const Mhs = new DataMahasiswa();

// const mahasiswa = {
//   name: "Kh olds",
//   nrp: "121212",
// };

// const mahasiswa2 = {
//   id: 1,
//   ...mahasiswa,
// };

// console.log(mahasiswa2);

const siswa = ["Joko", "Surabaya", "Laki-Laki"];

const siswaBaru = [...siswa, "Abdul"];

console.log(siswaBaru);

let [nama, asal] = siswa;

console.log(nama, asal);

nama = "Sinta";

console.log(nama);
console.log(siswa);
