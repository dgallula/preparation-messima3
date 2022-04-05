 import medCompaniesDal from "../dal/medCompanies-dal.js";
 import medicamentsDal from "../dal/medicaments-dal.js";

const getAll1 = async () => {
    return medCompaniesDal.getAll1();
}


const getAll2 = async () => {
    return medicamentsDal.getAll2();
}



export {
    getAll1,
    getAll2
}

