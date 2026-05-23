const cetak = (n, fn) => {
  console.log("Mulai Eksekusi..");
  fn(n)
}

const cetak5 = (n) =>console.log(n);

cetak(5, cetak5)