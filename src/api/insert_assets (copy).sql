createdb  assets_tracking;


DROP DATABASE IF EXISTS assets_tracking;
CREATE DATABASE assets_tracking;

\c assets_tracking;


CREATE TABLE phones ( id SERIAL PRIMARY KEY , brand VARCHAR(40) NOT NULL , model VARCHAR(40) NOT NULL , device_id1 VARCHAR(40) NOT NULL , device_id2 VARCHAR(40) NOT NULL , physical_condition VARCHAR(255) NOT NULL , date_of_purchase VARCHAR(40) NOT NULL);

CREATE TABLE branch ( id SERIAL PRIMARY KEY , uuid VARCHAR(40) NOT NULL, branch_name VARCHAR(40) NOT NULL);

CREATE TABLE laptops ( id SERIAL PRIMARY KEY , brand VARCHAR(40) NOT NULL , model VARCHAR(40) NOT NULL , serial_number VARCHAR(40) NOT NULL , physical_condition VARCHAR(255) NOT NULL , date_of_purchase VARCHAR(40) NOT NULL, ms_office_license VARCHAR(100) , kaspersky_license VARCHAR(100) );

CREATE TABLE assignees ( id SERIAL PRIMARY KEY , uuid VARCHAR(40) NOT NULL, assignee_name VARCHAR(40) NOT NULL, assignee_type VARCHAR(10) NOT NULL, laptop_id INT REFERENCES laptops(id) , phone_id INT REFERENCES phones(id), branch_id INT NOT NULL REFERENCES branch(id));

CREATE TABLE assets_movement ( id SERIAL PRIMARY KEY   , asset_id INT , asset_type VARCHAR(40) NOT NULL , assignee_from VARCHAR(40) NOT NULL , assignee_to VARCHAR(40) NOT NULL , comment VARCHAR(255) NOT NULL , date_of_movement VARCHAR(40) NOT NULL, approved_by VARCHAR(40) NOT NULL);



insert into phones(brand, model, device_id1, device_id2, physical_condition, date_of_purchase) 
	values('Tecno','L5', '354672361839873', '354672361839888', 'Good', '2017-03-15');	
insert into phones(brand, model, device_id1, device_id2, physical_condition, date_of_purchase) 
	values('Tecno','L5', '354672361839811', '354672361839819', 'Good', '2017-03-15');
insert into phones(brand, model, device_id1, device_id2, physical_condition, date_of_purchase) 
	values('Tecno','L5', '354672361839821', '354672361839828', 'Good', '2017-03-15');
insert into phones(brand, model, device_id1, device_id2, physical_condition, date_of_purchase) 
	values('Tecno','L5', '354672361839833', '354672361839838', 'Good', '2017-03-15');
insert into phones(brand, model, device_id1, device_id2, physical_condition, date_of_purchase) 
	values('Tecno','L5', '354672361839840', '354672361839846', 'Good', '2017-03-15');
insert into phones(brand, model, device_id1, device_id2, physical_condition, date_of_purchase) 
	values('Tecno','L5', '354672361839851', '354672361839854', 'Good', '2017-03-15');
insert into phones(brand, model, device_id1, device_id2, physical_condition, date_of_purchase) 
	values('Tecno','L5', '354672361839866', '354672361839867', 'Good', '2017-03-15');

insert into branch(uuid, branch_name) 
	values('shsvhsh36222ef22t72teg22', 'HQ');
insert into branch(uuid, branch_name) 
	values('dfhdsfdg72egdvw8wdgww828','Busia');
insert into branch(uuid, branch_name) 
	values('mndfdjbjfb83y3edd98ye28e','Malaba');
insert into branch(uuid, branch_name) 
	values('23byeefevdfbdhjau8cwudge','Thika');

insert into laptops(brand, model, serial_number, physical_condition, date_of_purchase, ms_office_license, kaspersky_license) 
	values('Lenovo','G40-80', 'S1841839873', 'Good', '2017-03-15', 'MKS54-2345T-SD46TG-POIE89-NBA21', 'XCDES-2345T-FRWER-54DERG-GT654');
insert into laptops(brand, model, serial_number, physical_condition, date_of_purchase, ms_office_license, kaspersky_license) 
	values('Lenovo','G40-80', 'S1844577378', 'Good', '2017-03-15', 'MKS54-2345T-SD46TG-POIE89-NBA21', 'XCDES-2345T-FRWER-54DERG-GT654');
insert into laptops(brand, model, serial_number, physical_condition, date_of_purchase, ms_office_license, kaspersky_license) 
	values('Lenovo','G500', 'S1841274783', 'Good', '2017-03-15', 'MKS54-2345T-SD46TG-POIE89-NBA21', 'XCDES-2345T-FRWER-54DERG-GT654');
insert into laptops(brand, model, serial_number, physical_condition, date_of_purchase, ms_office_license, kaspersky_license) 
	values('Lenovo','G40-30', 'S1803483824', 'Good', '2017-03-15', 'MKS54-2345T-SD46TG-POIE89-NBA21', 'XCDES-2345T-FRWER-54DERG-GT654');
insert into laptops(brand, model, serial_number, physical_condition, date_of_purchase, ms_office_license, kaspersky_license) 
	values('Lenovo','G40-30', 'S1036733683', 'Good', '2017-03-15', 'MKS54-2345T-SD46TG-POIE89-NBA21', 'XCDES-2345T-FRWER-54DERG-GT654');

insert into assignees(uuid , assignee_name, assignee_type, laptop_id ,phone_id ,branch_id)
	values ('33434-56335-33656-24255','John John', 'CHV', null, 1, 2);
insert into assignees(uuid , assignee_name, assignee_type, laptop_id ,phone_id ,branch_id)
	values ('22234-56335-33656-24255', 'Ken Ken','Staff',  1, 1, 1);
insert into assignees(uuid , assignee_name, assignee_type, laptop_id ,phone_id ,branch_id)
	values ('44434-56335-33656-24255', 'Mary Mary','CHV',  null, 1, 3);
insert into assignees(uuid , assignee_name, assignee_type, laptop_id ,phone_id ,branch_id)
	values ('55534-56335-33656-24255', 'Del Del','Staff',  2, 1, 1);
