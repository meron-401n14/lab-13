'use strict';

const express = require('express');
const router = express.Router();

/**
 * @rotes GET /public
 * @param req
 * @param {querey} res  200
 * @param {function} next to middleware but we do not use it here
 */
// Visible by all clients
router.get('/public', (req, res, next) => {
  res.status(200).json({ valid: true });
});

// === TODO: Define all the routes below ======
/**
 * @routes GET /hidden
 * @param {object} req
 * @param {object} res
 * @param {function} next
 * Visible by logged in clients only
 */
router.get('/hidden', (req, res, next) => {
  res.send(req.body);

});

/**
 * @routes GET/read-only
 * @param {object} req
 * @param {object} res
 * @param {function} next
 * visible by roles that have the read capability
 */
router.get('/read-only', (req, res, next) => {
  res.send(req.body);
});
/**
 * @routes POST /create
 * @param {object} req
 * @param {object} res
 * @param {function} next
 * Accessibly by roles that have the create capability
 */
router.post('/create', (req, res, next) => {});
/**
 * @routes PUT /:id
 * @param {object} req
 * @param {object} res
 * @param {function} next
 * Accessible by roles that have the update capability
 */
router.put('/update/:id', (req, res, next) => {});
/**
 * @routes DELETE /delete/:id
 * @param {object} req
 * @param {object} res
 * @param {function} next
 * Accessible by roles that have the delete capability
 */
router.delete('/delete/:id', (req, res, next) => {
  const id= parseInt(req.params.id, 10);
  const success = roles.delete(id);
  if(success){
    res.status(200).end();
  }else {
    res.status(404).end();
  }
});
/**
 * @rotes GET /super
 * @param {object} req
 * @param {object} res
 * @param {function} next
 * Visible by roles that have the superuser capability
 */
router.get('/super', (req, res, next) => {});

module.exports = router;









