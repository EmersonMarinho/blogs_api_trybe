module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        id: {
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER
        },
        title: {
            allowNull:false,
            type: DataTypes.STRING,
        },
        content: {
            allowNull:false,
            type: DataTypes.STRING,
        },
        userId: {
            allowNull:false,
            type: DataTypes.INTEGER,
            foreignKey: true,
        },
        published: {
            allowNull:false,
            type: DataTypes.DATE,
        },
        updated: {
            allowNull:false,
            type: DataTypes.DATE,
        }
    }, {
        tableName: 'blog_posts',
        timestamps: false,
        underscored: true,
    });
    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User, {
            foreignKey: 'user_id',
            as: 'user',
        });
    }
    return BlogPost;
};