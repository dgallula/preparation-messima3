import connection from '../db.js';

const getAll = async () => {
    let result = {
        success: false,
        data: null
    }

    try {
        let res = await connection.promise().query(
            'SELECT * FROM medCompanies'
        )

        result.success = true
        result.data = res[0]

        return result
    } catch (err) {
        result.success = false
        result.data = err

        return result
    }
}


const addMedicaments = async (name, weight,medCompanyId ) => {
    let result = {
        success: false,
        data: null
    }

    try {
        let res = await connection.promise().query(
            `INSERT INTO medicament (name, weight, medCompanyId)
            VALUES
            ('${name}','${weight}}','${medCompanyId});`
        )

        result.success = true
        result.data = res[0]
        return result
    } catch (err) {
        result.success = false
        result.data = err

        return result
    }
}

export default {
    getAll,
    addMedicaments
}