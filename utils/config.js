const { DB_CONN = 'mongodb://127.0.0.1:27017/bitfilmsdb', PORT = 3001 } = process.env;

module.exports = {
  DB_CONN,
  PORT,
};
