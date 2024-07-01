class Sonda {
    sondas = [];

    async create(id, temperatura) {
        const time = new Date();
        const timestamp = `${time.getDay()}/${time.getMonth()}/${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}`;
        const parsedId = typeof id === 'string' ? id : JSON.stringify(id);
        const newRegister = {id: parsedId, temperatura, timestamp};
        this.sondas.push(newRegister);
        return newRegister;
    }

    async getAll() {
        return this.sondas;
    }

    async getById(id) {
        const res = this.sondas.filter((register) => id === register.id);
        if (res.length <= 0) {
            throw Error("Provided sonda does not exist");
        }
        return res;
    }
}

export default Sonda;
