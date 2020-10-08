const Transaction = require('../models/Transaction');

// GET /api/v1/transactions
exports.getTransactions = async (req, res, next) => {
    try {
        const trasactions = await Transaction.find();

        return res.status(200).json({
            success: true,
            count: trasactions.length,
            data: trasactions
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            data: 'Server error'
        });
    }
};

// POST /api/v1/transactions
exports.addTransaction = async (req, res, next) => {
    try {
        const transaction = await Transaction.create(req.body);
        return res.status(201).json({
            success: true,
            data: transaction
        });
    } catch (err) {
        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);

            return res.status(400).json({
                success: false,
                error: messages
            });

        } else {
            return res.status(500).json({
                success: false,
                data: 'Server error'
            });
        }
    }
};

// DELETE /api/v1/transactions/:id
exports.deleteTransaction = async (req, res, next) => {
    try {
        const id = req.params.id;
        const transaction = await Transaction.findById(id)

        if (!transaction) {
            return res.status(404).json({
                success: false,
                error: 'No transaction found'
            });
        }

        await transaction.remove();

        return res.status(200).json({
            success: true,
            data: transaction
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            data: 'Server error'
        });
    }
};
