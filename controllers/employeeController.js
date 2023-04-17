const Employee = require("../model/employee");
const createError = require('http-errors');


const page = (req, res) => {
    res.render("employee");
};

const pageInfo = (req,res) => {
    res.render("info");
}

const getAllEmployees = async (req, res, next) => {
    try {
        let sort = { DateOfRegistration: -1 };
        let employees = await Employee.find({}, "-__v").sort(sort)
        res.json(employees);
    } catch (err) {
        return next(createError(500, err.message));
    };
};

const getEmployeeWithId = async(req,res,next) => {
    try {
        const employeeID = req.params.id;
        const employees = await Employee.findById(employeeID)
        .populate({ path: "compani", select: { __v: 0 } });
        res.json(employees);
    } catch (err) {
        return next(createError(500, err.message));
    };
}

const createEmployee = async (req, res, next) => {
    try {
        const newEmployee = new Employee({
            fristName: req.body.fristName,
            lastName: req.body.lastName,
            gender: req.body.gender,
            phone_number: req.body.phone_number,
            nationalCode: req.body.nationalCode,
            province: req.body.province,
            roleInCompany: req.body.roleInCompany,
        });
  
      const employeeRes = await newEmployee.save();
      const popemployee = await employeeRes.populate({
        path: "compani",
        select: { __v: 0 },
      });
      const result = await res.json(popemployee);
    } catch (error) {
      // console.log(error);
      return next(createError(500, error.message));
    }
  };

module.exports = { getAllEmployees , createEmployee , page, getEmployeeWithId, pageInfo}