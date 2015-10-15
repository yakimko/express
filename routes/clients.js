var express = require('express');
var router = express.Router();
var extend = require('node.extend');
var Client = require('../models/client');

router.get('/', function (req, res) {
  Client.find(function (err, cients) {
    if (err) {
      console.error(err);
      res.status(400).send(err);
    }

    res.json(cients);
  });
});

router.get('/:id', function (req, res) {
  Client.findById(req.params.id, function (err, client) {
    if (err) {
      console.error(err);
      res.status(400).send(err);
    }

    res.json(client);
  });
});

router.post('/', function (req, res) {
  var client = new Client();

  client = extend(client, req.body);

  client.save(function (err) {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    }

    res.end();
  });
});

router.put('/:id', function (req, res) {
  Client.findById(req.params.id, function (err, client) {
    client = extend(client, req.body);

    client.save(function (err) {
      if (err) {
        console.error(err);
        res.status(500).send(err);
      }

      res.end();
    });
  });
});

router.delete('/:id', function (req, res) {
  Client.remove({_id: req.params.id}, function (err) {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    }

    res.end();
  });
});

module.exports = router;
