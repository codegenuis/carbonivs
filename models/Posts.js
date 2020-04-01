module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('posts', {
      blogid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      categoryz: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      blogtitlez: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      postz: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      postimg: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      youtubeidx: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
    },{
      tableName: 'blogdata',
      timestamps: false,
    });
    return User;
  };
  