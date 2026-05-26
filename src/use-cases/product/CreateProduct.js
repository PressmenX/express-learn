const createError = require("../../utils/createError");

const makeCreate = (repo) => {
  const execute = (inputDTO) => {
    const exist = repo.getById(inputDTO.id);
    if (exist)
      createError(
        "Gagal Membuat, Data Produk sudah terdaftar dalam sistem",
        409,
      );

    return repo.save(inputDTO);
  };

  return { execute };
};


module.exports = makeCreate