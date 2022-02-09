const Joi =require('joi');

const schema = Joi.object({
    username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),

});
console.log( schema.validate({username:'abckjkljl', age:'25'}));