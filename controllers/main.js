

exports.getInvoices = (req,res,next) => {

    res.status(200).json({
    
        invoices: [{date: 'date', refNum:'2323232'}]
    });

};

exports.postInvoices = (req,res,next) => {
const refnum = req.body.title;
const amount = req.body.amount


// create post

res.status(201).json({
    message: 'Post Successfully',
    invoices: { date: new Date().toISOString(), refNum: refnum, amt: amount}
});
};