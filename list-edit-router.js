const express = require('express');
const router = express.Router();
const { validatePostData } = require('./listEditMiddleware');

router.use(validatePostData)
router.post('/create-task',function (req,res)  {res.send("creado")});
router.put('/update-task/:id', function(req,res) {res.send("actualizado")});



module.exports = router;
