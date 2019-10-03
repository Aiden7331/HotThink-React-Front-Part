const models = require('../models');
const Sequelize = require('sequelize');

const getPost = (req, res) => {
    models.Post.findAll()
        .then(post => res.json(post))
};

const postPost = (req, res) => {
    // const {id, content, writer} = req.body;
    const {id, content, writer} = {id:1, content:'hello', writer: 'moon'};
    if (!id || !content || !writer) {
        return res.status(400).json({error: 'incorrect request'});
    }
    models.Post.create({
        id: id,
        content: content,
        writer: writer,
    }).catch(Sequelize.ValidationError, (err) => {
        res.status(400).json({error: 'duplicate value'});
    }).then((post) => res.status(201).json(post));
};

const deletePost = (req, res) => {
    // const { id } = req.body;
    const { id } = {id:1};
    if (!id) {
        return res.status(400).json({error: `incorrect request`});
    }
    models.Post.destroy({
        where: {
            id: id
        }
    }).then((result) => {
        if(result==0) {
            return res.status(400).json({error: 'no matching post'});
        }
        return res.status(200).json({message: `delete ${id}`});
    })
};

const updatePost = (req, res) => {
    // const { id, content } = req.body;
    const { id, content } = {id:1,content:'updated'};
    if (!id || !content) {
        return res.status(400).json({error: 'incorrect request'});
    }
    models.Post.update(
        { content: content},
            { where: {
                id: id
            }
        }
    ).then((result) => {
        if(result==0) {
            return res.status(400).json({error: 'no matching post'});
        }
        return res.status(200).json({message: 'update post content!'});
    })
};

module.exports = {
    getPost,
    postPost,
    deletePost,
    updatePost,
};
