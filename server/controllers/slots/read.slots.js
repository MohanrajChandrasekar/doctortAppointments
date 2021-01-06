const slotModel = require('../../models/slots.schema');
const httpErrors = require('http-errors');

const getSlots = async (req, res) => {
    try {
        const slotDate = new Date();
        const result = await slotModel.find({ "slotDate": new Date(slotDate.setHours(0, 0, 0, 0)) });
        res.send({ status: 200, data: result });
    } catch(err) {
        console.log(err);
        res.send(httpErrors.InternalServerError());
    }
};

module.exports = { getSlots };