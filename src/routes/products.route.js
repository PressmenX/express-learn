const { Router } = require("express");
const authCheck  = require("../middleware/auth.middleware");
const router = Router();

const products = [
  { id: 1, name: "Milk" },
  { id: 2, name: "Coffe" },
];

router.get("/", (req, res) => {
  const { category, limit } = req.query;

  if (!category || !limit) {
    return res.json(products);
  }
  res.json({
    category,
    limit: Number(limit),
    data: products,
  });
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = products.findIndex((p) => p.id === id);
  res.json({ data: products[index] });
});

router.post("/", authCheck, (req, res) => {
  const { id, name } = req.body;

  if (!id || !name) {
    return res.status(400).json({ message: "Data tidak Valid" });
  }

  const data = { id, name };
  products.push(data);
  res.status(201).json({ message: "Data berhasil dibuat!", created: data });
});

router.put("/:id", authCheck, (req, res) => {
  const id = Number(req.params.id);
  const data = req.body;
  const index = products.findIndex((p) => p.id === id);
  if (index !== -1) {
    products[index] = { id, ...data };
    res.json({ data: products[index] });
  } else {
    res.status(404).json({ message: "Product tidak ditemukan" });
  }
});

router.delete("/:id", authCheck, (req, res) => {
  const id = Number(req.params.id);
  const index = products.findIndex((p) => p.id === id);
  if (index !== -1) {
    products.splice(index, 1);
    res.json({ message: `Data ${id} berhasil Di hapus` });
  } else {
    res.status(404).json({ message: "Product tidak ditemukan" });
  }
});

module.exports = router;
