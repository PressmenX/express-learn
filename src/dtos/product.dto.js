const toProductResponse = (product) => ({
  id: product.id,
  name: product.name,
});

const inputProductDTO = (body) => ({
  id: body.id,
  name: body.name,
});

module.exports = { toProductResponse, inputProductDTO };
