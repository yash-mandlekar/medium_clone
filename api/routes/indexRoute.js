const express = require("express");
const router = express.Router();
const {
  homepage,
  signup,
  signout,
  sendmail,
  forgetpassword,
  upload,
  createstories,
  blogs,
  showstories,
  listblog,
  currentuser,
  uploadBlog,
  singleUser,
  deletestories,
  updatestories,
  likestories,
  updateprofile,
  singlestories,
  getusers,
  followunfollow
} = require("../controllers/indexController");
const { isLoggedIn } = require("../utils/auth");

router.get("/", isLoggedIn, homepage);
// router.route("/").get(homepage);

router.get("/loaduser", isLoggedIn, currentuser);

// post /signup - create user
router.post("/signup", signup);

// get /users - create user
router.get("/users", getusers);

// post /signup - create user
router.put("/update-profile",isLoggedIn, updateprofile);

// get /signout - logout user
router.get("/signout", isLoggedIn, signout);

// /reset-password

// get /send-mail - logout user
router.get("/send-mail", sendmail);

// get /forget-password - send mail
router.get("/forget-password/:id", forgetpassword);

// get /upload - upload image
router.get("/upload", isLoggedIn, upload);

// /delete-upload

// cloudinary.uploader.destroy('zombie', function(result) { console.log(result) });

// -------------------------------------------------------------
// get /create-blog - create bloge
router.post("/create-stories", isLoggedIn, createstories);

// get /show-stories - show all blogs of user
router.get("/single-stories/:id", isLoggedIn, singlestories);

// get /show-stories - show all blogs of user
router.get("/show-stories", isLoggedIn, showstories);

// get /delete-stories - delete blog of user
router.get("/delete-stories/:id", isLoggedIn, deletestories);

// put /update-stories - update blog of user
router.put("/update-stories/:id", isLoggedIn, updatestories);

// get /like/:id - update blog of user
router.get("/like/:id", isLoggedIn, likestories);

// @api /user/followUnfollow POST follow user
router.get("/followUnfollow/:id", isLoggedIn, followunfollow);

// get /singleuser/:username - show all blogs of user
router.get("/singleuser/:username", singleUser);

// get /blogs - show all blogs
router.get("/blogs", blogs);

// get /save/:blogid - save the blog to list of the user
router.get("/list/:blogid", isLoggedIn, listblog);

// post /uploadBlog - save the blog to image to cloudinary
router.post("/uploadBlog", uploadBlog);

module.exports = router;
