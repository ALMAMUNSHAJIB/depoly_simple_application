import Student from '../models/Student.js';
class studentController {

    static createDoc = async(req, res) => {
        try {
            const {name, age, fee} = req.body;
             const newStudent = new Student({
                name: name,
                age: age,
                fee: fee
            });
            const result = await newStudent.save();
            console.log(result);
            res.redirect('/student');
        } catch (error) {
            console.log(error);
        }
       
    }

    static getAllDoc = async (req, res) => {
        try {
            const result = await Student.find();
            res.render("index", {data: result});   
        } catch (error) {
            console.log(error);    
        }
        
    }

    static editDoc = async(req, res) => {
        try {
            const result = await Student.findById(req.params.id);
            // console.log(result);
            res.render("edit", {data: result})   
        } catch (error) {
            console.log(error);
        }    
   }

   static deleteDocById  = async (req, res) => {
       try {
        const student =  await Student.findByIdAndRemove(req.params.id);
        res.redirect('/student')
       } catch (error) {
           console.log(error);
           
       }
   
   }
   static updateDocById  = async(req, res) => {
       try {
           const students = await Student.findByIdAndUpdate(req.params.id, req.body);
           console.log(students);
           res.redirect('/student');
           
       } catch (error) {
           console.log(error);
           
       }
   
   }

};

export default studentController