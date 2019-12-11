const  getToken  = (function () {
  const  token  =  process.env.TELEGRAM_TOKEN;
  return  function () {
    return  token;
  };
})();

const  getDbcon  = (function () {
  const  token  =  process.env.DB_CONN;
  return  function () {
    return  token;
  };
})();

module.exports = {telegraf_token:getToken(),
database:getDbcon(),
secret:'yoursecret'};

