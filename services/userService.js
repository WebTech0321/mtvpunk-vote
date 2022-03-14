const uuid = require('uuid');
const db = require('../db');
const crypto = require('crypto');
const config = require('config');
const { recoverPersonalSignature } = require('eth-sig-util')
const { bufferToHex } = require('ethereumjs-util');
const { reject } = require('bluebird');

const createUser = (address) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM users WHERE lower(address) = lower('${address}')`
    db.query(sql, function (err, result) {
      if (err) return reject(err)
      if( result && result.length > 0 ) {
        resolve(result[0])
      } else {
        const nonce = crypto.createHmac('sha256', config.get('NONCE_SECRET'))
        .update(address + uuid.v4())
        .digest('hex');
  
        db.query(`INSERT INTO users (address, nonce) VALUES ('${address}', '${nonce}')`, function (err2, result2) {
          if (err2) return reject(err2)
          if( result2?.insertId ) {
            db.query(`SELECT * FROM users WHERE id=${result2.insertId}`, function (err3, resultUser) {
              if(resultUser && resultUser.length > 0)
                return resolve(resultUser[0])
            })            
          } else {
            reject(null)
          }
        });
      }
    });
  })
};

const verifySignature = (address, signature) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM users WHERE lower(address) = lower('${address}')`
    db.query(sql, function (err, result) {
      if (err) return reject(err)

      if( !result || result.length === 0 ) {
        resolve(null)
      } else {
        const user = result[0]
        const msg = user.nonce;
        const msgBufferHex = bufferToHex(Buffer.from(msg, 'utf8'));
        const sigAddress = recoverPersonalSignature({
          data: msgBufferHex,
          sig: signature,
        });
    
        // The signature verification is successful if the address found with
        // sigUtil.recoverPersonalSignature matches the initial publicAddress
        if (address.toLowerCase() !== sigAddress.toLowerCase()) {
          return resolve(null)
        }
        
        const nonce = crypto.createHmac('sha256', config.get('NONCE_SECRET'))
          .update(address + uuid.v4())
          .digest('hex');
        db.query(`UPDATE users SET nonce='${nonce}' WHERE id=${user.id}`, function (err2, result2) {
          if(err2) reject(err2)
          resolve(user)
        })
      }
    });
  })
};

module.exports = {
  createUser,
  verifySignature,
};
