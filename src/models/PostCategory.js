module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
       postId: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true, 
       },
       categoryId: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
       },
     }, {
       underscored: true,
       timestamps: false,
       tableName: 'posts_categories',
     });
 
     PostCategory.associate = ({ BlogPost, Category }) => {
       Category.belongsToMany(BlogPost, {
         as: 'blogPosts',
         through: PostCategory,
         foreignKey: 'postId',
         otherKey: 'categoryId',
       });
 
       BlogPost.belongsToMany(Category, {
         as: 'categories',
         through: PostCategory,
         foreignKey: 'categoryId',
         otherKey: 'postId'
       });
     };
 
     return PostCategory;
   };