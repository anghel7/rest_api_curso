module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorial", {
    nombre: {
      type: Sequelize.STRING
    },
    descripcion: {
      type: Sequelize.STRING
    },
    imgUrl: {
      type: Sequelize.STRING
    }
  });

  return Tutorial;
};
