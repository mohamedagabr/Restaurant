SET IDENTITY_INSERT restaurant.dbo.categories ON;

INSERT INTO restaurant.dbo.categories( category_id, category_name, category_logo ) VALUES ( 1, 'Cold Drinks', 'fas fa-cocktail');
INSERT INTO restaurant.dbo.categories( category_id, category_name, category_logo ) VALUES ( 2, 'Hot Drinks', 'fas fa-coffee');
INSERT INTO restaurant.dbo.categories( category_id, category_name, category_logo ) VALUES ( 3, 'Foods', 'fas fa-utensils');
INSERT INTO restaurant.dbo.orders( order_id, creation_date, image, order_description, order_name, order_price, update_date, category_id ) VALUES ( 1, '2025-12-18', 'fruit-juice', 'Test01', 'fruit juice', 25, null, 1);
INSERT INTO restaurant.dbo.orders( order_id, creation_date, image, order_description, order_name, order_price, update_date, category_id ) VALUES ( 2, '2025-12-18', 'orange-juice', 'Test02', 'orange juice', 20, null, 1);
INSERT INTO restaurant.dbo.orders( order_id, creation_date, image, order_description, order_name, order_price, update_date, category_id ) VALUES ( 3, '2025-12-18', 'tea1', 'Test03', 'Tea', 10, null, 2);
INSERT INTO restaurant.dbo.orders( order_id, creation_date, image, order_description, order_name, order_price, update_date, category_id ) VALUES ( 4, '2025-12-18', 'tea2', 'Test04', 'Tea2', 12.50, null, 2);
INSERT INTO restaurant.dbo.orders( order_id, creation_date, image, order_description, order_name, order_price, update_date, category_id ) VALUES ( 5, '2025-12-18', 'coffe', 'Test05', 'Coffe', 13.50, null, 2);
INSERT INTO restaurant.dbo.orders( order_id, creation_date, image, order_description, order_name, order_price, update_date, category_id ) VALUES ( 6, '2025-12-18', 'coffe', 'Test06', 'Coffe 2', 15, null, 2);
INSERT INTO restaurant.dbo.orders( order_id, creation_date, image, order_description, order_name, order_price, update_date, category_id ) VALUES ( 7, '2025-12-18', 'coffe', 'Test07', 'Coffe 3', 14.50, null, 2);
INSERT INTO restaurant.dbo.orders( order_id, creation_date, image, order_description, order_name, order_price, update_date, category_id ) VALUES ( 8, '2025-12-18', 'tea1', 'Test08', 'Tea6', 16.50, null, 2);
INSERT INTO restaurant.dbo.orders( order_id, creation_date, image, order_description, order_name, order_price, update_date, category_id ) VALUES ( 9, '2025-12-18', 'tea2', 'Test09', 'Tea7', 17, null, 2);
INSERT INTO restaurant.dbo.orders( order_id, creation_date, image, order_description, order_name, order_price, update_date, category_id ) VALUES ( 10, '2025-12-18', 'tea1', 'Test10', 'Tea8', 18, null, 2);
INSERT INTO restaurant.dbo.orders( order_id, creation_date, image, order_description, order_name, order_price, update_date, category_id ) VALUES ( 13, '2025-12-18', 'coffe', 'Test11', 'Coffe 4', 50, null, 2);
INSERT INTO restaurant.dbo.orders( order_id, creation_date, image, order_description, order_name, order_price, update_date, category_id ) VALUES ( 14, '2025-12-18', 'coffe', 'Test12', 'Coffe 5', 60, null, 2);


SET IDENTITY_INSERT restaurant.dbo.orders OFF;