const { input, output } = require("../dtos/category.dto");

const makeCategoryController = (useCase) => ({
  getAll: (req, res) => {
    const categories = useCase.getAll();
    res.status(200).json({ data: categories });
  },
  getById: (req, res) => {
    const id = Number(req.params.id);
    const category = useCase.getById(id);
    res.status(200).json({ data: category });
  },
  create: (req, res) => {
    const newCategory = useCase.create(input(req.body));
    res
      .status(201)
      .json({ message: "Data berhasil dibuat", new : newCategory });
  },
  delete : (req, res) => {
    const id = Number(req.params.id);
    const deletedCategory = useCase.delete(id);
    res
      .status(200)
      .json({ message: `Data id ${id} berhasil dihapus`, deleted : deletedCategory });
  },
  update : (req, res) => {
    const id = Number(req.params.id);
    const updatedCategory = useCase.update(id, input(req.body));
    res
      .status(200)
      .json({ message: `Data id ${id} berhasil diupdate`, updated : updatedCategory });
  }
});


module.exports = makeCategoryController