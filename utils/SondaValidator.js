const ID_MIN = 1;
const ID_MAX = 5;

const TEMP_MIN = -20;
const TEMP_MAX = 100;

// Retorna true is es invalido, caso contrario retorna false
export const validateId = (id) => {
    if (!isNumber(id)) {
        return true;
    }
    return id < ID_MIN || id > ID_MAX;
}

export const validateTemp = (temp) => {
    if (!isNumber(temp)) {
        return true;
    }
    return temp < TEMP_MIN || temp > TEMP_MAX;
}

const isNumber = (id) => {
    return typeof id === 'number' || (typeof id === 'string' && !isNaN(Number(id)));
}
