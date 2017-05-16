INSERT INTO `employee` (`id`, `email`, `first_name`, `last_name`, `password`, `user_id`) VALUES
(1, 'gica@gmail.com', 'Gica', 'Gica', '12343', 1),
(2, 'duda@gmail.com', 'Duda', 'Duda', '12343', 2),
(6, 'sper@gmail.com', 'Sper', 'SaMearga', '12345', 1);


INSERT INTO `hotel` (`hotel_id`, `description`, `location`, `name`, `nr_rooms`, `user_id`, `id`) VALUES
(1, 'Zery nice hotel', 'Bucuresti', 'Rahova Hotel', 400, 1, 0),
(2, 'Zery nice hotel', 'Bucuresti', 'Rahova Hotel2', 500, 2, 0),
(3, 'Zery nice hotel', 'Bucuresti', 'Rahova Hotel3', 300, 2, 0);



INSERT INTO `room` (`id`, `available`, `description`, `price`, `room_number`, `hotel_id`) VALUES
(1, b'0', 'This is a nice room', 300, 201, 1),
(2, b'1', 'This is a nice room', 400, 202, 2),
(8, b'1', 'me pis pe el', 98889898, 123456, 1);



INSERT INTO `user` (`id`, `email`, `first_name`, `last_name`, `password`, `role`) VALUES
(1, 'machitavictor@gmail.com', 'Victor', 'Machita', '12345', 'admin'),
(2, 'andreipopovici@gmail.com', 'Andrei', 'Popovici', '12345', 'manager'),
(3, 'caca@gmail.com', 'Caca', 'caca', '12345', 'manager'),
(4, 'caca@gmail.com', 'Caca', 'caca', '12345', 'manager');
