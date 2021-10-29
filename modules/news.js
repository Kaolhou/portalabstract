const database = require('./database')

const news = database.sequelize.define('news',{
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: database.Sequelize.INTEGER,
        allowNull: false,
    },
    destaque:{
        type: database.Sequelize.STRING(500),
        allowNull: false
    },
    titulo:{
        type: database.Sequelize.STRING(50),
        allowNull: false
    },
    cont: {
        type: database.Sequelize.STRING(5000),
        allowNull: false
    },
    imagem:{

    }

    
})

//news.sync({force:true})

module.exports = post