module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER
        },
        displayName: {
            allowNull:false,
            type:DataTypes.STRING
        },
        email: {
            allowNull:false,
            type:DataTypes.STRING
        },
        password: {
            allowNull:false,
            type:DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING,
        },
        }, {
            timestamps: false,
            tableName: 'users',
            underscored: true,
        }
    );

    User.associate = (models) => {
        User.hasMany(models.BlogPost, { foreignKey: 'user_id', as: 'blogPosts' });
    };

    return User;
};