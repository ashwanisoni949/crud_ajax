<?php

#step 1 : make connection
include __DIR__.'/dbconnect.php';

#step 2 : prepare the Query

// $name = readline('Enter Name :');
// $email = readline('Enter Email :');

CREATE TABLE st_detail(
id int NOT NULL primary key,
name varchar(50),
email varchar(50)
);



?>