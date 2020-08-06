const mongoose = require('mongoose');

const ticketReservationSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId : mongoose.Schema.Types.ObjectId,
    event : {
        type : Map,
        require : true
    }
});


module.exports = mongoose.model('reservedTickets',ticketReservationSchema);