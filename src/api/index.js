var express = require('express');
var router = express.Router();


// http://localhost:3000/
router.get('/', function(req, res, next) {
    res.status(200)
      .json({
        status: 'success',
        message: 'Magic happens on this Api end point'
      });
});


//////////////////////
// Postgres queries
//////////////////////

var db = require('./queries');

router.get('/laptops', db.getAllLaptops);
router.get('/laptops/paged', db.getPagedLaptops);
router.get('/laptops/:id', db.getLaptop);
router.post('/laptops/add/one', db.insertLaptop);
router.get('/laptops/search/:key', db.searchLaptops);
router.delete('/laptops/delete/:id', db.deleteLaptop);
router.put('/laptops/edit/:id', db.updateLaptop);
router.get('/phones', db.getAllPhones);
router.get('/branch', db.getAllBranches);
router.get('/assignees', db.getAllAssignees);
router.get('/assignees/paged', db.getPagedAssignees);
router.get('/assignees/:id', db.getAssignee);
router.post('/assignees/add/one', db.insertAssignee);
router.get('/assignees/search/:key', db.searchAssignees);
router.delete('/assignees/delete/:id', db.deleteAssignee);
router.put('/assignees/edit/:id', db.updateAssignee);
router.get('/audit', db.getAllAuditTrails);
router.get('/audit/paged', db.getPagedAuditTrails);
router.get('/audit/:id', db.getAuditTrail);
router.post('/audit/add/one', db.insertAuditTrail);
router.get('/audit/search/:key', db.searchAuditTrails);


module.exports = router;
