const makeProductRepository = () => {
  const products = [
    { id: 1, name: "Milk" },
    { id: 2, name: "Coffe" },
  ];

  const getAll = () => products;
  const getById = (id) => products.find((p) => p.id === id);

  const save = (data) => {
    products.push(data);
    return data;
  };
  const update = (id, updatedData) => {
    const index = products.findIndex((p) => p.id === id);
    if (index === -1) return null;
    products[index] = { id, ...updatedData };
    return products[index];
  };

  const remove = (id) => {
    const index = products.findIndex((p) => p.id === id);
    if (index === -1) return null;
    products.splice(index, 1);
    return true;
  };

  return { getAll, getById, save, update, remove }
};
module.exports = makeProductRepository;
