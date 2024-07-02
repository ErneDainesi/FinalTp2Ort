import SondaService from '../services/SondaService.js';

const service = new SondaService();

export const register = async (req, res) => {
    try {
        const {id, temperatura} = req.body;
        const result = await service.register(id, temperatura);
        const status = result.errorMsg ? 422 : 200;
        res.status(status).json(result);
    } catch (error) {
        res.status(422).json({errorMsg: error.message})
    }
}

export const listAll = async (req, res) => {
    try {
        const result = await service.listAll();
        const status = result.errorMsg ? 400 : 200;
        res.status(status).json(result);
    } catch (error) {
        res.status(500).json({errorMsg: error.message})
    }
}

export const listSingle = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await service.listSingle(id);
        const status = result.errorMsg ? 400 : 200;
        res.status(status).json(result);
    } catch (error) {
        res.status(500).json({errorMsg: error.message})
    }
}
