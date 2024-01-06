import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database';
import Users from '../models/Users';

// models
const models = [Users]; // array de models

const connection = new Sequelize(databaseConfig); // conexão do Sequelize com o banco

models.forEach((model) => model.init(connection));
