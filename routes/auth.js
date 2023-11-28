import express from 'express';
import { requireSignin } from "../middlewares";
import {
    register, login, emailVerify,
    currentUser, sendLink, resetPassword,
    profileUpdate,findPeople,userFollow,addFollower,userFollowing,userFollowers,removeFollower,userUnfollow,
    searchUser,getUser,
    
    
} from '../controllers/auth';


const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get(`/users/:_id/verify/:emailToken`, emailVerify);
router.get("/current-user", requireSignin, currentUser);
router.post('/sendpasswordlink', sendLink);
// router.get('/reset-password/:_id/:passwordToken',validUser);
router.post('/:_id/:passwordToken', resetPassword);
router.put(`/profile-update`,requireSignin,profileUpdate);
router.get("/find-people",requireSignin,findPeople);
router.put("/user-follow",requireSignin,addFollower,userFollow);
router.put("/user-unfollow",requireSignin,removeFollower,userUnfollow);
router.get('/user-following',requireSignin,userFollowing);
router.get('/user-followers',requireSignin,userFollowers);
router.get('/search-user/:query',searchUser);
router.get('/user/:username',getUser)



module.exports = router;