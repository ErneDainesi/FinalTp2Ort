import Sonda from "../models/Sonda.js";
import { validateId, validateTemp } from "../utils/SondaValidator.js";

class SondaService {
    sondaModel = new Sonda();

    async register(id, temperatura) {
        try {
            if (validateId(id)) {
                throw Error("Invalid id");
            }
            if (validateTemp(temperatura)) {
                throw Error("Invalid temperature");
            }
            const data = await this.sondaModel.create(id, temperatura);
            return {data};
        } catch (error) {
            return {errorMsg: error.message};
        }
    }

    async listSingle(id) {
        try {
            if (validateId(id)) {
                throw Error("Invalid id");
            }
            const data = await this.sondaModel.getById(id);
            return {data};
        } catch (error) {
            return {errorMsg: error.message};
        }
    }

    async listAll() {
        try {
            const data = await this.sondaModel.getAll();
            return {data};
        } catch (error) {
            return {errorMsg: error.message};
        }
    }
}

export default SondaService;
