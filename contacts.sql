--  CREATE CONTACTS DB

DROP DATABASE IF EXISTS `contacts`;
CREATE DATABASE IF NOT EXISTS `contacts`;
USE `contacts`;

--  CREATE CONTACTS TABLE

CREATE TABLE `contacts` (
contact_id INT AUTO_INCREMENT PRIMARY KEY,
`firstName` varchar (40),
`lastName` varchar (40),
`email` varchar (40),
`phoneNumber` varchar (15),
`university` varchar (40),
`major` varchar (40)
);

--  INSERT INTO CONTACTS

INSERT INTO `contacts` VALUES(contact_id,'Peter', 'Parker','peter@mit.edu','1111','MIT','MechEngr');
INSERT INTO `contacts` VALUES(contact_id,'Bruce', 'Wayne','bruce@bu.edu','222','BU','Business');
INSERT INTO `contacts` VALUES(contact_id,'Diana', 'Prince','diana@bc.edu','333','BC','Biology');

-- SELECT ALL CONTACTS IN DATABASE

SELECT * FROM `contacts`;
