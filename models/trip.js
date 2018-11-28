module.exports = function(sequelize, DataTypes) {
    var Trip = sequelize.define("Trip", {
      destination: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      // notes from the user (requester)
      remark: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },
      start_date: {
        type: DataTypes.DATE,
        allowNull: false
      }, 
      // end date can be null
      end_date: {
        type: DataTypes.DATE
      },
      //requested_by and matched_host this info will be generated by data and not hard-coded in
      // the user who created the trip record (requester)
      // requested_by: {
      //   type: DataTypes.STRING,
      // },
      // // the one who accept the touring offer (responsor)
      // matched_host: {
      //   type: DataTypes.STRING,
      // },
      trip_interests: {
        type: DataTypes.TEXT,
      }
      });
  
    Trip.associate = function(models) {
      // We're saying that a Trip should belong to an User
      // A Trip can't be created without an User due to the foreign key constraint
      Trip.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Trip;
  };
  
