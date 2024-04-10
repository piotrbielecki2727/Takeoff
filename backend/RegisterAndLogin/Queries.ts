const Queries = {
    REGISTER: `INSERT INTO Users (name, email, password) VALUES (?, ?, ?)`,
    CHECK_EMAIL_EXIST: `SELECT email FROM Users WHERE email = ?`,
    LOGIN: `SELECT * FROM Users WHERE email = ? and password = ?`,
    GET_USER_PASSWORD: `SELECT password from Users WHERE email = ?`,
    GET_USER_DETAILS: `SELECT * from Users WHERE email = ?`,
    GET_USERS: `SELECT * from Users`,
  };
  
  export default Queries;