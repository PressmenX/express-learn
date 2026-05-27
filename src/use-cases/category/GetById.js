const createError = require("../../utils/createError")

const makeGetById = (repo) => (id) => {
  const category = repo.getById(id)
  if(!category) createError("Gagal mengambil, tidak ada", 404);

  return category
}


module.exports = makeGetById