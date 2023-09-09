const express = require('express');
const cors = require('cors');

class Server {


    constructor() {

        this.app = express();
        this.port = process.env.PORT;

        this.rutaClientes = '/api/clientes'


        this.middlewares();
        this.routes();

    }

    middlewares() {

        this.app.use(cors())

        this.app.use(express.json());

        this.app.use(express.static('public'));

    }

    routes() {
        this.app.use(this.rutaClientes, require('../routes/clientes.routes'))
    }

    listen() {


        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en el puerto", this.port)
        })
    }


}

module.exports = Server;