import Sequelize, { Model } from 'sequelize';

export default class Users extends Model {
  static init(sequelize) {
    super.init({
      username: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'This username already exists.',
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'This email already exists.',
        },
        validate: {
          isEmail: {
            msg: 'Invalid email.',
          },
        },
      },
      password: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
    }, {
      sequelize,
    });
  }
}
