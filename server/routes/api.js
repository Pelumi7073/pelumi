const express = require('express');
const router = express.Router();

router.get('/friends', (req, res)=>{
    res.send([{f1:'johson'},{f2:'ezekiel'},{f3:'bolu'},{f4:'habeeb'}])
})

router.post('/friends', (req, res)=>{
    res.send({f1:'johson'},{f2:'ezekiel'},{f3:'bolu'},{f4:'habeeb'})
})

router.put('/friends', (req, res)=>{
    res.send({f1:'johson'},{f2:'ezekiel'},{f3:'bolu'},{f4:'habeeb'})
})

router.delete('/friends', (req, res)=>{
    res.send({f1:'johson'},{f2:'ezekiel'},{f3:'bolu'},{f4:'habeeb'})
})

module.exports = router