const Queries = {
    REGISTER: `INSERT INTO Users (name, email, password) VALUES (?, ?, ?)`,
    CHECK_EMAIL_EXIST: `SELECT email FROM Users WHERE email = ?`,
    LOGIN: `SELECT * FROM Users WHERE email = ? and password = ?`,
    GET_USER_PASSWORD: `SELECT password from Users WHERE email = ?`,
  };
  
  export default Queries;