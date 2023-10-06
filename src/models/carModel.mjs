
import connection from '../database/db.mjs';

const userModel = {
  async buscarTodos() {
    const [car] = await connection.query('SELECT * FROM carros');
    return car;
  },

  async buscarCarroId(id) {
    const [car] = await connection.query('select * from carros where id = ?', [id]);
    return car;
  },

  async criarCarro(modelo, placa) {
    const [car] = await connection.query('insert into carros (id, fabricante, modelo, placa, ano, cor, precoMedio) values (?, ?, ?, ?, ?, ?)', [id, fabricante, modelo, placa, ano, cor, precoMedio]);
    return car;
  },

  async deleteCarro(id) {
    const [car] = await connection.query('delete from carros where id = ?', [id]);
    return car;
  },

  async modificarDados(id){
    const [car] = await connection.query('update carros set fabricante = ?, modelo = ?, placa = ?, ano = ?, cor = ?, precoMedio = ? where id = ?'[id, fabricante, modelo, placa, ano, cor, precoMedio]);
    return car;
  }
};

export default userModel;
