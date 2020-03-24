module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('withdrawal', {
      investid: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      investorid: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fulnamez: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      farmname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      amountrequest: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      daterequest: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      amountpaid: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: '',
      },
      datepaid: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: '',
      },
      paidby: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: '',
      },
      paidref: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: '',
      },
    },{
      tableName: 'withdrawalz',
      timestamps: false,
    });
    return User;
  };
  