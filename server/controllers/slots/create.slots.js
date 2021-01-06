const slotModel = require('../../models/slots.schema');
const httpError = require('http-errors');

const addNewSlots = async (req, res) => {
    try {
        let replacements = req.body;
        let slotdate = new Date(replacements.slotDate);
        replacements.slotDate = new Date(slotdate.setHours(0, 0, 0, 0));
        const inStartTime = new Date(slotdate.getFullYear(), slotdate.getMonth(), slotdate.getDate(), replacements.startTime.hour, replacements.startTime.minute, 0);
        const inEndTime = new Date(slotdate.getFullYear(), slotdate.getMonth(), slotdate.getDate(), replacements.endTime.hour, replacements.endTime.minute, 0);
        replacements.slots = [{
            startTime: {
                hh: replacements.startTime.hour,
                mm: replacements.startTime.minute,
                datetime: inStartTime
            },
            endTime: {
                hh: replacements.endTime.hour,
                mm: replacements.endTime.minute,
                datetime: inEndTime
            }
        }];

        const isExist = await slotModel.findOne({ 'slotDate': replacements.slotDate, 'isActive': true });
        if (isExist) {
            if (isExist.slotSession === replacements.slotSession) {
                console.log(isExist.slots[0]); 
                const isSlotExist = isExist.slots.find( dt => { // inStartTime, inEndTime
                    if ((inStartTime >= dt.startTime.datetme && inStartTime <= dt.endTime.datetime) ||
                        (inEndTime >= dt.startTime.datetime && inEndTime <= dt.endTime.datetime)){
                            return dt;
                    }
                });
                console.log(isSlotExist);
                if (isSlotExist) {
                    res.send({ status: 409, message: 'Already exist!'});
                } else {
                    const update = await slotModel.updateOne({ slotDate: replacements.slotDate, slotSession: replacements.slotSession }, {
                        $push: {
                            slots: replacements.slots[0]
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