module.exports = function(app) {
    app.use('/api/appointment', require('../controllers/appointments'));
    app.use('/api/slots', require('../controllers/slots'));
};