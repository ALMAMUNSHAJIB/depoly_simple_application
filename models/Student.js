import mongoose from "mongoose";
const {Schema, model} = mongoose;

const studentSchema =  Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 60
    },
    fee: {
        type: String,
        required: true,
        validate: (value) => value >= 50
    }
}, {
    timesteamps: true
});


const Student = model('Student', studentSchema);
export default Student;