import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';

export const Compte = sequelize.define("Compte", {
    numero: {
        type: DataTypes.CHAR,
        primaryKey: true
    },
    typeCompte: {
        type:DataTypes.STRING,
        allowNull: false
    },
    solde: {
        type:DataTypes.DECIMAL,
        allowNull: false
    },
    devise: {
        type:DataTypes.STRING,
        allowNull: false
    },
    image: {
        type:DataTypes.STRING,
        allowNull: false
    }
}, {
    
    // model options
    timestamps: false
  })

  export default Compte