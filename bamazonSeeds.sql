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
values("Beats Studio3", "Electronics", 350, 10000);

insert into products (product_name, department_name, price, stock_quantity)
values("Spider-Man PS4", "Games", 60, 10000);

insert into products (product_name, department_name, price, stock_quantity)
values("G-Shock", "Jewelry", 200, 6000);

insert into products (product_name, department_name, price, stock_quantity)
values("iPhone X", "Electronics", 1000, 950);

insert into products (product_name, department_name, price, stock_quantity)
values("1971 Chevrolet Corvette Stingray", "Automotive", 40000, 560);

insert into products (product_name, department_name, price, stock_quantity)
values("Sharp T.V.", "Electronics", 400, 9500);

insert into products (product_name, department_name, price, stock_quantity)
values("Air Jordan 1", "Shoes", 120, 10000);

insert into products (product_name, department_name, price, stock_quantity)
values("Leather Jacket", "Clothes", 250, 7000);

insert into products (product_name, department_name, price, stock_quantity)
values("Oxfords", "Shoes", 300, 6000);

insert into products (product_name, department_name, price, stock_quantity)
values("Vicious by V.E.Schwab", "Books", 25, 10000);

create table departments(
    department_id int not null auto_increment,
    department_name varchar(255),
    over_head_cost int
);

-- department_id
-- department_name
-- over_head_cost