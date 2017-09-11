createdb  assets_tracking;


DROP DATABASE IF EXISTS assets_tracking;
CREATE DATABASE assets_tracking;

\c assets_tracking;

CREATE TABLE branch ( id SERIAL PRIMARY KEY , uuid VARCHAR(40) UNIQUE NOT NULL, branch_name VARCHAR(40) NOT NULL, created_at timestamp, updated_at timestamp);

CREATE TABLE assignees ( id SERIAL PRIMARY KEY , uuid VARCHAR(40) UNIQUE NOT NULL, assignee_name VARCHAR(40) NOT NULL, assignee_type VARCHAR(10) NOT NULL, branch_id INT REFERENCES branch(id), created_at timestamp, updated_at timestamp);

CREATE TABLE phones ( id SERIAL PRIMARY KEY , brand VARCHAR(40) NOT NULL , model VARCHAR(40) NOT NULL , device_id1 VARCHAR(40) UNIQUE NOT NULL , device_id2 VARCHAR(40) UNIQUE NOT NULL , physical_condition VARCHAR(255) NOT NULL , date_of_purchase VARCHAR(40) NOT NULL, created_at timestamp, updated_at timestamp, assigned_to INT REFERENCES assignees(id), assigned_on timestamp );

CREATE TABLE asset_type ( id SERIAL PRIMARY KEY , asset_type_name VARCHAR(40) NOT NULL, created_at timestamp, updated_at timestamp);

CREATE TABLE laptops ( id SERIAL PRIMARY KEY , brand VARCHAR(40) NOT NULL , model VARCHAR(40) NOT NULL , serial_number VARCHAR(40) UNIQUE NOT NULL , physical_condition VARCHAR(255) NOT NULL , date_of_purchase VARCHAR(40) NOT NULL, ms_office_license VARCHAR(100) , kaspersky_license VARCHAR(100), created_at timestamp, updated_at timestamp, assigned_to INT REFERENCES assignees(id), assigned_on timestamp );

CREATE TABLE audit_trail ( id SERIAL PRIMARY KEY , asset_id INT , asset_type VARCHAR(40) NOT NULL , assignee_from VARCHAR(40) NOT NULL , assignee_to VARCHAR(40) NOT NULL , notes VARCHAR(255) NOT NULL , transacted_by VARCHAR(40) NOT NULL, created_at timestamp);



insert into phones(brand, model, device_id1, device_id2, physical_condition, date_of_purchase, created_at, updated_at) 
	values('Tecno','L5', '354672361839873', '354672361839888', 'Good', '2017-03-15', NOW(), NOW());	
insert into phones(brand, model, device_id1, device_id2, physical_condition, date_of_purchase, created_at, updated_at) 
	values('Tecno','L5', '354672361839811', '354672361839819', 'Good', '2017-03-15', NOW(), NOW());
insert into phones(brand, model, device_id1, device_id2, physical_condition, date_of_purchase, created_at, updated_at) 
	values('Tecno','L5', '354672361839821', '354672361839828', 'Good', '2017-03-15', NOW(), NOW());
insert into phones(brand, model, device_id1, device_id2, physical_condition, date_of_purchase, created_at, updated_at) 
	values('Tecno','L5', '354672361839833', '354672361839838', 'Good', '2017-03-15', NOW(), NOW());
insert into phones(brand, model, device_id1, device_id2, physical_condition, date_of_purchase, created_at, updated_at) 
	values('Tecno','L5', '354672361839840', '354672361839846', 'Good', '2017-03-15', NOW(), NOW());
insert into phones(brand, model, device_id1, device_id2, physical_condition, date_of_purchase, created_at, updated_at) 
	values('Tecno','L5', '354672361839851', '354672361839854', 'Good', '2017-03-15', NOW(), NOW());
insert into phones(brand, model, device_id1, device_id2, physical_condition, date_of_purchase, created_at, updated_at) 
	values('Tecno','L5', '354672361839866', '354672361839867', 'Good', '2017-03-15', NOW(), NOW());

insert into branch(uuid, branch_name, created_at, updated_at) 
	values('shsvhsh36222ef22t72teg22', 'HQ', NOW(), NOW());
insert into branch(uuid, branch_name, created_at, updated_at) 
	values('dfhdsfdg72egdvw8wdgww828','Busia', NOW(), NOW());
insert into branch(uuid, branch_name, created_at, updated_at) 
	values('mndfdjbjfb83y3edd98ye28e','Malaba', NOW(), NOW());
insert into branch(uuid, branch_name, created_at, updated_at) 
	values('23byeefevdfbdhjau8cwudge','Thika', NOW(), NOW());

insert into laptops(brand, model, serial_number, physical_condition, date_of_purchase, ms_office_license, kaspersky_license, created_at, updated_at) 
	values('Lenovo','G40-80', 'S1841839873', 'Good', '2017-03-15', 'MKS54-2345T-SD46TG-POIE89-NBA21', 'XCDES-2345T-FRWER-54DERG-GT654', NOW(), NOW());
insert into laptops(brand, model, serial_number, physical_condition, date_of_purchase, ms_office_license, kaspersky_license, created_at, updated_at) 
	values('Lenovo','G40-80', 'S1844577378', 'Good', '2017-03-15', 'MKS54-2345T-SD46TG-POIE89-NBA21', 'XCDES-2345T-FRWER-54DERG-GT654', NOW(), NOW());
insert into laptops(brand, model, serial_number, physical_condition, date_of_purchase, ms_office_license, kaspersky_license, created_at, updated_at) 
	values('Lenovo','G500', 'S1841274783', 'Good', '2017-03-15', 'MKS54-2345T-SD46TG-POIE89-NBA21', 'XCDES-2345T-FRWER-54DERG-GT654', NOW(), NOW());
insert into laptops(brand, model, serial_number, physical_condition, date_of_purchase, ms_office_license, kaspersky_license, created_at, updated_at) 
	values('Lenovo','G40-30', 'S1803483824', 'Good', '2017-03-15', 'MKS54-2345T-SD46TG-POIE89-NBA21', 'XCDES-2345T-FRWER-54DERG-GT654', NOW(), NOW());
insert into laptops(brand, model, serial_number, physical_condition, date_of_purchase, ms_office_license, kaspersky_license, created_at, updated_at) 
	values('Lenovo','G40-30', 'S1036733683', 'Good', '2017-03-15', 'MKS54-2345T-SD46TG-POIE89-NBA21', 'XCDES-2345T-FRWER-54DERG-GT654', NOW(), NOW());
insert into laptops(brand, model, serial_number, physical_condition, date_of_purchase, ms_office_license, kaspersky_license, created_at, updated_at) 
	values('Lenovo','G40-80', 'S1841833573', 'Good', '2017-03-15', 'MKS54-2345T-SD46TG-POIE89-NBA21', 'XCDES-2345T-FRWER-54DERG-GT654', NOW(), NOW());
insert into laptops(brand, model, serial_number, physical_condition, date_of_purchase, ms_office_license, kaspersky_license, created_at, updated_at) 
	values('Lenovo','G40-80', 'S18441234378', 'Good', '2017-03-15', 'MKS54-2345T-SD46TG-POIE89-NBA21', 'XCDES-2345T-FRWER-54DERG-GT654', NOW(), NOW());
insert into laptops(brand, model, serial_number, physical_condition, date_of_purchase, ms_office_license, kaspersky_license, created_at, updated_at) 
	values('Lenovo','G500', 'S1424029373723', 'Good', '2017-03-15', 'MKS54-2345T-SD46TG-POIE89-NBA21', 'XCDES-2345T-FRWER-54DERG-GT654', NOW(), NOW());
insert into laptops(brand, model, serial_number, physical_condition, date_of_purchase, ms_office_license, kaspersky_license, created_at, updated_at) 
	values('Lenovo','G40-30', 'S13983726742', 'Good', '2017-03-15', 'MKS54-2345T-SD46TG-POIE89-NBA21', 'XCDES-2345T-FRWER-54DERG-GT654', NOW(), NOW());
insert into laptops(brand, model, serial_number, physical_condition, date_of_purchase, ms_office_license, kaspersky_license, created_at, updated_at) 
	values('Lenovo','G40-30', 'S532676509883', 'Good', '2017-03-15', 'MKS54-2345T-SD46TG-POIE89-NBA21', 'XCDES-2345T-FRWER-54DERG-GT654', NOW(), NOW());
insert into laptops(brand, model, serial_number, physical_condition, date_of_purchase, ms_office_license, kaspersky_license, created_at, updated_at) 
	values('Lenovo','G40-80', 'S14309473572', 'Good', '2017-03-15', 'MKS54-2345T-SD46TG-POIE89-NBA21', 'XCDES-2345T-FRWER-54DERG-GT654', NOW(), NOW());
insert into laptops(brand, model, serial_number, physical_condition, date_of_purchase, ms_office_license, kaspersky_license, created_at, updated_at) 
	values('Lenovo','G40-80', 'S635272492377', 'Good', '2017-03-15', 'MKS54-2345T-SD46TG-POIE89-NBA21', 'XCDES-2345T-FRWER-54DERG-GT654', NOW(), NOW());
insert into laptops(brand, model, serial_number, physical_condition, date_of_purchase, ms_office_license, kaspersky_license, created_at, updated_at) 
	values('Lenovo','G500', 'S98247353899248', 'Good', '2017-03-15', 'MKS54-2345T-SD46TG-POIE89-NBA21', 'XCDES-2345T-FRWER-54DERG-GT654', NOW(), NOW());
insert into laptops(brand, model, serial_number, physical_condition, date_of_purchase, ms_office_license, kaspersky_license, created_at, updated_at) 
	values('Lenovo','G40-30', 'S425650937727', 'Good', '2017-03-15', 'MKS54-2345T-SD46TG-POIE89-NBA21', 'XCDES-2345T-FRWER-54DERG-GT654', NOW(), NOW());
insert into laptops(brand, model, serial_number, physical_condition, date_of_purchase, ms_office_license, kaspersky_license, created_at, updated_at) 
	values('Lenovo','G40-30', 'S8375782994809876', 'Good', '2017-03-15', 'MKS54-2345T-SD46TG-POIE89-NBA21', 'XCDES-2345T-FRWER-54DERG-GT654', NOW(), NOW());
insert into laptops(brand, model, serial_number, physical_condition, date_of_purchase, ms_office_license, kaspersky_license, created_at, updated_at) 
	values('Lenovo','G40-80', 'S42209872678738', 'Good', '2017-03-15', 'MKS54-2345T-SD46TG-POIE89-NBA21', 'XCDES-2345T-FRWER-54DERG-GT654', NOW(), NOW());
insert into laptops(brand, model, serial_number, physical_condition, date_of_purchase, ms_office_license, kaspersky_license, created_at, updated_at) 
	values('Lenovo','G40-80', 'S572092857726', 'Good', '2017-03-15', 'MKS54-2345T-SD46TG-POIE89-NBA21', 'XCDES-2345T-FRWER-54DERG-GT654', NOW(), NOW());
insert into laptops(brand, model, serial_number, physical_condition, date_of_purchase, ms_office_license, kaspersky_license, created_at, updated_at) 
	values('Lenovo','G500', 'S0928276472994', 'Good', '2017-03-15', 'MKS54-2345T-SD46TG-POIE89-NBA21', 'XCDES-2345T-FRWER-54DERG-GT654', NOW(), NOW());
insert into laptops(brand, model, serial_number, physical_condition, date_of_purchase, ms_office_license, kaspersky_license, created_at, updated_at) 
	values('Lenovo','G40-30', 'S09387889388', 'Good', '2017-03-15', 'MKS54-2345T-SD46TG-POIE89-NBA21', 'XCDES-2345T-FRWER-54DERG-GT654', NOW(), NOW());
insert into laptops(brand, model, serial_number, physical_condition, date_of_purchase, ms_office_license, kaspersky_license, created_at, updated_at) 
	values('Lenovo','G40-30', 'S33109377377', 'Good', '2017-03-15', 'MKS54-2345T-SD46TG-POIE89-NBA21', 'XCDES-2345T-FRWER-54DERG-GT654', NOW(), NOW());

insert into assignees(uuid , assignee_name, assignee_type, branch_id, created_at, updated_at)
	values ('33434-56335-33656-242550','John John', 'CHV', 4, NOW(), NOW());
insert into assignees(uuid , assignee_name, assignee_type, branch_id, created_at, updated_at)
	values ('22234-56335-33656-242551', 'Ken Ken','Staff', 1, NOW(), NOW());
insert into assignees(uuid , assignee_name, assignee_type, branch_id, created_at, updated_at)
	values ('44434-56335-33656-242552', 'Mary Mary','CHV', 2, NOW(), NOW());
insert into assignees(uuid , assignee_name, assignee_type, branch_id, created_at, updated_at)
	values ('55534-56335-33656-242553', 'Del Del','Staff', 1, NOW(), NOW());
insert into assignees(uuid , assignee_name, assignee_type, branch_id, created_at, updated_at)
	values ('33434-56335-33656-242554','Vic Vic', 'CHV', 2, NOW(), NOW());
insert into assignees(uuid , assignee_name, assignee_type, branch_id, created_at, updated_at)
	values ('22234-56335-33656-242555', 'Boni Boni','Staff', 1, NOW(), NOW());
insert into assignees(uuid , assignee_name, assignee_type, branch_id, created_at, updated_at)
	values ('44434-56335-33656-242556', 'Lynet Lynet','CHV', 4, NOW(), NOW());
insert into assignees(uuid , assignee_name, assignee_type, branch_id, created_at, updated_at)
	values ('55534-56335-33656-242557', 'Dave Dave','Staff', 1, NOW(), NOW());
insert into assignees(uuid , assignee_name, assignee_type, branch_id, created_at, updated_at)
	values ('33434-56335-33656-242558','James James', 'CHV', 2, NOW(), NOW());
insert into assignees(uuid , assignee_name, assignee_type, branch_id, created_at, updated_at)
	values ('22234-56335-33656-242559', 'Sam Sam','Staff', 1, NOW(), NOW());
insert into assignees(uuid , assignee_name, assignee_type, branch_id, created_at, updated_at)
	values ('44434-56335-33656-242550', 'Kim Kim','CHV', 3, NOW(), NOW());
insert into assignees(uuid , assignee_name, assignee_type, branch_id, created_at, updated_at)
	values ('55534-56335-33656-242551', 'Stan Stan','Staff', 1, NOW(), NOW());
insert into assignees(uuid , assignee_name, assignee_type, branch_id, created_at, updated_at)
	values ('33434-56335-33656-242552','Penny Penny', 'CHV', 2, NOW(), NOW());
insert into assignees(uuid , assignee_name, assignee_type, branch_id, created_at, updated_at)
	values ('22234-56335-33656-242553', 'Jim Jim','Staff', 1, NOW(), NOW());
insert into assignees(uuid , assignee_name, assignee_type, branch_id, created_at, updated_at)
	values ('44434-56335-33656-242554', 'Mike Mike','CHV', 3, NOW(), NOW());
insert into assignees(uuid , assignee_name, assignee_type, branch_id, created_at, updated_at)
	values ('55534-56335-33656-242555', 'Ben Ben','Staff', 1, NOW(), NOW());

