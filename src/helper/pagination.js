const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page && page > 0 ? (page - 1) * limit : 0;

  return { limit, offset };
};

const getPaginateData = (data, page, limit) => {
  const { count: totalItem, rows: allData } = data;
  const currentPage = page && page > 0 ? +page : 1;
  const totalPages = Math.ceil(totalItem / limit);

  return { totalItem, allData, totalPages, currentPage };
};

module.exports = {
  getPagination,
  getPaginateData,
};
