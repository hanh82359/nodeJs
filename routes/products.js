import express from 'express';

const router = express.Router();

router.get('/products',(req, res) =>{
    res.json([
        {
            id: 1,
            name: 'san pham 1'
        },
        {
            id: 2,
            name: 'san pham 2'
        }
    ])
});

// thêm sp
router.post('/products',(req, res) =>{
//    truy vân them sp
});

module.exports = router;
