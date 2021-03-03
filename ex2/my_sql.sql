-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `brief` varchar(45) NOT NULL,
  `content` varchar(45) NOT NULL,
  `create_date` varchar(45) NOT NULL,
  `Writer_id` int NOT NULL,
  `Category_id` int NOT NULL,
  PRIMARY KEY (`id`,`Writer_id`,`Category_id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_Article_Writer_idx` (`Writer_id`),
  KEY `fk_Article_Category1_idx` (`Category_id`),
  CONSTRAINT `fk_Article_Category1` FOREIGN KEY (`Category_id`) REFERENCES `category` (`id`),
  CONSTRAINT `fk_Article_Writer` FOREIGN KEY (`Writer_id`) REFERENCES `writer` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (1,'js','js is good','js is good','1399-12-12',1,1),(2,'node','node ','node good','1399-12-12',1,1),(3,'css','css','css god','1399-12-12',2,2),(4,'git','github','git git','1399-12-12',2,3),(5,'linux','linux','ubuntu linux','1399-12-12',3,4),(6,'windows','windows','windows','1399-12-12',1,4);
/*!40000 ALTER TABLE `article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'fornt-end'),(2,'style'),(3,'vc'),(4,'os'),(5,'server');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tag`
--

DROP TABLE IF EXISTS `tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tag` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tag`
--

LOCK TABLES `tag` WRITE;
/*!40000 ALTER TABLE `tag` DISABLE KEYS */;
INSERT INTO `tag` VALUES (1,'a'),(2,'b'),(3,'c'),(4,'d'),(5,'e');
/*!40000 ALTER TABLE `tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tag_has_article`
--

DROP TABLE IF EXISTS `tag_has_article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tag_has_article` (
  `Tag_id` int NOT NULL,
  `Article_id` int NOT NULL,
  `Article_Tag_id` int NOT NULL,
  PRIMARY KEY (`Tag_id`,`Article_id`,`Article_Tag_id`),
  KEY `fk_Tag_has_Article_Tag1_idx` (`Tag_id`),
  KEY `fk_Tag_has_Article_Article1_idx` (`Article_id`),
  CONSTRAINT `fk_Tag_has_Article_Article1` FOREIGN KEY (`Article_id`) REFERENCES `article` (`id`),
  CONSTRAINT `fk_Tag_has_Article_Tag1` FOREIGN KEY (`Tag_id`) REFERENCES `tag` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tag_has_article`
--

LOCK TABLES `tag_has_article` WRITE;
/*!40000 ALTER TABLE `tag_has_article` DISABLE KEYS */;
INSERT INTO `tag_has_article` VALUES (1,1,6),(1,2,7),(2,1,5),(3,4,4),(4,3,3),(4,4,2),(5,1,1);
/*!40000 ALTER TABLE `tag_has_article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `writer`
--

DROP TABLE IF EXISTS `writer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `writer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `age` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `writer`
--

LOCK TABLES `writer` WRITE;
/*!40000 ALTER TABLE `writer` DISABLE KEYS */;
INSERT INTO `writer` VALUES (1,'Mohammad','Mohammadi',30),(2,'Ali','Alavi',25),(3,'Hassan','Hassani',23),(4,'Hosein','Hoseini',22),(5,'Sajad','Sajadi',21);
/*!40000 ALTER TABLE `writer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'mydb'
--

--
-- Dumping routines for database 'mydb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-03 17:23:04
