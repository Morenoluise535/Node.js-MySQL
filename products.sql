DROP DATABASE IF EXISTS bamazon;

CREATE database bamazon;

use bamazon;

CREATE TABLE products (
  id integer(30) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(30),
  department_name varchar(30),
  price INTEGER(10),
  stock_quantity integer(10),
  primary key (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Drone", "Tech", 999, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("laptop", "Tech", 1000, 90000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Paper towels", "Toileties", 5,1000000 );

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("pasifiers", "babys", 50, 80);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("stroler", "childrens", 400, 800);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("chairs", "furniture", 100, 8050);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("white shirts", "clothes", 50, 482648);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("pants", "clothes", 80, 328389);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("socks", "clothes", 20, 473837);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("cars", "transportation", 29874, 10000);

select * from products;