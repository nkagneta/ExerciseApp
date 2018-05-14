var express = require('express');
var Tracker = require('./model');

var app = express.Router();


var tracker = new Tracker();

module.exports = app
    .get('/exercises', (req, res) =>
     res.send( tracker.GetExercises(req.query.playerId) ) 
    )
    .get('/state', (req, res) => res.send(tracker))
    .post('/exercises', (req, res) => {
        console.log(req.body);
        
        try {
            tracker.SubmitExercise(req.body.Text, req.body.PlayerId);
            res.send( { success: true } );            
        } catch (error) {
            res.status(403).send({ success: false, message: error.message });
        }
    })
    .post('/exercises/choose', (req, res) => {
            tracker.ChooseExercise(req.body.Text);
            res.send( { success: true } );
    })