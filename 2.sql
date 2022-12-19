drop database football;
CREATE DATABASE football;
use football;
CREATE TABLE arsenal(
Id int auto_increment primary key,
Team_Name varchar(100) not null,
Home_Color varchar(100) not null,
Away_Color varchar(100) not null,
Numbers_of_Players int(22) not null,
Player_First_Name varchar(100) not null,
Player_Last_Name varchar(100) not null,
Player_Age int(50) not null,
Player_Country varchar(100) not null,
Player_Jersey_Number int(50) not null,
Player_SIgning_Fee double not null,
Club_Owner_Name varchar(100) not null,
CREATEDAT date,
UPDATEDAT date
);
INSERT INTO arsenal(Team_Name,Home_Color,Away_Color,Numbers_of_Players,Player_First_Name,Player_Last_Name,Player_Age,
Player_Country ,Player_Jersey_Number,Player_SIgning_Fee,Club_Owner_Name)
values("ARSENAL FC","RED","WHITE",22,"GRANIT" ,"XHAKA",25,
"SWITZERLAND",12,30000,"Arsenal Holdings Limited");
SELECT * FROM arsenal