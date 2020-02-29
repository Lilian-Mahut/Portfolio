import connection from "../../setup/database";

// Notre query s'occupe d'effectuer la requête sur la base de donneés et de renvoyer au service les datas
const Query = {
  getAll: (param, successCallback, failureCallback) => {
    let sqlQuery = "SELECT * FROM `pages`";

    connection.query(sqlQuery, (err, rows) => {
      if (err) {
        return failureCallback(err);
      }
      if (rows.length > 0) {
        return successCallback(rows);
      } else {
        return successCallback("No page.");
      }
    });
  },
  getById: (id, successCallback, failureCallback) => {
    let sqlQuery = `SELECT * FROM pages WHERE ID=${id}`;

    connection.query(sqlQuery, (err, rows) => {
      if (err) {
        return failureCallback(err);
      }
      if (rows.length > 0) {
        return successCallback(rows[0]);
      } else {
        return successCallback("No matching page");
      }
    });
  }
};

export default Query;
