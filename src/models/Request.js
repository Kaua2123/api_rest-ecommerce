import Sequelize, { Model } from 'sequelize';

export default class Request extends Model {
  static init(sequelize) {
    super.init({
      total_price: {
        type: Sequelize.FLOAT,
        defaultValue: 0.00,
      },
      status: {
        type: Sequelize.ENUM,
        values: ['Processing', 'Sent', 'Delivered'],
      },
      payment_method: {
        type: Sequelize.ENUM,
        values: ['Credit Card', 'Boleto payment', 'Pix'],
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id' });
  }
}
