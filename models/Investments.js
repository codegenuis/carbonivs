module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('investment', {
      farmid: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      farmname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      numunit: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      unitcost: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      roiperunit: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      suminvest: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      sumroi: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      payoutx: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      userfname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userlname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
       useremailx: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      investdate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE
      },
      transacref: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      paymode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      statuz: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },{
      tableName: 'investbs'
    });
    return User;
  };
  