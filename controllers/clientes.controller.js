
const { request, response } = require('express');
const sqlConfig = require('../config/db_config');
const sql = require('mssql')


const getClientes = async (req = request, res = response) => {

    try {
        
        const result = await sql.connect(sqlConfig).then(pool => {
            return pool.request()
                .execute('TraerClientes');
        })

        

        if (result.recordset.length === 0) {
            return res.status(404).json({
                msg: 'Lista Vacia'
            })
        }

        return res.status(200).json({
            clientes: result.recordset
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Error en el servidor'
        })

    }

}

const getClientesDepartamentos = async (req = request, res = response) => {

    try {
        const result = await sql.connect(sqlConfig).then(pool => {
            return pool.request()
                .execute('TraerClienteDepartamento');
        })

        if (result.recordset.length === 0) {
            return res.status(404).json({
                msg: 'Lista Vacia'
            })
        }

        return res.status(200).json({
            clientes: result.recordset
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Error en el servidor'
        })

    }

}

const getClientesPorDepartamento = async (req = request, res = response) => {

    const { IdDepartamento } = req.body


    try {
        const result = await sql.connect(sqlConfig).then(pool => {
            return pool.request()
                .input('IdDepartamento', sql.Int, IdDepartamento)
                .execute('TraerClientePorDepartamento');
        })

        if (result.recordset.length === 0) {
            return res.status(404).json({
                msg: 'Lista Vacia'
            })
        }

        return res.status(200).json({
            clientes: result.recordset
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Error en el servidor'
        })

    }

}

const postCliente = async (req = request, res = response) => {

    const { Nombre, Direccion, Edad, IdDepartamento } = req.body


    try {
        const result = await sql.connect(sqlConfig).then(pool => {
            return pool.request()
                .input('Nombre', sql.VarChar(50), Nombre)
                .input('Direccion', sql.VarChar(50), Direccion)
                .input('Edad', sql.VarChar(50), Edad)
                .input('IdDepartamento', sql.Int, IdDepartamento)
                .execute('CrearCliente');
        })

        return res.status(200).json({
            msg: 'Cliente creado con exito'
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Error en el servidor'
        })

    }

}

module.exports = {
    getClientes,
    getClientesDepartamentos,
    getClientesPorDepartamento,
    postCliente
}


