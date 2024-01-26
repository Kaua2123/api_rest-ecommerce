import Sequelize, { Model } from 'sequelize';

export default class Product extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 24],
            msg: 'Product name must have between 3 or 24 characters',
          },
        },
      },
      description: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 200],
            msg: 'Description must have between 3 or 200 characters',
          },
        },
      },
      price: {
        type: Sequelize.FLOAT,
        defaultValue: 0.00,
        validate: {
          isFloat: {
            msg: 'Invalid value',
          },
        },
      },
      stock_quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        validate: {
          isInt: {
            msg: 'Invalid value',
          },
        },
      },
    }, {
      sequelize,
    });

    return this;
  }

  static associate(models) {
    this.hasOne(models.Images, { foreignKey: 'product_id' });
    // this.hasOne(models.User, { foreignKey: 'product_id' });
  }
}
