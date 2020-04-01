module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('otp', {
      user_email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },
    },{
      tableName: 'otpz'
    });
    return User;
  };
  