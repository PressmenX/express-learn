const { toProductResponse, inputProductDTO } = require("../dtos/product.dto");
const service = require("../services/product.service");

const getAll = (req, res) => {
  const products = service.getAllProduct();
  res.status(200).json({ data: products });
};

const getById = (req, res) => {
  const id = Number(req.params.id);
  const product = service.getProductById(id);
  res.status(200).json({ data: toProductResponse(product) });
};

const create = (req, res) => {
  const newProduct = service.createProduct(inputProductDTO(req.body));
  res
    .status(201)
    .json({ message: "Data berhasil ditambahkan", data: newProduct });
};

const update = (req, res) => {
  const id = Number(req.params.id);
  const updatedProduct = service.updateProduct(id, inputProductDTO(req.body));
  res
    .status(200)
    .json({ message: "Produk berhasil diupdate", data: updatedProduct });
};

const remove = (req, res) => {
  const id = Number(req.params.id);
  const deletedProduct = service.deleteProduct(id);
  res.status(200).json({ message: `Produk dengan id ${id} berhasil dihapus` });
};

module.exports = { getAll, getById, create, update, remove };
