const createError = require("../../utils/createError")

const makeCreate = (repo) => (inputDTO) => {
  const exist = repo.getById(inputDTO.id)
  if (exist) createError("Gagal membuat, Data sudah ada", 409);

  return repo.save(inputDTO)
}


module.exports = makeCreate