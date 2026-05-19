const app = require("./app.js");

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, async () => {
  console.log("Server Berjalan di http://localhost:3000");

  const res = await fetch(
    "http://localhost:3000/products?category=drinks&limit=5",
  );
  console.log(await res.json());


  const postRes = await fetch("http://localhost:3000/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: 3,
      name: "Green Tea",
    }),
  });
  console.log(await postRes.json());

   const postRes2 = await fetch("http://localhost:3000/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: 4,
    }),
  });
  console.log(await postRes2.json());
});
