const categoryDTO = {
  input: (body) => ({
    id: body.id,
    name: body.name,
    description: body.description,
  }),
  output: (category) => ({
    id: category.id,
    name: category.name,
    description: category.description,
  }),
};


module.exports = categoryDTO
