import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcrypt';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      username: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'This username already exists.',
        },
        validate: {
          len: {
            args: [3, 24],
            msg: 'Username must have between 3 or 24 characters',
          },
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
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 24],
            msg: 'Password must have between 3 or 24 characters',
          },
        },
      },
      level: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
    }, {
      sequelize,
    });
    this.addHook('beforeSave', async (user) => {
      user.password_hash = await bcrypt.hash(user.password, 8);
    });

    return this;
  }

  static associate(models) {
    this.hasMany(models.Request, { foreignKey: 'user_id' });
    this.hasOne(models.Images, { foreignKey: 'user_id' });
  }
}
