import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database';

// models

const models = []; // array de models

const connection = new Sequelize(databaseConfig); // conexão do Sequelize com o banco

models.forEach((model) => model.init(connection));
