const express = require('express');

const mainController = require('../controllers/main');

const router = express.Router();

router.get('/invoices', mainController.getInvoices);

router.post('/postInvoice', mainController.postInvoices);

module.exports = router;