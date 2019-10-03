module.exports = (sequelize,DataTypes) => {
    const Post = sequelize.define('Post', {
        id:{
            type: DataTypes.INTEGER,//매우 긴 글
            allowNull: false,
            unique:true,
            primaryKey:true,
        },
        content:{
            type: DataTypes.TEXT,//매우 긴 글
            allowNull: false,
        },
        writer:{
            type: DataTypes.STRING(255),//매우 긴 글
            allowNull: false,
        },
    }, {
        charset :'utf8mb4',
        collate : 'utf8mb4_general_ci',
    });

    //ERD
    Post.associate = (db) => {

    };

    return Post;
};