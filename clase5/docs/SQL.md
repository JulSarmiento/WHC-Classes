**Schema (MySQL v5.7)**

    CREATE TABLE products(
    	id SERIAL PRIMARY KEY,
     	name VARCHAR(100) NOT NULL,
      	description TEXT,
      	price DECIMAL(10,2) NOT NULL,
      	cuantity INTEGER NOT NULL
    );
    
    INSERT INTO products (name, description, price, cuantity)
    VALUES ('Producto 1', 'Descripción del producto 1', 10.99, 100),
           ('Producto 2', 'Descripción del producto 2', 19.99, 50),
           ('Producto 3', 'Descripción del producto 3', 5.99, 200);
    

---

**Query #1**
    <!-- Get all de products in the products table -->
    SELECT * FROM products;

| id  | name       | description                | price | cuantity |
| --- | ---------- | -------------------------- | ----- | -------- |
| 1   | Producto 1 | Descripción del producto 1 | 10.99 | 100      |
| 2   | Producto 2 | Descripción del producto 2 | 19.99 | 50       |
| 3   | Producto 3 | Descripción del producto 3 | 5.99  | 200      |

---
**Query #2**
    <!-- Get products filtered by a conditional -->
    SELECT * FROM products WHERE price <= 10;

| id  | name       | description                | price | cuantity |
| --- | ---------- | -------------------------- | ----- | -------- |
| 3   | Producto 3 | Descripción del producto 3 | 5.99  | 200      |

---
**Query #3**
    <!-- Get a product by its name-->
    SELECT * FROM products where name LIKE 'Producto 1';

| id  | name       | description                | price | cuantity |
| --- | ---------- | -------------------------- | ----- | -------- |
| 1   | Producto 1 | Descripción del producto 1 | 10.99 | 100      |

---
**Query #4**
    <!-- Update a product by id -->
    UPDATE products SET price = 150.34 WHERE id = 1;

There are no results to be displayed.

---
**Query #5**
    <!-- Delete a product by id -->
    DELETE FROM products WHERE id = 3;

There are no results to be displayed.

---
**Query #6**
    <!-- Get all de products in the products table to validate the mods -->
    SELECT * FROM products;

| id  | name       | description                | price  | cuantity |
| --- | ---------- | -------------------------- | ------ | -------- |
| 1   | Producto 1 | Descripción del producto 1 | 150.34 | 100      |
| 2   | Producto 2 | Descripción del producto 2 | 19.99  | 50       |

---

[View on DB Fiddle](https://www.db-fiddle.com/)