import medicamentsDal from "../dal/medicaments-dal.js";

const getAll = async () => {
    return medicamentsDal.getAll();
}


const addMedicaments = async (body) => {
    return await customersDal.addMedicaments(
        body.name, body.weight, body.medCompanyId)
}

export {
    getAll,
    addMedicaments
}