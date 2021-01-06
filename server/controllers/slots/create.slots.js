const slotModel = require('../../models/slots.schema');
const httpError = require('http-errors');

const addNewSlots = async (req, res) => {
    try {
        let replacements = req.body;
        let slotdate = new Date(replacements.slotDate);
        replacements.slotDate = new Date(slotdate.setHours(0, 0, 0, 0));
        const startDateTime = new Date(slotdate.getFullYear(), slotdate.getMonth() + 1, slotdate.getDate(), replacements.startTime.hour, replacements.startTime.minute, 0);
        const endDateTime = new Date(slotdate.getFullYear(), slotdate.getMonth() + 1, slotdate.getDate(), replacements.endTime.hour, replacements.endTime.minute, 0);
        replacements.slots = [{
            startTime: {
                hh: replacements.startTime.hour,
                mm: replacements.startTime.minute,
                datetime: startDateTime
            },
            endTime: {
                hh: replacements.endTime.hour,
                mm: replacements.endTime.minute,
                datetime: endDateTime
            }
        }];

        console.log(replacements);

        const isExist = await slotModel.findOne({ slotDate: replacements.slotDate });
        if (isExist) {
            if (isExist.slotSession === replacements.slotSession) {
                const isSlotExist = isExist.slots.find(x => {
                    return x.startTime.datetime <= startDateTime && x.endTime.datetime >= endDateTime;
                });
                if (isSlotExist) {
                    res.send({ status: 409, message: 'Already exist!'});
                } else {
                    const update = await slotModel.update({ slotDate: replacements.slotDate, slotSession: replacements.slotSession }, {
                        $push: {
                            slot: replacements.slots[0]
                        }
                    });
                    res.send({ status: 200, message: 'Saved Successfully!'});
                }
            } else {
                const slot = new slotModel(replacements);
                const result = await slot.save();
                console.log(result);
                res.send({ status: 200, message: 'Saved Successfully!' });  
            }
        } else {
            const slot = new slotModel(replacements);
            const result = await slot.save();
            console.log(result);
            res.send({ status: 200, message: 'Saved Successfully!' }); 
        }

    } catch (err) {
        console.log(err);
        res.send(httpError.InternalServerError());
    }
};

module.exports = { addNewSlots };