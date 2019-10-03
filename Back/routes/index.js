const express = require('express');
const router = express.Router();
const PostCtrl = require('./post');

router.get('/post', PostCtrl.getPost);
router.post('/post', PostCtrl.postPost);
router.delete('/post', PostCtrl.deletePost);
router.put('/post', PostCtrl.updatePost);

module.exports = router;
