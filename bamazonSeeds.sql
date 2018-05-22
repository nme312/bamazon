drop database if exists bamazonDB;
create database bamazonDB;

use bamazonDB;

create table products(
    item_id int not null auto_increment,
    product_name varchar(255),
    department_name varchar(255),
    price int,
    stock_quantity int,
    product_sales varchar(255),
    primary key (item_id)
);

insert into products (product_name, department_name, price, stock_quantity)
values("Beats Studio3", "Electronics", 350, 35);

insert into products (product_name, department_name, price, stock_quantity)
values("Spider-Man PS4", "Games", 60, 32);

insert into products (product_name, department_name, price, stock_quantity)
values("G-Shock", "Jewelry", 200, 30);

insert into products (product_name, department_name, price, stock_quantity)
values("iPhone X", "Electronics", 1000, 12);

insert into products (product_name, department_name, price, stock_quantity)
values("1971 Chevrolet Corvette Stingray", "Automotive", 40000, 3);

insert into products (product_name, department_name, price, stock_quantity)
values("Sharp T.V.", "Electronics", 400, 15);

insert into products (product_name, department_name, price, stock_quantity)
values("Air Jordan 1", "Shoes", 120, 4);

insert into products (product_name, department_name, price, stock_quantity)
values("Leather Jacket", "Clothes", 250, 14);

insert into products (product_name, department_name, price, stock_quantity)
values("Oxfords", "Shoes", 300, 2);

insert into products (product_name, department_name, price, stock_quantity)
values("Vicious by V.E.Schwab", "Books", 25, 36);

create table departments(
    department_id int not null auto_increment,
    department_name varchar(255),
    over_head_costs int,
    primary key (department_id)
);

-- department_id
-- department_name
-- over_head_cost