const express = require("express");
const router = express.Router();

const {
  creatCompani,
  readAllCompani,
  readCompanyById,
  updateCompani,
  deleteCompani
} = require("../controllers/conpanniController")

router.post("/creatCompani", creatCompani);

router.get("/getAll", readAllCompani);

router.get("/getById/:id", readCompanyById);

router.put("/updateCompani/:id", updateCompani);

router.delete("/deleteCompani/:id", deleteCompani);

module.exports = router;