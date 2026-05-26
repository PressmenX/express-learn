const createError = require("../../utils/createError");

const makeDelete = (repo) => {
  const execute = (id) => {
    const exist = repo.getById(id);
    if (!exist) createError("Gagal Menghapus, Data produk Tidak ada", 404);

    return repo.remove(id);
  };

  return { execute };
};

module.exports = makeDelete;
