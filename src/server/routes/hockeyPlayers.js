const express = require('express');
const router = express.Router();
const Player = require('../models/player');

//Get all players
router.get('/', async (req, res) => {
    try {
        const players = await Player.find();
        res.json(players);
    } catch {
        res.status(500).json({
            message: err.message
        });
    }
})

//Get one specific player
router.get('/:id', getPlayer, (req, res) => {
    res.send(res.player.firstName)
})

//Add one player 
router.post('/', async (req, res) => {
    const player = new Player({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        position: req.body.position,
        //if not empty will get default value
        shoots: req.body.shoots,
        number: req.body.number,
    });

    try {
        const newPlayer = await player.save();
        res.status(201).json(newPlayer);
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
})

//Update a player
router.patch('/:id', getPlayer, async (req, res) => {
    let updatedValues = req.body;
    for (const property in updatedValues) {
        res.player[property] = updatedValues[property];
    }
    try {
        const updatedPlayer = await res.player.save();
        res.json(updatedPlayer);
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
})

//deleting a player
router.delete('/:id', getPlayer, async (req, res) => {
    try {
        await res.player.deleteOne();
        res.json({
            message: "Deleted"
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
})

async function getPlayer(req, res, next) {
    let foundPlayer;
    try {
        foundPlayer = await Player.findById(req.params.id);
        if (foundPlayer == null) {
            return res.status(404).json({
                message: "No player found"
            });
        }
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }

    res.player = foundPlayer;
    next();
}

module.exports = router;