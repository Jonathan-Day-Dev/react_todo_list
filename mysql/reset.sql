DROP DATABASE today;
CREATE DATABASE today;
use today;

CREATE TABLE items(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    item_desc VARCHAR(255),
    expense DECIMAL(5, 2),
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO items(title, item_desc, expense) VALUES
('Learn React', 'Finish lesson 23 and 24 of React course', 5.99),
('Learn Spanish', 'Complete the next day of Rosetta Stone', 10.24);

INSERT INTO items(title, item_desc) VALUES
('Mow The Yard', 'Back forty to the gate');

INSERT INTO items(title) VALUES ('Take Out Trash');