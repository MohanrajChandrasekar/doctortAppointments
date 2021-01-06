

const getSlots = async (req, res) => {
    try {
        res.send('Welcome to slots..');
    } catch(err) {
        console.log(err);
    }
};

module.exports = { getSlots };