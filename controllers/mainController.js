const fs = require("fs");
const path = require("path");
const { locals } = require("../app");

const controller = {
index : (req, res)=> {
   return res.render("index", {title:"home",
   
})
},

session : (req, res)=> {
   const {name, color, email, edad, recordar, destroy} = req.body
 


  req.session.userLogin = {
   nombre: name,
   color: color,
   email: email,
   edad: edad,
}
res.locals.color = color;
res.locals = req.session.userLogin;
const locals = res.locals;

if (req.body.recordar) {
      res.cookie('color', res.locals, { maxAge: 1000000 * 60 })
   console.log(locals)
   return res.redirect("/"
   )


}},
destroy : (req, res)=> {
   res.clearCookie('color');
   req.session.destroy();
   return res.redirect('/');
}
}

module.exports = controller;