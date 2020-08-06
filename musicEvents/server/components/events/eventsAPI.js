const controler = require('./eventsController');
const express = require('express')
const router = express.Router();

// GET
/*router.get('/',controler.getEvents);
router.get('/:eventId',controler.getEventsById);
router.get('/reservedTickets/:id',controler.getTicketsById);
*/
//PUT
//router.put('/',controler.createEvent); //kreiranje dogadjaja

// POST
//router.post('/deleteByInfo',controler.deleteByInfo); //ovo se brise
router.post('/eventForChange',controler.getEventForChange); //???
router.post('/tickedReservation/:id',controler.ticketReservation); //???


// PATCH
//router.patch('/:eventId',controler.updateEventById);


/******************* MARICA NOVO **************** */
//GET
router.get('/',controler.getEvents);
router.get('/:eventId',controler.getEventsById);
router.get('/reservedTickets/:id',controler.getTicketsById);
router.get('/',controler.getEventsAfterFilter);

//DELETE 
router.delete('/:eventId',controler.deleteEvent); //jos ne radi

//PUT - kreiranje dog
router.put('/',controler.createEvent);

// PATCH
router.patch('/:eventId',controler.updateEventById);


module.exports = router;
