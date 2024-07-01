import { Router } from "express";
import { listAll, listSingle, register } from "../controller/SondaController.js";

const routes = Router();

routes.post('/register', register);
routes.get('/listSingle/:id', listSingle);
routes.get('/listAll/', listAll);

export default routes;
