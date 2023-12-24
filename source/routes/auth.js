const express = require('express');
const router  = express.Router();

const auth    = require('../controller.js/auth');

router.post ('/login', async (req, res)=>{
    try{
        const result = await auth.login();
        res.send(result);
    } catch (e) {
        console.log(e);
    }
})

router.get ('/logout', async (req, res)=>{
    try{
        const result = await auth.logout();
        res.send(result);
    } catch (e) {
        console.log(e);
    }
})

module.exports = router;