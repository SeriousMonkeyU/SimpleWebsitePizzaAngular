CREATE SCHEMA pizzas;

CREATE TABLE IF not exists pizzamenu (
	id INT,
    name VARCHAR(32),
    toppings VARCHAR(32),
    cost DECIMAL(6, 2)
);

INSERT INTO pizzamenu (id, name, toppings, cost)
VALUES
(1, 'Hawaiian', 'Mozzarella, Ham, Pineapple', 135.00),
(2, 'Margherita', 'Mozzarella, Basil leaves, Olive oil', 100.00),
(3, 'Pepperoni', 'Mozzarella, Pepperoni', 105.00),
(4, 'Vegetarian', 'Pesto, Mozzarella, Bell peppers, Red onion, Mushrooms, Black olives', 150.00),
(5, 'BBQ Chicken', 'BBQ sauce, Chicken, Red onion, Mozzarella, Cilantro', 135.00);