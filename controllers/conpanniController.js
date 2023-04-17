const createError = require("http-errors");
const compani = require("../models/company_model");

// creat compani

const creatCompani = async (req, res, next) => {
  try {
    const newCompani = new compani({
      companiName: req.body.companiName,
      companiId: req.body.companiId,
      city: req.body.city,
      province: req.body.province,
      dateOfRigester: req.body.dateOfRigester,
      phoneNumber: req.body.phoneNumber,
      employee: req.body.employee,
    });

    const companires = await newCompani.save();

    const natije = await res.json(companires);
  } catch (error) {
    console.log(error.message);
    next(createError(500, "errore server creat populate", error.message));
  }
};

// read all compani
const readAllCompani = async (req, res, next) => {
  try {
    const findAll = await compani.find({});
    res.render("compani", { findAll });
  } catch (error) {
    next(createError(500, "errore server getAll", error.message));
  }
};

// read by compani ID
const readCompanyById = async (req, res, next) => {
  try {
    const getId = req.params.id;
    const findCompani = await compani
      .findById(getId)
      .populate({ path: "employee", select: { __v: 0 } });
    res.render("infoCompani", { findCompani });
  } catch (error) {
    next(createError(500, "errore server getById", error.message));
  }
};

// Update compani

const updateCompani = async (req, res, next) => {
  try {
    const getId = req.params.id;
    const fields = {
      companiName: req.body.companiName,
      companiId: req.body.companiId,
      city: req.body.city,
      province: req.body.province,
      phoneNumber: req.body.phoneNumber,
      dateOfRigester: req.body.dateOfRigester,
    };
    const updating = await compani.findByIdAndUpdate(getId, fields, {
      new: true,
    });
    res.json(updating);
  } catch (error) {
    next(createError(500, "errore server updating", error.message));
  }
};

// delete compani
const deleteCompani = async (req, res, next) => {
  try {
    const getId = req.params.id;
    const deleting = await compani.findByIdAndDelete(getId);
    res.json("succesfull!!");
  } catch (error) {
    next(createError(500, "errore server deleting", error.message));
  }
};

module.exports = {
  creatCompani,
  readAllCompani,
  readCompanyById,
  updateCompani,
  deleteCompani,
};