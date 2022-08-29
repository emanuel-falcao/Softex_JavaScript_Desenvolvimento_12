import Sequelize from 'sequelize';

const sequelize = new Sequelize('meu_banco', 'emanuel', '666', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    await sequelize.authenticate();
    console.log('Conexão realizada com sucesso!');
} catch(erro) {
    console.log('Falha na conexão');
}

sequelize.close()