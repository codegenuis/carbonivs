module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_pass: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_login: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    referal_id: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '',
    },
    phonex: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '',
    },
    dobz: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '',
    },
    contactz: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '',
    },
    statez: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '',
    },
    proimgz: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '',
    },
    bankz: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '',
    },
    acctnum: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '',
    },
    sortcode: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '',
    },
    nextkin: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '',
    },
    kinrelation: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '',
    },
    kinphone: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '',
    },
    statusz: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '',
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'user_registered',
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'user_registered',
    },
  },{
    tableName: 'fp_users'
  });
  return User;
};
