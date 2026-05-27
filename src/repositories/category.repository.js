const path = require("path");
const getDataJSON = require("../utils/getDataJSON");
const FILE_PATH = path.join(__dirname, "../database/categories.json");

const categories = getDataJSON(FILE_PATH);
const makeCategoryRepository = () => ({
  getAll: () => categories,
  getById: (id) => {
    const index = categories.findIndex((d) => d.id === id);
    if (index === -1) return null;
    return categories[index];
  },
  remove: (id) => {
    const index = categories.findIndex((d) => d.id === id);
    if (index === -1) return null;
    categories.splice(index, 1);
    return true;
  },
  save: (item) => {
    categories.push(item);
    return item;
  },
  update: (id, changes) => {
    const index = categories.findIndex((d) => d.id === id);
    if (index === -1) return null;
    const existing = categories[index];
    categories[index] = { ...existing, ...changes };
    return categories[index];
  },
});

module.exports = makeCategoryRepository;
