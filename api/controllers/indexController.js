const User = require("../models/userModel");
const Blog = require("../models/blogModel");
const { sendToken } = require("../utils/auth");
const nodemailer = require("nodemailer");
const formidable = require("formidable");
const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "dhanesh-cloudinary",
  api_key: "176257529696164",
  api_secret: "FsvsmtHChA4V5HJXdYSuMzzRwSg",
  secure: true,
});

exports.homepage = (req, res, next) => {
  res.json({ message: "This is homepage...", user: req.user });
};

exports.currentuser = async (req, res) => {
  res.status(200).json({ user: req.user });
};

exports.signup = async (req, res, next) => {
  try {
    let user = await User.findOne({ email: req.body.email })
      .select("+password")
      .exec();
    if (user) {
      const matchpassword = user.comparepassword(req.body.password);
      if (!matchpassword) {
        return res.status(500).json({ message: "wrong credientials" });
      }
      sendToken(user, req, res, 200);
      return;
    }
    const newUser = new User(req.body);
    user = await newUser.save();
    sendToken(user, req, res, 200);
  } catch (error) {
    res.status(501).json({ message: error.message });
  }
  // res.json({})
};

exports.getusers = async (req, res, next) => {
  try {
    const users = await User.find({}).exec();
    res.status(200).json({ users });
  } catch (error) {
    res.status(501).json({ message: error.message });
  }
  // res.json({})
};

exports.updateprofile = async (req, res, next) => {
  try {
    const user = await User.findOneAndUpdate({ _id: req.user._id }, req.body, {
      new: true,
    }).exec();
    res.status(200).json({ user });
  } catch (error) {
    res.status(501).json({ message: error.message });
  }
  // res.json({})
};

exports.signout = (req, res, next) => {
  res.clearCookie("token");
  res.status(200).json({ message: "logged out sexsexfully" });
};

exports.sendmail = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email }).exec();
    if (!user) {
      return res.status(404).json({ message: "user not found." });
    }
    const pageurl =
      req.protocol + "://" + req.get("host") + "/forget-password/" + user._id;
    // res.status(200).json({ message: pageurl });

    const transport = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        user: "dhanesh1296@gmail.com",
        pass: "rriexnwtxmiwexld",
      },
    });

    const mailOptions = {
      from: "Dhanesh Pvt. Ltd.<dhanesh1296@gmail.com>",
      to: req.body.email,
      subject: "Password Reset Link",
      text: "Do not share this link to anyone.",
      html: `<a href=${pageurl}>Password Reset Link</a>`,
    };

    transport.sendMail(mailOptions, async (err, info) => {
      if (err) return res.status(500).json({ message: err });
      // console.log(info);
      await User.findByIdAndUpdate(user._id, { passwordResetToken: 1 });
      res.status(200).json({
        message: "Email sent! check inbox/spam",
      });
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.forgetpassword = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select("+password").exec();
    if (user.passwordResetToken === 1) {
      user.passwordResetToken = 0;
      user.password = req.body.password;
      await user.save();
      res.status(200).json({ message: "password changed!" });
    } else {
      res.status(500).json({ message: "link expired! try again" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.upload = async (req, res) => {
  try {
    const form = formidable();
    form.parse(req, async (err, fields, files) => {
      if (err) return res.status(500).json({ message: err });
      const user = await User.findById(req.user._id).exec();
      if (files) {
        const { public_id, secure_url } = await cloudinary.v2.uploader.upload(
          files.image.filepath,
          {
            folder: "editor",
            width: 1920,
            crop: "scale",
          }
        );
        user.avatar = { public_id, url: secure_url };
        await user.save();
        res.status(200).json({ message: "Image Uploaded" });
      } else {
        res.status(500).json({ message: "No file uploaded" });
      }
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.createstories = async (req, res) => {
  try {
    const blog = new Blog({ ...req.body, author: req.user._id });
    await req.user.stories.push(blog._id);
    await blog.save();
    await req.user.save();
    res.status(201).json({ message: "blog posted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

exports.blogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate("author").exec();
    res.status(200).json({ message: "all blogs", blogs });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.singlestories = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id).populate("author").exec();
    res.status(200).json({ message: "blog", blog });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.showstories = async (req, res) => {
  try {
    const { stories } = await User.findById(req.user._id)
      .populate("stories")
      .exec();
    console.log(stories);
    res.status(201).json({ message: "user blogs", stories });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.deletestories = async (req, res) => {
  try {
    const { id } = req.params;
    await Blog.findByIdAndDelete(id).exec();
    await User.findByIdAndUpdate(req.user._id, {
      $pull: { stories: id },
    }).exec();
    res.status(200).json({ message: "blog deleted" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.updatestories = async (req, res) => {
  try {
    const { id } = req.params;
    await Blog.findByIdAndUpdate({ _id: id }, req.body).exec();
    res.status(200).json({ message: "blog updated" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.likestories = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id).exec();
    if (!blog.likes.includes(req.user._id)) {
      blog.likes.push(req.user._id);
      await blog.save();
      res.status(200).json({ message: "blog liked", likes: blog.likes });
    } else {
      const likeIndex = blog.likes.findIndex(
        (like) => like._id === req.user._id
      );
      blog.likes.splice(likeIndex, 1);
      await blog.save();
      res.status(200).json({ message: "blog unliked", likes: blog.likes });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.followunfollow = async (req, res) => {
  const user = await User.findById(req.user._id).exec();
  const followUser = await User.findById(req.params.id).exec();
  var index = user.following.indexOf(followUser._id);
  if (index === -1) {
    user.following.push(followUser._id);
    followUser.followers.push(user._id);
  } else {
    user.following.splice(index, 1);
    followUser.followers.splice(index, 1);
  }
  await user.save();
  await followUser.save();
  res.status(200).json({
    status: "success",
    message: "successfully Done",
    following: user.following,
  });
};

exports.listblog = async (req, res) => {
  try {
    const { blogid } = req.params;
    if (!req.user.lists.includes(blogid)) {
      req.user.lists.push(blogid);
      await req.user.save();
      res.status(200).json({ message: "blog saved to user list" });
    } else {
      const blogIndex = req.user.lists.findIndex((blog) => blog._id === blogid);
      req.user.lists.splice(blogIndex, 1);
      await req.user.save();
      res.status(200).json({ message: "blog unsaved from user list" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.uploadBlog = async (req, res) => {
  try {
    const form = formidable();
    form.parse(req, async (err, fields, files) => {
      if (err) return res.status(500).json({ message: err });
      if (files) {
        console.log(files);
        const { public_id, secure_url } = await cloudinary.v2.uploader.upload(
          files.blog.filepath,
          {
            folder: "editorblog",
            width: 1920,
            crop: "scale",
          }
        );

        res.status(200).json({
          success: 1,
          file: {
            url: secure_url,
          },
        });
      } else {
        res.status(500).json({ message: "No file uploaded" });
      }
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.singleUser = async (req, res) => {
  const user = await User.findOne({ username: req.params.username }).populate(
    "stories"
  );
  res.status(200).json({ user: user });
};
