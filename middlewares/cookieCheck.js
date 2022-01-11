module.exports = (req,res,next) =>{
    if(req.cookies.color){
        req.session.userLogin = req.cookies.color
    }
    next()
}