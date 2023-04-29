**Schema (MySQL v5.7)**

        CREATE TABLE products(
        	id SERIAL PRIMARY KEY,
         	name VARCHAR(100) NOT NULL,
          	description TEXT,
          	category TEXT,
          	size VARCHAR(10) NOT NULL,
          	price DECIMAL(10,2) NOT NULL,
          	cuantity INTEGER NOT NULL
        );
        
        INSERT INTO products (name, description, category, size, price, cuantity)
        VALUES ('Onix edition', 'Descripción del producto 1', 'Piedra Natural', 'M', 345.99, 100),
              ('Firebird edition', 'Descripción del producto 1', 'Piedra Murano', 'L',150.99, 30),
              ('Blue Paradise', 'Descripción del producto 1', 'Piedra Natural', 'M',750.99, 10),
              ('Amatista Joy', 'Descripción del producto 1', 'Piedra Natural', 'XL',76.99, 1),
              ('Esmerald edition', 'Descripción del producto 1', 'Piedra Murano', 'S',234.99, 80),
              ('Purple edition', 'Descripción del producto 1', 'Piedra Murano', 'XL',324.99, 55),
              ('Diamond edition', 'Descripción del producto 1', 'Piedra Murano', 'M',645.99, 76),
              ('Jaspe edition', 'Descripción del producto 1', 'Piedra Natural', 'S',1000.99, 43),
              ('Brown and Gold', 'Descripción del producto 1', 'Piedra Murano', 'L', 78.99, 2);
            
     CREATE TABLE category(
     	id SERIAL PRIMARY KEY,
       	name VARCHAR(100) NOT NULL
     );
     
     INSERT INTO category (name)
     VALUES ('Piedra Natural'),
     		('Piedra Murano');

---

**Query #1**

    SELECT * FROM products WHERE category LIKE '%murano%';

| id  | name             | description                | category      | size | price  | cuantity |
| --- | ---------------- | -------------------------- | ------------- | ---- | ------ | -------- |
| 2   | Firebird edition | Descripción del producto 1 | Piedra Murano | L    | 150.99 | 30       |
| 5   | Esmerald edition | Descripción del producto 1 | Piedra Murano | S    | 234.99 | 80       |
| 6   | Purple edition   | Descripción del producto 1 | Piedra Murano | XL   | 324.99 | 55       |
| 7   | Diamond edition  | Descripción del producto 1 | Piedra Murano | M    | 645.99 | 76       |
| 9   | Brown and Gold   | Descripción del producto 1 | Piedra Murano | L    | 78.99  | 2        |

---
**Query #2**

    SELECT * FROM products WHERE category NOT LIKE '%murano%';

| id  | name          | description                | category       | size | price   | cuantity |
| --- | ------------- | -------------------------- | -------------- | ---- | ------- | -------- |
| 1   | Onix edition  | Descripción del producto 1 | Piedra Natural | M    | 345.99  | 100      |
| 3   | Blue Paradise | Descripción del producto 1 | Piedra Natural | M    | 750.99  | 10       |
| 4   | Amatista Joy  | Descripción del producto 1 | Piedra Natural | XL   | 76.99   | 1        |
| 8   | Jaspe edition | Descripción del producto 1 | Piedra Natural | S    | 1000.99 | 43       |

---
**Query #3**

    SELECT * FROM products WHERE category = 'Piedra Natural' AND size = 'XL';

| id  | name         | description                | category       | size | price | cuantity |
| --- | ------------ | -------------------------- | -------------- | ---- | ----- | -------- |
| 4   | Amatista Joy | Descripción del producto 1 | Piedra Natural | XL   | 76.99 | 1        |

---

[View on DB Fiddle](https://www.db-fiddle.com/f/mcxovA8YqzKEL5BwES9hr1/3)