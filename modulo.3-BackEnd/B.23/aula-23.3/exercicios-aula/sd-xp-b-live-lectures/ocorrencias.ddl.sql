CREATE DATABASE IF NOT EXISTS `ocorrencias-cidade`;

USE `ocorrencias-cidade`;

CREATE TABLE `endereco` (
  `id_endereco` int(11) NOT NULL AUTO_INCREMENT,
  `logradouro` varchar(100) NOT NULL,
  `numero` varchar(45) DEFAULT NULL,
  `bairro` varchar(45) NOT NULL,
  `cep` varchar(45) NOT NULL,
  PRIMARY KEY (`id_endereco`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

INSERT INTO `endereco` 
	(`id_endereco`, `logradouro`, `numero`, `bairro`, `cep`) 
VALUES (1, 'Av Paulista', '1578', 'Bela Vista', '01310-200'),
(2, 'Rua da Cantareira', '306', 'Centro Histórico', '01024-900');

CREATE TABLE `ocorrencias` (
  `id_ocorrencia` int(11) NOT NULL AUTO_INCREMENT,
  `descricao` text NOT NULL,
  `data_hora` datetime NOT NULL,
  `categoria` varchar(45) NOT NULL COMMENT 'Policial\nTrânsito\nInfraestrutura',
  `id_endereco` int(11) NOT NULL,
  PRIMARY KEY (`id_ocorrencia`),
  KEY `fk_endereco_idx` (`id_endereco`),
  CONSTRAINT `fk_endereco` FOREIGN KEY (`id_endereco`) REFERENCES `endereco` (`id_endereco`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

INSERT INTO `ocorrencias` (`id_ocorrencia`,`descricao`, `data_hora`, `categoria`, `id_endereco`) 
VALUES (1, 'Acidente envolvendo 2 carros e uma moto.', '2022-05-22 03:52:00', 'Trânsito', 1), 
(2, 'Golpe da fruta', '2022-02-12 00:00:00', 'Policial', 2);
