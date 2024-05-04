-- TABLAS --
CREATE TABLE paises(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100)
);

CREATE TABLE equipos(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    nombreEstadio VARCHAR(100),
    imgEstadio VARCHAR(200),
    imgEquipo VARCHAR(200),
    idPais INT NOT NULL,
    categoria INT NOT NULL,
    puntuacion INT NOT NULL,
    FOREIGN KEY (idPais) REFERENCES paises (id)
);