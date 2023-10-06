import carModel from '../models/carModel.mjs';

const userController = {
    buscarTodos: async (req, res) => {
        const car = await carModel.buscarTodos();
        return res.status(200).json(car);
    },
    buscarCarroId: async(req, res) => {
        const id = req.params.id;
        const car = await carModel.buscarCarroId(id);
        return car;
    },
    criarCarro: async(req, res) => {
        const { modelo, marca, placa } = req.body;
        const car = await carModel.criarCarro()
    },
    deleteCarro: async(req, res) => {
        const id = req.params.id;
        const carro = await carModel.deleteCarro(id);
    },
    modificarDados: async(req, res) => {
        const id = req.params.id;
        const carro = await carModel.modificarDados(id);
    }
}

export default userController;
