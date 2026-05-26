const { toProductResponse, inputProductDTO } = require("../dtos/product.dto");

const makeProductController = (useCase) => {
  const getAll = (req, res) => {
    const products = useCase.getAll.execute();
    res.status(200).json({ data: products });
  };

  const getById = (req, res) => {
    const id = Number(req.params.id);
    const product = useCase.getById.execute(id)
    res.status(200).json({ data: toProductResponse(product) });
  };

  const create = (req, res) => {
    const newProduct = useCase.create.execute(inputProductDTO(req.body));
    res
      .status(201)
      .json({ message: "Data berhasil ditambahkan", data: newProduct });
  };

  const update = (req, res) => {
    const id = Number(req.params.id);
    const updatedProduct = useCase.update.execute(id, inputProductDTO(req.body));
    res
      .status(200)
      .json({ message: "Produk berhasil diupdate", data: updatedProduct });
  };

  const remove = (req, res) => {
    const id = Number(req.params.id);
    const deletedProduct = useCase.delete.execute(id);
    res
      .status(200)
      .json({ message: `Produk dengan id ${id} berhasil dihapus` });
  };

  return { getAll, getById, create, update, remove };
};

module.exports = makeProductController;
