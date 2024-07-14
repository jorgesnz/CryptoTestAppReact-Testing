const mongoose = require('mongoose');

const assetSchema = new mongoose.Schema({
    symbol: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    marketCap: { type: Number },
    price: { type: Number },
    volume: { type: Number },
    change: { type: Number },
    timestamp: { type: Date, default: Date.now }
});

const Asset = mongoose.model('Asset', assetSchema);
module.exports = Asset;
