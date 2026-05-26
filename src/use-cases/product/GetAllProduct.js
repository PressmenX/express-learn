const makeGetAll = (repo) => {
  const execute = () => repo.getAll();

  return { execute };
};

module.exports = makeGetAll
