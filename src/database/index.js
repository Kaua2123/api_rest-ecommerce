import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../models/User';
import Product from '../models/Product';
import Request from '../models/Request';
import Images from '../models/Images';

// models
const models = [User, Product, Request, Images]; // array de models

const connection = new Sequelize(databaseConfig); // conexão do Sequelize com o banco

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
