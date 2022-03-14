const db = require('../db');

const createProposal = async (user_id, title, description) => {
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO proposals (user_id, name, description) VALUES ('${user_id}', '${title}', '${description}')`
    db.query(sql, function (err, result) {
      if (err) return reject(err)
      resolve(result.insertId)
    });
  })
};

const listProposals = async () => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT proposals.id, proposals.name, proposals.status, proposals.created_at, users.address FROM proposals LEFT JOIN users ON users.id = proposals.user_id ORDER BY created_at`
    db.query(sql, function (err, result) {
      if (err) return reject(err)
      resolve(result)
    });
  })
};

const getProposal = async (id) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT proposals.id, proposals.name, proposals.description, proposals.status, proposals.created_at, users.address FROM proposals LEFT JOIN users ON users.id = proposals.user_id WHERE proposals.id=${id}`
    db.query(sql, function (err, result) {
      if (err) return reject(err)
      if(result && result.length > 0)
        resolve(result[0])
      else
        resolve(null)
    });
  })
};

const getActiveProposals = async () => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT id, created_at FROM proposals WHERE finished_at is NULL`
    db.query(sql, function (err, result) {
      if (err) return reject(err)
      resolve(result)
    });
  })
};

const getRecentPassed = async () => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT proposals.id, proposals.name, proposals.created_at, proposals.finished_at, users.address FROM proposals LEFT JOIN users ON users.id = proposals.user_id WHERE status=1 ORDER BY finished_at DESC LIMIT 3`
    db.query(sql, function (err, result) {
      if (err) return reject(err)
      resolve(result)
    });
  })
};

const setProposalFinished = async (id, status) => {
  return new Promise((resolve, reject) => {
    const sql = `UPDATE proposals SET status=${status}, created_at=created_at, finished_at=now() WHERE id=${id}`
    db.query(sql, function (err, result) {
      if (err) return reject(err)
      resolve(result)
    });
  })
};

const DAY = 3600 * 24 * 1000;

const getRemainTimeToSubmit = async (user_id) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT created_at FROM proposals WHERE user_id=${user_id} ORDER BY created_at DESC LIMIT 1`
    db.query(sql, function (err, result) {
      if (err) return reject(err)
      if(result && result.length > 0) {
        const remainingTime = DAY - (new Date().getTime() - new Date(result[0].created_at).getTime()) 
        resolve(remainingTime > 0 ? remainingTime : 0)
      } else 
        resolve(0)
    });
  })
};

module.exports = {
  createProposal,
  listProposals,
  getProposal,
  setProposalFinished,
  getActiveProposals,
  getRecentPassed,
  getRemainTimeToSubmit
};
