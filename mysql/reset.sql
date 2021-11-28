DROP DATABASE today;
CREATE DATABASE today;
use today;

CREATE TABLE items(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    item_desc VARCHAR(255),
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO items(title, item_desc) VALUES
('Learn React', 'Finish lesson 23 and 24 of React course'),
('Learn Spanish', 'Complete the next day of Rosetta Stone'),
('Mow The Yard', 'Back forty - to the gate');

INSERT INTO items(title) VALUES ('Take Out Trash');