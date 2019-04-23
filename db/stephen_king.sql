DROP TABLE books;

CREATE TABLE books(
  id SERIAL PRIMARY KEY,
  title VARCHAR(250),
  publication_date INT,
  main_character VARCHAR(250)
);

INSERT INTO books (title, publication_date, main_character) VALUES ('It', 1986, 'Pennywise');
INSERT INTO books (title, publication_date, main_character) VALUES ('Carrie', 1974, 'Carrie White');
INSERT INTO books (title, publication_date, main_character) VALUES ('Green Mile', 1996, 'John Coffey');
INSERT INTO books (title, publication_date, main_character) VALUES ('Shining', 1977, 'Jack Torrance');
INSERT INTO books (title, publication_date, main_character) VALUES ('Misery', 1986, 'Paul Sheldon');
