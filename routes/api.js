import express  from "express";
import studentController from "../controllers/studentController.js";
const route = express.Router();

route.get('/', studentController.getAllDoc);
route.post('/', studentController.createDoc);
route.get('/edit/:id', studentController.editDoc);
route.post('/update/:id', studentController.updateDocById);
route.post('/delete/:id', studentController.deleteDocById);


export default route