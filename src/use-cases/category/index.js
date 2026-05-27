const makeCategoryRepository = require("../../repositories/category.repository");
const makeCreate = require("./Create");
const makeDelete = require("./Delete");
const makeGetById = require("./GetById");
const makeUpdate = require("./Update");

const makeUseCase = (repo) => ({
  getAll: () => repo.getAll(),
  getById: makeGetById(repo),
  create: makeCreate(repo),
  delete: makeDelete(repo),
  update: makeUpdate(repo),
});


module.exports = makeUseCase
