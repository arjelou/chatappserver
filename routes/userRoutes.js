const express = require('express');
const router = express.Router();
const controller = require('../controllers/userControllers');

router.get('/users',controller.getUserList)
// router.post('/addnew',controller.addProduct)
// router.delete('/product/:id',controller.deleteProduct)
// router.put('/update/:id',controller.updateProduct)

// MESSAGES 
router.get('/messages',controller.getMessages)
router.post('/messages',controller.sentMessage)
router.delete('/messages/:id',controller.deleteMessages)
router.put('/messages/:id',controller.updateMessages)

// SIGNUP ROUTES
router.post('/signup',controller.signupUser)

//LOGIN ROUTES
router.post('/login',controller.loginUser)

//QUOTATION ROUTES
// router.post('/quotation',controller.quotationUser)
// router.get('/allnotification',controller.getAllNotification)

//GET ALL CUSTOMER ROUTES
// router.get('/customer',controller.listOfCustomers)



module.exports = router;