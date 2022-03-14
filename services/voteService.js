const db = require('../db');

const voteProposal = async (user_id, proposal_id, vote) => {
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO votes (user_id, proposal_id, vote) VALUES (${user_id}, ${proposal_id}, ${vote})`
    db.query(sql, function (err, result) {
      if (err) return reject(err)
      resolve(result.insertId)
    });
  })
};

const getVotesOfProposal = async (proposal_id) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT votes.id, votes.vote, votes.created_at, users.address FROM votes LEFT JOIN users ON users.id = votes.user_id WHERE proposal_id=${proposal_id} ORDER BY created_at`
    db.query(sql, function (err, result) {
      if (err) return reject(err)
      resolve(result)
    });
  })
};

module.exports = {
  voteProposal,
  getVotesOfProposal
};
