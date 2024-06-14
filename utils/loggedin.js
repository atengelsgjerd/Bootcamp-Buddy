const withEmail = (req, res, next) => {
  if (!req.session.loggedIn) {
    console.log("not logged in")
    res.redirect('/login');
  } else {
    console.log("logged in")
    next();
  }
};

module.exports = withEmail;