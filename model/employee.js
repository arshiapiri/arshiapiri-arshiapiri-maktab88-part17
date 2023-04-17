const { mongoose } = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    FristName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30
    },
    LastName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30
    },
    Gender: {
        type: String,
        enum: ["man", "woman", "unknown", "not-set"],
        default: "not-set"
    },
    Phone_number: [
        {
            type: String,
            unique: true,
            required: true,
            validate: /^(\+98|0)?9\d{9}$/
        },
    ],
    NationalCode: {
        type: String,
        unique: true,
        validate: /^\d{10}$/
    },
    Province: {
        type: String,
        trim: true,
        enum: [
            "Tehran",
            "Karaj",
            "Mashhad",
            "Shiraz",
            "Tabriz",
            "Isfahan",
            "Ahvaz",
            "Kermanshah",
            "Rasht",
            "Kerman",
            "Zahedan",
            "Yazd",
            "Gorgan",
            "Sanandaj",
            "Qazvin",
            "Khorramabad",
            "Sari",
            "Hamedan",
            "Arak",
            "Bandar Abbas",
            "Abadan",
            "Bushehr",
            "Kish",
            "Qom"
        ],
        default: "not-set"
    },
    RoleInCompany: {
        type: String,
        enum: ["Employee", "Manager"],
        default: "Employee"
    },
    compani: {
        type: mongoose.Types.ObjectId,
        ref: "compani",
        trim: true,
        required: true,
        type: String,
        minlength: 2,
        maxlength: 40,
      },
    DateOfRegistration: {
        type: Date,
        default: Date.now,
        immutable: true,
    },
})

module.exports = mongoose.model("Employee", EmployeeSchema);