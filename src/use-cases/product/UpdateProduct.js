const createError = require("../../utils/createError");

const makeUpdate = (repo) => {
  const execute = (id, updatedData) => {
    const exist = repo.getById(id);
    if (!exist) createError("Gagal Memperbarui, Data produk Tidak ada", 404);

    return repo.update(id, updatedData)
  };

  return {execute}
};

module.exports = makeUpdate
