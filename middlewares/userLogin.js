module.exports = (req,res,next) => {
    if(req.session.userLogin){
        res.locals = req.session.userLogin
       
    }
    next()

}