class Sonda {
    // Uso mapa para hacer una busqueda mas eficaz
    sondas = new Map();

    async create(id, temperatura) {
        const time = new Date();
        const timestamp = `${time.getDay()}/${time.getMonth()}/${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}`;
        const newRegister = {id, temperatura, timestamp};
        const parsedId = JSON.stringify(id);
        const sonda = this.sondas.get(parsedId);
        if (sonda) {
            sonda.push(newRegister);
        } else {
            this.sondas.set(parsedId, [newRegister]);
        }
        return sonda ? sonda : this.sondas.get(parsedId);
    }

    async getAll() {
        return Array.from(this.sondas.values());
    }

    async getById(id) {
        const parsedId = JSON.stringify(id);
        if (!this.sondas.has(parsedId)) {
            throw Error("Provided sonda does not exist.");
        }
        return this.sondas.get(parsedId);
    }
}

export default Sonda;
