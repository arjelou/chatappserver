// const product = require('../models/product').model;
const messagesList = require('../models/message').model;
const usersignup = require('../models/user').model;

//GET ALL Users EMAIL Address
exports.getUserList = async (req, res) => {
    const userList = await usersignup.findAll();
    res.send(userList); 
}

//GET MESSAGES
exports.getMessages = async (req, res) => {
    const messageList = await messagesList.findAll();
    res.send(messageList);
}
//ADD MESSAGES
exports.sentMessage = async (req, res, user) => {
    const addnewMessage = {
        messages: req.body.message,
        userId: req.body.userId
    }
    const postMessage = await messagesList.create(addnewMessage)
    res.send(postMessage);
}
//DELETE MESSAGES
exports.deleteMessages = async (req, res, user) => {
    await messagesList.destroy({
        where: {
            id: req.params.id
        }
    })
}
//UPDATE MESSAGES
exports.updateMessages = async (req, res) => {
    await messagesList.update({ 
        messages: req.body.usermessage,
    },     
        {
        where: {
            id: req.params.id
        }
    });
}

// NOT HASHING THE PASSWORD
exports.signupUser = async (req, res, user) => {
    const addnewUser = {
        email: req.body.email,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword,
    }
    const addnewUserSignup = await usersignup.create(addnewUser)
    res.send(addnewUserSignup);
}

//LOGIN USERS WITHOUT HASHING
exports.loginUser = async (req, res) => {
    const validateUsers = await usersignup.findOne({ 
        where: { 
            email: req.body.email,
            password: req.body.password
        }
     });
     validateUsers === null ?  res.send(validateUsers) : res.send(validateUsers)
}