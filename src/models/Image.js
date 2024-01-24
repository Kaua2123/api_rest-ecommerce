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
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `http://localhost:3001/images/${this.getDataValue('filename')}`;
        },
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Product, { foreignKey: 'product_id ' });
    this.belongsTo(models.User, { foreignKey: 'user_id ' });
  }
}
