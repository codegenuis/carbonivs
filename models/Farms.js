module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('farms', {
      farmerid: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      farmname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      farmlocation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      invest_amt: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      return_rate: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      tenor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      farmsize: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'end_date',
      },
      num_unit: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      unit_paid: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
       photoz: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descrptn: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.STRING,
        field: 'datereg',
      },
      registerby: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },{
      tableName: 'farmdata'
    });
    return User;
  };
  