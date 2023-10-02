const { getPagination, getPaginateData } = require("../helper/pagination");
const { Sequelize } = require("sequelize");
const Models = require("../models/index");
const Users = Models.Users;

const getAllUser = async (req, res) => {
  try {
    return res.status(200).json({
      message: "oke jadi",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

const postUcapan = async (req, res) => {
  try {
    const { nama, kehadiran, ucapan } = req.body;
    if (!nama) {
      return res.status(400).send("nama tidak boleh kosong");
    }
    if (!kehadiran) {
      return res.status(400).send("kehadiran tidak boleh kosong");
    }
    if (!ucapan) {
      return res.status(400).send("Ucapan tidak boleh kosong");
    }

    const data = await Users.create({
      nama: nama,
      kehadiran: kehadiran,
      ucapan: ucapan,
    });

    return res.status(201).json({
      message: "success",
      data: data,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

const getUcapan = async (req, res) => {
  const { page, size, order = "ASC" } = req.query;
  const { limit, offset } = getPagination(page, size);
  try {
    const data = await Users.findAndCountAll({
      attributes: {
        exclude: ["updatedAt"],
      },
      limit,
      offset,
      order: [["createdAt", `${order}`]],
    });
    const result = getPaginateData(data, page, limit);
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  getAllUser,
  postUcapan,
  getUcapan,
};
