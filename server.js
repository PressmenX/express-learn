const app = require("./app.js");

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, async () => {
  console.log("========== Server Berjalan di http://localhost:3000 ==========");

  const res = await fetch("http://localhost:3000/products", {
    headers: { authorization: "Bearer pass231" },
  });
  console.log(await res.json());

  const res2 = await fetch("http://localhost:3000/users");
  console.log(await res2.json());

  const res3 = await fetch("http://localhost:3000/products/1");
  console.log(await res3.json());
});
