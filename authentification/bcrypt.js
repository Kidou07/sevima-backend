const bcrypt=require('bcryptjs')

function hashpassword(password){
    const salt=bcrypt.genSaltSync(5)
    return bcrypt.hashSync(password, salt)
}
function compare(password, hash){
    return bcrypt.compareSync(password,hash)
}
module.exports={compare, hashpassword};