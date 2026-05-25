const repo = require("../repositories/product.repository");
const createError = require("../utils/createError");

const makeProductService = () => {
  const getAllProduct = () => repo.getAll();

  const getProductById = (id) => {
    const product = repo.getById(id);

    if (!product) createError("Data Produk tidak ada", 404);

    return product;
  };

  const createProduct = (data) => {
    const exist = repo.getById(data.id);
    if (exist)
      createError(
        "Gagal Membuat, Data Produk sudah terdaftar dalam sistem",
        409,
      );

    return repo.save(data);
  };

  const deleteProduct = (id) => {
    const exist = repo.getById(id);
    if (!exist) createError("Gagal Menghapus, Data produk Tidak ada", 404);

    return repo.remove(id);
  };

  const updateProduct = (id, data) => {
    const exist = repo.getById(id);
    if (!exist) createError("Gagal Memperbarui, Data produk Tidak ada", 404);

    return repo.update(id, data);
  };

  return {
    getAllProduct,
    getProductById,
    createProduct,
    deleteProduct,
    updateProduct,
  };
};

module.exports = makeProductService;
