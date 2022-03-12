const db = require('../db');

const createProposal = async (user_id, title, description) => {
  const proposal = await db.one('INSERT INTO proposals (user_id, name, description) VALUES ($1, $2, $3) RETURNING *', [user_id, title, description]);
  return proposal;
};

const listProposals = async () => {
  const proposals = await db.manyOrNone("SELECT proposals.id, proposals.name, proposals.created_at AT TIME ZONE 'UTC' as created_at, users.address FROM proposals LEFT JOIN users ON users.id = proposals.user_id ORDER BY created_at");
  return proposals;
};

const getProposal = async (id) => {
  const proposal = await db.oneOrNone("SELECT proposals.id, proposals.name, proposals.description, proposals.created_at AT TIME ZONE 'UTC' as created_at, users.address FROM proposals LEFT JOIN users ON users.id = proposals.user_id WHERE proposals.id=$1", [id]);
  
  return proposal;
};

module.exports = {
  createProposal,
  listProposals,
  getProposal
};
