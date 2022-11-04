var passport = require('passport');
var LocalStrategy = require('passport-local');
var crypto = require('crypto');
const UserDetails = require('../models/userDetails');

const getHome = (req, res) => {
  res.render('index', { title: 'Home' });
};

const getRegister = (req, res) => {
  res.render('register', { title: 'Register' });
};

const getLogin = (req, res) => {
  res.render('login', { title: 'Login' });
};

const postLogin = (req, res) => {
  console.log(req.user);
}

const postReg = (req, res) => {
  console.log(req.user);
  UserDetails.register({username: req.body.username, active: false}, req.body.password);
  res.redirect('/login');
}

const getDashboard = (req, res) =>{
  res.render('dashboard', { title: 'Dashboard' })
}

const logOut = (req, res)=>{
  req.logout(()=>{
  console.log("Logging out!")
  });
  res.redirect('/');
}



module.exports = { getHome, getLogin, postLogin, getDashboard, logOut, getRegister, postReg};
