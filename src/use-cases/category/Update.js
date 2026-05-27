const createError = require("../../utils/createError");

const makeUpdate = (repo) => (id, changes) => {
  const exist = repo.getById(id)
  if (!exist) createError("Gagal memperbarui, Data tidak ada", 404);

  return repo.update(id, changes)
};


module.exports = makeUpdate