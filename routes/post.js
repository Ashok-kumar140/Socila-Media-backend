import express from 'express';
import formidable from 'express-formidable';

import { requireSignin,canEditDeletePost } from "../middlewares";
import { createPost, uploadImage, postByUser,userPost,updatePost,deletePost,newsFeed,unlikePost,likePost,removeComment,addComment,posts,getPost } from '../controllers/post';


const router = express.Router();

router.post('/create-post', requireSignin, createPost);
router.post('/upload-image', requireSignin, formidable({ maxFileSize: 5 * 1024 * 1024 }), uploadImage);
router.get('/user-posts', requireSignin, postByUser);
router.get('/user-post/:_id', requireSignin, userPost);
router.put("/update-post/:_id",requireSignin,canEditDeletePost,updatePost);
router.delete(`/delete-post/:_id`,requireSignin,canEditDeletePost,deletePost);
router.get('/news-feed', requireSignin, newsFeed);

router.put('/like-post',requireSignin,likePost);
router.put('/unlike-post',requireSignin,unlikePost);
router.put('/add-comment',requireSignin,addComment);
router.put('/remove-comment',requireSignin,removeComment);
router.get('/posts',posts);
router.get('/user/post/:username',getPost)



module.exports = router;