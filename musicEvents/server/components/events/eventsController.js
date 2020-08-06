const mongoose = require('mongoose');
const Events = require('./eventsModel');
const ticketReservationModel = require('./tickedReservationModel')


module.exports.getEvents = async function (req, res, next){
  try{
    const events = await Events.find({}).exec();
    res.status(200).json(events);
  }catch (err){
    next(err);
  }
};

module.exports.getEventsAfterFilter = async function(req,res,next)
{
  const event = await Events.find({
    "vrstaMuzike": req.body.vrstaMuzike,
    "vrstaDogadjaja": req.body.vrstaDogadjaja,
    "slobodanUlaz": req.body.slobodanUlaz}).exec();

   if(event)
   {
     res.status(200);
     res.json(event);
   }else
   {
     res.status(400);
     res.json({message : "Ne postoji ni jedan dogadjaj!"});

   } 
};

module.exports.getEventsById = async function (req, res, next){
  const eventId = req.params.eventId;

  try{
    const event = await Events.findById(eventId).exec();
    if(event){
      res.status(200);
      res.json(event);
    }else{
      res.status(404);
      res.json({message : "Ne postoji dogadjaj!"});
    }
  }catch(err){
    next(err);
  }
};

module.exports.getEventForChange = async function (req,res,next){
  try{
    const event = await Events.findOne({"nazivDog":req.body.nazivDog , "adresa":req.body.adresa, "datum":req.body.datum})
    if(event){
      console.log(event);
      res.status(200).json(event);
    }else{
      res.status(404).send();
    }
  }catch(err){
    next(err);
  }
}

module.exports.createEvent = async function (req, res, next){
  const eventObj = {
    _id: new mongoose.Types.ObjectId(),
    nazivDog: req.body.nazivDog,
    adresa: req.body.adresa,
    datum: req.body.datum,
    vrstaMuzike: req.body.vrstaMuzike,
    slobodanUlaz: req.body.slobodan_ulaz,
    cena: req.body.cena,
    vrstaDogadjaja: req.body.vrstaDogadjaja,
    izvodjac: req.body.izvodjac,
    kapacitet: req.body.kapacitet,
    detalji: req.body.detalji
  };

  const newEvent = new Events(eventObj);

  try{
    const savedEvent = await newEvent.save();
    res.status(201).json({message : "Dogadjaj je kreiran!" , events : savedEvent});
  }catch(err){
    next(err);
  }
};


module.exports.updateEventById = async function (req, res, next){

  const eventId = req.params.eventId;
  updateOptions = {};
  for(let i = 0; i < req.body.length;i++){

    let singleUpdate = req.body[i];
    updateOptions[singleUpdate.fieldName] = singleUpdate.newValue;
  }

  try{
    await Events.updateOne({_id : eventId},{$set : updateOptions}).exec();
    const updated = await Events.findById(eventId).exec();
    res.status(200).json({message : "Dogadjaj je azuriran!",events : updated});
  }catch(err){
    next(err);
  }

};

/*
module.exports.deleteByInfo = async function (req, res, next){
  const name = req.body.nazivDog;
  const adress = req.body.adresa;
  const date = req.body.datum;

  try{  
    const isOK = await Events.deleteOne({nazivDog : name,adresa : adress,datum : date}).exec();
    if(isOK.deletedCount != 0){
      res.status(200).json({message : "Event:" + name + "-" + 
      adress + "-" + date + " has been removed!"});
    }else{
      res.status(404).json({message : "Event:" + name + "-" + 
      adress + "-" + date + " does not exist!"});
    }
  }catch(err){
    next(err);
  }
}*/

module.exports.ticketReservation = async function (req,res,next) {
  try{
    const reservationObj = {
      _id: new mongoose.Types.ObjectId(),
      userId : req.params.id,
      event : req.body.event
    };
    const newRes = new ticketReservationModel(reservationObj);

    const savedEvent = await newRes.save();
    res.status(201).json({message : "Dogadjaj je kreiran!" , savedEvent : savedEvent});

  }catch(err){
    next(err);
  }
}

module.exports.getTicketsById = async function (req,res,next){
  try{
    const tickets = await ticketReservationModel.find({"userId" : req.params.id});
    if(tickets){
      res.status(200).json(tickets);
    }else{
      res.status(404).send();
    }
  }catch(err){
    next(err);
  }
}

//******************  MARICA NOVO   ****************************

//dugme koje brise event
module.exports.deleteEvent = async (req,res,next)=>{     
    try{
    const event = await Events.findById(req.params.id).exec(); 


    if(event)
    {
        await Events.findByIdAndDelete(req.params.id).exec();          
        res.status(200).send();
    }else{
        res.status(404).send("Neuspeh pri brisanju");
    }
    }catch(err)
    {
        next(err);
    }
};