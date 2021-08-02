const mhs = [
  {
    nama: "Kholid",
    nrp: 1210197005,
    jurusan: "Telkom",
  },
  { nama: "Joko", nrp: 120197006, jurusan: "Telkom" },
  { nama: "Sinta", nrp: 120197007, jurusan: "Telkom" },
  { nama: "Herman", nrp: 120197008, jurusan: "informatika" },
  { nama: "Abdul", nrp: 120197009, jurusan: "informatika" },
];

// for (let i = 0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }

const show = mhs.map((x) => x).find((c) => c.jurusan === "informatika");
console.log(show);

function hello(word) {
  return "hallo";
}

console.log(hello("halo"));
