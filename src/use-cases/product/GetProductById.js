const createError = require("../../utils/createError");

const makeGetById = (repo) => {
  const execute = (id) => {
    const data = repo.getById(id)
    if (!data)  createError("Data Produk tidak ada", 404);

    return data 
  }

  return { execute };
};


module.exports = makeGetById

