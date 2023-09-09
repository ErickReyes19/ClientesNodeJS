const { Router } = require('express')
const { getClientes,getClientesDepartamentos, getClientesPorDepartamento, postCliente } = require('../controllers/clientes.controller')

const router = Router();

router.get('/', getClientes);
router.post('/', postCliente);

router.get('/departamento', getClientesDepartamentos);
router.get('/iddepartamento', getClientesPorDepartamento);

module.exports = router;
