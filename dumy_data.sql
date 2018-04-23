-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.2.13-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping data for table prof.comment: ~0 rows (approximately)
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
REPLACE INTO `comment` (`id`, `comment`, `teaching_id`) VALUES
	(1, 'Lorem ipsum aliquet varius eleifend etiam proin, pellentesque ipsum proin hendrerit mattis conubia, libero venenatis habitasse netus venenatis.', 14),
	(2, 'Proin feugiat nostra malesuada tempor viverra lacinia nec potenti.', 3),
	(3, 'Eu suscipit.', 3),
	(4, 'Tincidunt arcu non.', 2),
	(5, 'Ultrices ac diam.', 7),
	(6, 'Tristique luctus auctor mattis aliquet dui primis in neque adipiscing nunc.', 6),
	(7, 'Elementum gravida turpis ut nulla placerat tortor laoreet donec aptent hendrerit nullam.', 4),
	(8, 'Taciti tincidunt sed felis aliquam rutrum donec nec cras pretium porta senectus id.', 11),
	(9, 'Porttitor condimentum facilisis eu non sodales.', 20),
	(10, 'Neque augue aenean hendrerit fusce auctor quam dui varius mauris libero rutrum.', 5),
	(11, 'Id fermentum.', 6),
	(12, 'Netus suscipit neque aenean risus.', 18),
	(13, 'Tempor himenaeos eleifend.', 11),
	(14, 'Morbi vehicula in.', 21),
	(15, 'Proin cursus leo.', 2),
	(16, 'Maecenas ac neque donec id aliquam vehicula hac turpis.', 3),
	(17, 'Aptent cubilia pulvinar enim vulputate praesent inceptos.', 7),
	(18, 'Aptent.', 2),
	(19, 'Aenean dapibus purus luctus lacinia commodo sit augue justo a, pretium convallis mauris erat venenatis habitasse lacinia.', 6),
	(20, 'Himenaeos porttitor nostra fames.', 6),
	(21, 'Lorem ipsum quisque habitasse ut ultricies aenean, litora aliquam tristique primis urna, sociosqu venenatis fusce taciti volutpat.', 10),
	(22, 'Commodo.', 7),
	(23, 'Curabitur litora augue habitant elit quisque placerat pulvinar mattis ornare quisque.', 15),
	(24, 'Cras ipsum elementum auctor interdum enim taciti mi sed himenaeos eu.', 4),
	(25, 'Nulla tortor vitae neque taciti pulvinar consectetur hendrerit donec inceptos tortor.', 24),
	(26, 'Blandit mattis facilisis eu blandit adipiscing.', 11),
	(27, 'Mauris vitae amet curabitur a vivamus tellus, nam auctor dictumst suspendisse eros dictumst dolor, convallis mattis nisl nibh curabitur.', 9),
	(28, 'Iaculis adipiscing aliquam.', 9),
	(29, 'Odio eros ullamcorper dapibus eros cursus etiam, potenti sed nibh tempus dictumst, fusce vehicula in lorem class.', 18),
	(30, 'Consectetur.', 3),
	(31, 'Sapien quisque ullamcorper varius dolor sodales, proin primis est nibh etiam venenatis, nulla eleifend amet volutpat.', 9),
	(32, 'Lacus arcu bibendum.', 6),
	(33, 'Fermentum hac nisi libero volutpat posuere ornare, suspendisse et donec suscipit imperdiet rutrum, elementum sagittis venenatis consectetur conubia.', 3),
	(34, 'Tempor semper suscipit conubia quis bibendum vehicula litora.', 18),
	(35, 'Bibendum quam nam sem praesent neque massa vestibulum ultricies porttitor imperdiet et ullamcorper tincidunt.', 6);
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;

-- Dumping data for table prof.comment_rating: ~0 rows (approximately)
/*!40000 ALTER TABLE `comment_rating` DISABLE KEYS */;
REPLACE INTO `comment_rating` (`id`, `rating`, `comment_id`) VALUES
	(1, 0, 8),
	(2, 0, 12),
	(3, 1, 4),
	(4, 1, 8),
	(5, 0, 5),
	(6, 0, 1),
	(7, 1, 11),
	(8, 0, 14),
	(9, 0, 9),
	(10, 1, 10),
	(11, 1, 14),
	(12, 1, 17),
	(13, 0, 11),
	(14, 1, 10),
	(15, 1, 5),
	(16, 0, 3),
	(17, 0, 5),
	(18, 0, 5),
	(19, 1, 19),
	(20, 1, 12),
	(21, 0, 12),
	(22, 0, 6),
	(23, 0, 5),
	(24, 1, 7),
	(25, 1, 2),
	(26, 1, 3),
	(27, 1, 6),
	(28, 0, 17),
	(29, 0, 3),
	(30, 1, 19),
	(31, 1, 12),
	(32, 1, 23),
	(33, 0, 23),
	(34, 0, 18),
	(35, 0, 15),
	(36, 0, 22),
	(37, 1, 6),
	(38, 1, 18),
	(39, 1, 24),
	(40, 0, 5),
	(41, 1, 8),
	(42, 1, 9),
	(43, 0, 17),
	(44, 1, 11),
	(45, 1, 12),
	(46, 1, 18),
	(47, 0, 23),
	(48, 1, 23),
	(49, 1, 2),
	(50, 1, 20);
/*!40000 ALTER TABLE `comment_rating` ENABLE KEYS */;

-- Dumping data for table prof.professor: ~0 rows (approximately)
/*!40000 ALTER TABLE `professor` DISABLE KEYS */;
REPLACE INTO `professor` (`id`, `first_name`, `last_name`) VALUES
	(1, 'Mihkel', 'Tamm'),
	(2, 'Kalle', 'Kukk'),
	(3, 'Andres', 'Saar'),
	(4, 'Jaan', 'Ivanov'),
	(5, 'Kaisa', 'Mägi'),
	(6, 'Magnus', 'Mõttus'),
	(7, 'Sergei', 'Smirnov'),
	(8, 'Katrin', 'Valk'),
	(9, 'Teet', 'Sepp'),
	(10, 'Raul', 'Oja');
/*!40000 ALTER TABLE `professor` ENABLE KEYS */;

-- Dumping data for table prof.school: ~0 rows (approximately)
/*!40000 ALTER TABLE `school` DISABLE KEYS */;
REPLACE INTO `school` (`id`, `name`) VALUES
	(1, 'Tallinna Tehnikaülikool'),
	(2, 'Tartu Ülikool'),
	(3, 'Tallinna Ülikool');
/*!40000 ALTER TABLE `school` ENABLE KEYS */;

-- Dumping data for table prof.subject: ~0 rows (approximately)
/*!40000 ALTER TABLE `subject` DISABLE KEYS */;
REPLACE INTO `subject` (`id`, `title`, `school_id`) VALUES
	(1, 'Arvutid', 1),
	(2, 'Arvutivõrgud', 1),
	(3, 'Infosüsteemide arendamine', 1),
	(4, 'Matemaatiline analüüs', 1),
	(5, 'Lineaaralgebra', 1),
	(6, 'Matemaatiline analüüs', 2),
	(7, 'Lineaaralgebra', 2),
	(8, 'Infosüsteemide arendamine', 2),
	(9, 'Arvutid', 3),
	(10, 'Infosüsteemide arendamine', 3);
/*!40000 ALTER TABLE `subject` ENABLE KEYS */;

-- Dumping data for table prof.teaching: ~0 rows (approximately)
/*!40000 ALTER TABLE `teaching` DISABLE KEYS */;
REPLACE INTO `teaching` (`id`, `professor_id`, `subject_id`) VALUES
	(1, 1, 2),
	(2, 1, 3),
	(3, 1, 4),
	(4, 2, 10),
	(5, 2, 2),
	(6, 3, 1),
	(7, 3, 2),
	(8, 3, 6),
	(9, 3, 9),
	(10, 4, 1),
	(11, 4, 5),
	(12, 4, 6),
	(13, 4, 8),
	(14, 5, 1),
	(15, 5, 8),
	(16, 6, 5),
	(17, 6, 7),
	(18, 6, 9),
	(19, 7, 1),
	(20, 8, 4),
	(21, 8, 6),
	(22, 9, 1),
	(23, 9, 2),
	(24, 9, 10),
	(25, 10, 7);
/*!40000 ALTER TABLE `teaching` ENABLE KEYS */;

-- Dumping data for table prof.teaching_rating: ~0 rows (approximately)
/*!40000 ALTER TABLE `teaching_rating` DISABLE KEYS */;
REPLACE INTO `teaching_rating` (`id`, `rating`, `teaching_id`) VALUES
	(1, 0, 8),
	(2, 0, 12),
	(3, 1, 4),
	(4, 1, 8),
	(5, 0, 5),
	(6, 0, 1),
	(7, 1, 11),
	(8, 0, 14),
	(9, 0, 9),
	(10, 1, 10),
	(11, 1, 14),
	(12, 1, 17),
	(13, 0, 11),
	(14, 1, 10),
	(15, 1, 5),
	(16, 0, 3),
	(17, 0, 5),
	(18, 0, 5),
	(19, 1, 19),
	(20, 1, 12),
	(21, 0, 12),
	(22, 0, 6),
	(23, 0, 5),
	(24, 1, 7),
	(25, 1, 2),
	(26, 1, 3),
	(27, 1, 6),
	(28, 0, 17),
	(29, 0, 3),
	(30, 1, 19),
	(31, 1, 12),
	(32, 1, 23),
	(33, 0, 23),
	(34, 0, 18),
	(35, 0, 15),
	(36, 0, 22),
	(37, 1, 6),
	(38, 1, 18),
	(39, 1, 24),
	(40, 0, 5),
	(41, 1, 8),
	(42, 1, 9),
	(43, 0, 17),
	(44, 1, 11),
	(45, 1, 12),
	(46, 1, 18),
	(47, 0, 23),
	(48, 1, 23),
	(49, 1, 2),
	(50, 1, 20);
/*!40000 ALTER TABLE `teaching_rating` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
