INSERT INTO USER (EMAIL,FIRST_NAME,LAST_NAME,PASSWORD,ROLE) VALUES ("machitavictor@gmail.com","Victor","Machita","12345","admin");
INSERT INTO USER (EMAIL,FIRST_NAME,LAST_NAME,PASSWORD,ROLE) VALUES ("andreipopovici@gmail.com","Andrei","Popovici","12345","manager");


INSERT INTO Employee (FIRST_NAME,LAST_NAME,EMAIL,PASSWORD,user_id) VALUES ('Gica','Gica','gica@gmail.com','12343',1);
INSERT INTO Employee (FIRST_NAME,LAST_NAME,EMAIL,PASSWORD,user_id) VALUES ('Duda','Duda','duda@gmail.com','12343',2);

INSERT INTO HOTEL (NAME,DESCRIPTION,NR_ROOMS,LOCATION,user_id) VALUES ("Rahova Hotel","Zery nice hotel",400,"Bucuresti",1);
INSERT INTO HOTEL (NAME,DESCRIPTION,NR_ROOMS,LOCATION,user_id) VALUES ("Rahova Hotel2","Zery nice hotel",500,"Bucuresti",2);
INSERT INTO HOTEL (NAME,DESCRIPTION,NR_ROOMS,LOCATION,user_id) VALUES ("Rahova Hotel3","Zery nice hotel",300,"Bucuresti",2);

INSERT INTO Room (ROOM_NUMBER,DESCRIPTION,AVAILABLE,PRICE,hotel_id) VALUES (201,'This is a nice room',true,300,1);
INSERT INTO Room (ROOM_NUMBER,DESCRIPTION,AVAILABLE,PRICE,hotel_id) VALUES (202,'This is a nice room',true,400,2);



