DROP DATABASE IF EXISTS bamazon_DB;
CREATE database bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  item_id INT NOT NULL,
  product_name VARCHAR(100) NULL,
  department_nam VARCHAR(100) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity integer not NULL,
  PRIMARY KEY (item_id)
);



SELECT * FROM products;