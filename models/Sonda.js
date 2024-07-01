class Sonda {
    // Uso mapa para hacer una busqueda mas eficaz
    sondas = new Map();

    async create(data) {
        const time = new Date();
        const timestamp = `${time.getDay()}/${time.getMonth()}/${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}`;
        const newSonda = {...data, timestamp};
        this.sondas.set(JSON.stringify(newSonda.id), newSonda);
        return newSonda;
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

    async sondaExists(id) {
        return this.sondas.has(JSON.stringify(id));
    }
}

export default Sonda;
