-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 18, 2020 at 08:51 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pqrs`
--
CREATE DATABASE IF NOT EXISTS `pqrs` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `pqrs`;

-- --------------------------------------------------------

--
-- Table structure for table `shopdetails`
--

CREATE TABLE `shopdetails` (
  `shopid` varchar(100) NOT NULL,
  `shoppass` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Truncate table before insert `shopdetails`
--

TRUNCATE TABLE `shopdetails`;
--
-- Dumping data for table `shopdetails`
--

INSERT INTO `shopdetails` (`shopid`, `shoppass`, `name`) VALUES
('SHOP100', '12345678', 'Girish');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `shopdetails`
--
ALTER TABLE `shopdetails`
  ADD PRIMARY KEY (`shopid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
