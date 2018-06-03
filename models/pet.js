module.exports = function(sequelize, DataTypes) {
    var Pet = sequelize.define("Pet", {
        pet_type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
       pet_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      pet_age: {
        type: DataTypes.INTEGER,
        allowNull: true,
        
      },
      pet_birthday: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      
      },
      fur_color: {
        type: DataTypes.STRING,
        allowNull: true,
  
      },
      fave_nap: {
        type: DataTypes.STRING,
        allowNull: true,
  
      },
      fave_food: {
        type: DataTypes.STRING,
        allowNull: true,
  
      },
      fave_toy: {
        type: DataTypes.STRING,
        allowNull: true,
  
      },
      fave_scratch: {
        type: DataTypes.STRING,
        allowNull: true,
  
      },
      fave_walk: {
        type: DataTypes.STRING,
        allowNull: true,
  
      },
      fave_window: {
        type: DataTypes.STRING,
        allowNull: true,
  
      },
      fave_feature: {
        type: DataTypes.STRING,
        allowNull: true,
  
      },
      bowl_empty: {
        type: DataTypes.STRING,
        allowNull: true,
  
      }

    });

    Pet.associate = function(models) {
        Pet.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Pet;
  };