// const { genSaltSync, hashSync,compareSync } = require("bcrypt")
const jwt  = require("jsonwebtoken")
const secret = "key12wert09876tk87uygvwdiujdiujfcd87aoiuytreadsfcgghbjkklkjhgfrtyuimnbvcnbvc"
module.exports.middleware = (req,res,next)=>{
    let token = req.get('authorization')
    if(!token){
        return res.status(401).send({error:"authorization error"})
    }else if(token){
        jwt.verify(token.slice(7),secret, async (err,user)=>{
            if(user){
                req.user = user
                next()
            }else{
                return res.status(401).send({error:"authorization error"})
              }
        })
     
    }

}