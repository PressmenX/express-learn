const app = require("./app.js");

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, async () => {
  console.log("========== Server Berjalan di http://localhost:3000 ==========");

  const res = await fetch("http://localhost:3000/products", {
    headers: { authorization: "Bearer pass231" },
  });
  console.log(await res.json());

  const res3 = await fetch("http://localhost:3000/products", {
    method: "POST",
    headers: { authorization: "Bearer pass231" , 'Content-Type': 'application/json'},
    body : JSON.stringify({id : 2, name : "Tea"}),
  });
  console.log(await res3.json());
});
