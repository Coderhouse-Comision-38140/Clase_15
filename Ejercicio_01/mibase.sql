-- Punto 1
CREATE DATABASE mibase;
USE mibase;

-- Punto 2
CREATE TABLE usuarios(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    edad int UNSIGNED NOT NULL,
    email VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
);

-- Punto 3
INSERT INTO usuarios (nombre, apellido, edad, email) VALUES ('Fernando', 'Flekenstein', '28', 'profe@jpromano.net');

-- Punto 4
SELECT * FROM usuarios

-- Punto 5
DELETE FROM usuarios WHERE id = 2;

-- Punto 6
UPDATE usuarios SET edad = 24 WHERE id = 1