import mysql from 'mysql2';

const config = {
    host: process.env.HOSTDB,
    user: process.env.USERDB,
    password: process.env.PASSWORDDB,
    port: process.env.PORTDB,
    database: process.env.DATABASE, // Asegúrate de que esta línea tenga el valor correcto
};

const configWeb = {
    host: process.env.WEBHOST,
    user: process.env.WEBUSER,
    password: process.env.WEBPASS,
    port: process.env.PORTDBWEB,
    database: process.env.WEBDB, // Asegúrate de que esta línea tenga el valor correcto
};

const getConnection = () => {
    const connection = mysql.createConnection(config);
    connection.connect(err => {
        if (err) {
            console.error('Error en la conexión:', err);
            throw err;
        }
        //console.log("La base de datos se ha conectado correctamente");
    });
    return connection;
};

export default function executeQuery(sql, params) {
    return new Promise((resolve, reject) => {
        const connection = getConnection();
        connection.query(sql, params, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
        connection.end(err => {
            if (err) {
                console.error("Error al cerrar la conexión", err);
            }
        });
    });
};

export{executeQuery, getConnection}