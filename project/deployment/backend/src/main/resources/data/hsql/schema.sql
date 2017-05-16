


CREATE TABLE `employee` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `user_id` bigint(20) DEFAULT NULL
) ;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`id`, `email`, `first_name`, `last_name`, `password`, `user_id`) VALUES
(1, 'gica@gmail.com', 'Gica', 'Gica', '12343', 1),
(2, 'duda@gmail.com', 'Duda', 'Duda', '12343', 2),
(6, 'sper@gmail.com', 'Sper', 'SaMearga', '12345', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK6lk0xml9r7okjdq0onka4ytju` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `employee`
--
ALTER TABLE `employee`
  ADD CONSTRAINT `FK6lk0xml9r7okjdq0onka4ytju` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

