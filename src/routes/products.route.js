const { Router } = require("express");
const authCheck = require("../middlewares/auth.middleware");
const { asyncHandler } = require("../middlewares");
const router = Router();

const products = [
  { id: 1, name: "Milk" },
  { id: 2, name: "Coffe" },
];

router.get(
  "/",
  asyncHandler((req, res) => {
    const { category, limit } = req.query;

    if (!category || !limit) {
      return res.json(products);
    }
    res.json({
      category,
      limit: Number(limit),
      data: products,
    });
  }),
);

router.get(
  "/:id",
  authCheck,
  asyncHandler((req, res) => {
    const id = Number(req.params.id);
    const index = products.findIndex((p) => p.id === id);

    if (index === -1) {
      const err = new Error("Data produk tidak ditemukan");
      err.status = 404;
      throw err;
    }

    res.json({ data: products[index] });
  }),
);

router.post(
  "/",
  authCheck,
  asyncHandler((req, res) => {
    const data= req.body;

    if (!data.id || !data.name) {
      return res.status(400).json({ message: "Data tidak lengkap" })
    }

    products.push(data)
    res.json({data});
  }),
);

router.put(
  "/:id",
  authCheck,
  asyncHandler((req, res) => {
    const id = Number(req.params.id);
    const data = req.body;
    const index = products.findIndex((p) => p.id === id);

    if (index === -1) {
      const err = new Error("Data produk tidak ditemukan");
      err.status = 404;
      throw err;
    }
    products[index] = { id, ...data };
    res.json({ data: products[index] });
  }),
);

router.delete(
  "/:id",
  authCheck,
  asyncHandler((req, res) => {
    const id = Number(req.params.id);
    const index = products.findIndex((p) => p.id === id);
    if (index === -1) {
      const err = new Error("Data produk tidak ditemukan");
      err.status = 404;
      throw err;
    }
    products.splice(index, 1);
    res.json({ message: `Data ${id} berhasil Di hapus` });
  }),
);

module.exports = router;
