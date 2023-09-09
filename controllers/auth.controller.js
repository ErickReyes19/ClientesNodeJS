
const { request, response } = require('express')
const sql = require('mssql')
const sqlConfig = require('../config/db_config')

const login = async (req = request, res = response) => {

    try {



    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Ocurrio un error en el servidor, contacte con soporte tecnico'
        })
    }

}

module.exports = {
    login
}