module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define('messages', {
      msgtitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      senderx: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      msgbody: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sendto: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      datesent: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      statuz: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sentby: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },{
      tableName: 'dmessage',
      timestamps: false,
    });
    return Message;
  };
  