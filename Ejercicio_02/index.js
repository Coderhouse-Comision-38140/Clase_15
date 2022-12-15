/* Importar nuestras dependencias */
import ClientSQL from "./sql.js";
import { options } from "./options/mariaDB.js";

// Instanciar nuestras constantes
const sql = new ClientSQL(options);

// Creamos la tabla si no existe
sql
  .crearTabla()
  .then(() => {
    console.log("Tabla creada con exito");

    // Cargar articulos en nuestra tabla de articulos y listarlos
    const articulos = [
      { nombre: "Leche", codigo: "AB-12", precio: 207.6, stock: 24 },
      { nombre: "Harina", codigo: "CD-34", precio: 120.8, stock: 45 },
      { nombre: "DDL", codigo: "EF-56", precio: 320, stock: 16 },
      { nombre: "Huevos", codigo: "FG-44", precio: 70, stock: 34 },
      { nombre: "Chocolate", codigo: "CR-77", precio: 670.9, stock: 44 },
    ];
    return sql.insertarArticulos(articulos);
  })
  .then(() => {
    console.log("Articulos insertados con exito");
    return sql.listarArticulos();
  })
  .then((articulos) => {
    console.log("Articulos listados");
    console.table(articulos);
    return sql.borrarArticuloPorId(3);
  })
  .then(() => {
    console.log("Articulos eliminado con exito");
    return sql.actualizarStockPorId(0, 2);
  })
  .then(() => {
    console.log("Articulo actualizado con exito");
    return sql.listarArticulos();
  })
  .then((articulos) => {
    console.log("Resultado total");
    console.table(articulos);
  })
  .catch((err) => {
    console.log(err);
    throw err;
  })
  .finally(() => {
    sql.close();
  });
