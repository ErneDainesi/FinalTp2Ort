import { Router } from "express";
import { listAll, listSingle, register } from "../controller/SondaController";

const routes = Router();

routes.post('/registrar', register);
routes.get('/listSingle/{:id}', listSingle);
routes.get('/listAll/', listAll);

export default routes;
