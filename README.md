-- List filtered products by a price
SELECT * FROM products WHERE price <= 10;

-- Get a product by ID
SELECT * FROM products where name LIKE 'Producto 1';

-- Update a product by id
UPDATE products SET price = 150.34 WHERE id = 1;

-- Delete a product by ID
DELETE FROM products WHERE id = 3;

-- List all de products after mods
SELECT * FROM products;
