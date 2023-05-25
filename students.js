const validator = require('validator');
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
        minlength:3
    },
    class: Number,
    email:{
        type:String,
        unique:true,
        required: [true, "Email is already exist"],
        validate(value){
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email");
            }
        }
    },
    phone:{
        type:Number,
        minlength: 10,
        maxlength: 10,
        unique: true
    }

})

const Student = new mongoose.model("Students_list", studentSchema);

module.exports = Student;