const mongoose = require('mongoose');

const TransactionInfoSchema = new mongoose.Schema({
    transactionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transaction',
        required: true
    },
    info: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['En revision', 'Retenido', 'Aprobado'],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('TransactionInfo', TransactionInfoSchema);
