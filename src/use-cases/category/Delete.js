const createError = require("../../utils/createError")

const makeDelete= (repo) => (id) => {
  const exist = repo.getById(id)
  if (!exist) createError("Gagal menghapus, Data tidak ada", 404);

  return repo.remove(id)
}

module.exports = makeDelete