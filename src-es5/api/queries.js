'use strict';

var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://ken:123456@localhost:5432/assets_tracking';

var db = pgp(connectionString);

// ****Laptops end points****
function getAllLaptops(req, res, next) {
  db.any('SELECT * FROM laptops order by id ').then(function (data) {
    res.json(data);
  }).catch(function (err) {
    return next(err);
  });
}

function getPagedLaptops(req, res, next) {
  var limit = parseInt(req.query.limit);
  var offset = parseInt(req.query.offset);
  db.any('SELECT * FROM laptops order by id LIMIT $1 OFFSET $2 ', [limit, offset]).then(function (data) {
    res.json(data);
  }).catch(function (err) {
    return next(err);
  });
}

function getLaptop(req, res, next) {
  var id = parseInt(req.params.id);
  db.one('SELECT * FROM laptops WHERE id = $1', id).then(function (data) {
    res.json(data);
  }).catch(function (err) {
    return next(err);
  });
}

function searchLaptops(req, res, next) {
  var key = req.params.key;
  db.any('SELECT * FROM laptops where model || brand || serial_number || ms_office_license || kaspersky_license ~* $1 order by id ', key).then(function (data) {
    res.json(data);
  }).catch(function (error) {
    console.log(err);
    return next(err);
  });
}

function insertLaptop(req, res, next) {

  db.none('INSERT INTO laptops (brand, model, serial_number, physical_condition, date_of_purchase, ms_office_license, kaspersky_license, created_at, updated_at)' + 'values(${brand}, ${model}, ${serial_number}, ${physical_condition}, ${date_of_purchase}, ${ms_office_license}, ${kaspersky_license}, NOW(), NOW())', req.body).then(function () {
    res.status(200).json({
      status: 'success',
      message: 'Inserted one laptop'
    });
  }).catch(function (err) {
    return next(err);
  });
}

function updateLaptop(req, res, next) {

  db.none('UPDATE laptops SET brand=$1, model=$2, serial_number=$3, physical_condition=$4, date_of_purchase=$5, ms_office_license=$6, kaspersky_license=$7, updated_at=NOW() where id=$8 ', [req.body.brand, req.body.model, req.body.serial_number, req.body.physical_condition, req.body.date_of_purchase, req.body.ms_office_license, req.body.kaspersky_license, parseInt(req.body.id)]).then(function () {
    res.status(200).json({
      status: 'success',
      message: 'Updated laptop'
    });
  }).catch(function (err) {
    return next(err);
  });
}

function deleteLaptop(req, res, next) {
  var id = parseInt(req.params.id);
  db.result('DELETE FROM laptops WHERE id = $1', id).then(function (result) {
    /* jshint ignore:start */
    res.status(200).json({
      status: 'success',
      message: 'Deleted ${result.rowCount} laptops'
    });
    /* jshint ignore:end */
  }).catch(function (err) {
    return next(err);
  });
}

//****Assignees End Points****

function getAllAssignees(req, res, next) {
  db.any('SELECT * FROM assignees order by id ').then(function (data) {
    res.json(data);
  }).catch(function (err) {
    return next(err);
  });
}

function getPagedAssignees(req, res, next) {
  var limit = parseInt(req.query.limit);
  var offset = parseInt(req.query.offset);
  db.any('SELECT * FROM assignees order by id LIMIT $1 OFFSET $2 ', [limit, offset]).then(function (data) {
    res.json(data);
  }).catch(function (err) {
    return next(err);
  });
}

function getAssignee(req, res, next) {
  var id = parseInt(req.params.id);
  db.one('SELECT * FROM assignees WHERE id = $1', id).then(function (data) {
    res.json(data);
  }).catch(function (err) {
    return next(err);
  });
}

function searchAssignees(req, res, next) {
  var key = req.params.key;
  db.any('SELECT * FROM assignees where uuid || assignee_name || assignee_type ~* $1 order by id ', key).then(function (data) {
    res.json(data);
  }).catch(function (error) {
    console.log(err);
    return next(err);
  });
}

function insertAssignee(req, res, next) {

  db.none('INSERT INTO assignees (uuid , assignee_name, assignee_type, branch_id, created_at, updated_at)' + 'values(${uuid}, ${assignee_name}, ${assignee_type}, ${branch_id}, NOW(), NOW())', req.body).then(function () {
    res.status(200).json({
      status: 'success',
      message: 'Inserted one assignee'
    });
  }).catch(function (err) {
    return next(err);
  });
}

function updateAssignee(req, res, next) {

  db.none('UPDATE laptops SET uuid=$1, assignee_name=$2, assignee_type=$3, branch_id=$4, updated_at=NOW() where id=$5 ', [req.body.uuid, req.body.assignee_name, req.body.assignee_type, parseInt(req.body.branch_id), parseInt(req.body.id)]).then(function () {
    res.status(200).json({
      status: 'success',
      message: 'Updated assignee'
    });
  }).catch(function (err) {
    return next(err);
  });
}

function deleteAssignee(req, res, next) {
  var id = parseInt(req.params.id);
  db.result('DELETE FROM assignees WHERE id = $1', id).then(function (result) {
    /* jshint ignore:start */
    res.status(200).json({
      status: 'success',
      message: 'Deleted ${result.rowCount} Assignee(s)'
    });
    /* jshint ignore:end */
  }).catch(function (err) {
    return next(err);
  });
}

//****Audit Trail End Points****

function getAllAuditTrails(req, res, next) {
  db.any('SELECT * FROM audit_trail order by created_at DESC ').then(function (data) {
    res.status(200).json({
      status: 'success',
      data: data,
      message: 'Retrieved all Audits'
    });
  }).catch(function (err) {
    return next(err);
  });
}

function getPagedAuditTrails(req, res, next) {
  var limit = parseInt(req.query.limit);
  var offset = parseInt(req.query.offset);
  db.any('SELECT * FROM audit_trail order by created_at DESC LIMIT $1 OFFSET $2 ', [limit, offset]).then(function (data) {
    res.json(data);
  }).catch(function (err) {
    return next(err);
  });
}

function getAuditTrail(req, res, next) {
  var id = parseInt(req.params.id);
  db.one('SELECT * FROM audit_trail WHERE id = $1', id).then(function (data) {
    res.json(data);
  }).catch(function (err) {
    return next(err);
  });
}

function searchAuditTrails(req, res, next) {
  var key = req.params.key;
  db.any('SELECT * FROM audit_trail where assignee_from || assignee_to || transacted_by || asset_type ~* $1 order by id ', key).then(function (data) {
    res.json(data);
  }).catch(function (error) {
    console.log(err);
    return next(err);
  });
}

function insertAuditTrail(req, res, next) {

  db.none('INSERT INTO audit_trail (asset_id, asset_type, assignee_from, assignee_to, notes, transacted_by, created_at)' + 'values(${asset_id}, ${asset_type}, ${assignee_from}, ${assignee_to}, {comment}, {transacted_by}, NOW())', req.body).then(function () {
    res.status(200).json({
      status: 'success',
      message: 'Inserted one audit trail record'
    });
  }).catch(function (err) {
    return next(err);
  });
}

//***********************************************************

function getAllPhones(req, res, next) {
  db.any('SELECT * FROM phones').then(function (data) {
    res.status(200).json({
      status: 'success',
      data: data,
      message: 'Retrieved all phone'
    });
  }).catch(function (err) {
    return next(err);
  });
}

function getAllChvs(req, res, next) {
  db.any('SELECT * FROM staff').then(function (data) {
    res.status(200).json({
      status: 'success',
      data: data,
      message: 'Retrieved all staff'
    });
  }).catch(function (err) {
    return next(err);
  });
}

function getAllStaff(req, res, next) {
  db.any('SELECT * FROM staff').then(function (data) {
    res.status(200).json({
      status: 'success',
      data: data,
      message: 'Retrieved all staff'
    });
  }).catch(function (err) {
    return next(err);
  });
}

function getAllBranches(req, res, next) {
  db.any('SELECT * FROM branch').then(function (data) {
    res.status(200).json({
      status: 'success',
      data: data,
      message: 'Retrieved all branches'
    });
  }).catch(function (err) {
    return next(err);
  });
}

/////////////
// Exports
/////////////

module.exports = {
  getAllLaptops: getAllLaptops,
  getLaptop: getLaptop,
  deleteLaptop: deleteLaptop,
  searchLaptops: searchLaptops,
  updateLaptop: updateLaptop,
  insertLaptop: insertLaptop,
  getPagedLaptops: getPagedLaptops,
  getAllAssignees: getAllAssignees,
  getAssignee: getAssignee,
  deleteAssignee: deleteAssignee,
  searchAssignees: searchAssignees,
  updateAssignee: updateAssignee,
  insertAssignee: insertAssignee,
  getPagedAssignees: getPagedAssignees,
  getAllPhones: getAllPhones,
  getAllBranches: getAllBranches,
  getAllAuditTrails: getAllAuditTrails,
  getPagedAuditTrails: getPagedAuditTrails,
  getAuditTrail: getAuditTrail,
  searchAuditTrails: searchAuditTrails,
  insertAuditTrail: insertAuditTrail
};