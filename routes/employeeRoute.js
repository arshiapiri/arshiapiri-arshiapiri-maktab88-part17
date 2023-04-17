const { Router} = require("express");
const router =  Router();

const { getAllEmployees, createEmployee , page, getEmployeeWithId, pageInfo} = require("../controllers/employeeController")

router.get("/all" , getAllEmployees);
router.get("/page" , page);
router.get("/pageInfo/:id",pageInfo);
router.post("/" , createEmployee);
router.get("/:id", getEmployeeWithId);

module.exports = router