 import medCompaniesDal from "../dal/medCompanies-dal.js";

const getAll = async () => {
    return medCompaniesDal.getAll();
}



export {
    getAll,
}

