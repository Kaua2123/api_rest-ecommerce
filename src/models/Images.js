import Sequelize, { Model } from 'sequelize';

export default class Images extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Products, { foreignKey: 'product_id ' });
    this.belongsTo(models.User, { foreignKey: 'user_id ' });
  }
}
