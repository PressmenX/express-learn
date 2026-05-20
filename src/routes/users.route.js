const { Router } = require("express");
const authCheck  = require("../middleware/auth.middleware");
const router = Router();

const users = [];

router.get("/", (req, res) => {
  const { category, limit } = req.query;

  if (!category || !limit) {
    return res.json(users);
  }
  res.json({
    category,
    limit: Number(limit),
    data: users,
  });
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = users.findIndex((p) => p.id === id);
  res.json({ data: users[index] });
});

router.post("/", authCheck, (req, res) => {
  const { id, name } = req.body;

  if (!id || !name) {
    return res.status(400).json({ message: "Data tidak Valid" });
  }

  const data = { id, name };
  users.push(data);
  res.status(201).json({ message: "Data berhasil dibuat!", created: data });
});

router.put("/:id", authCheck, (req, res) => {
  const id = Number(req.params.id);
  const data = req.body;
  const index = users.findIndex((p) => p.id === id);
  if (index !== -1) {
    users[index] = { id, ...data };
    res.json({ data: users[index] });
  } else {
    res.status(404).json({ message: "User tidak ditemukan" });
  }
});

router.delete("/:id", authCheck, (req, res) => {
  const id = Number(req.params.id);
  const index = users.findIndex((p) => p.id === id);
  if (index !== -1) {
    users.splice(index, 1);
    res.json({ message: `Data ${id} berhasil Di hapus` });
  } else {
    res.status(404).json({ message: "User tidak ditemukan" });
  }
});

module.exports = router;
