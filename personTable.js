// CREATE TABLE person(
// 	id serial PRIMARY KEY,
// 	name TEXT,
//   age INTEGER,
//   height INTEGER,
//   city TEXT,
//   favorite_color TEXT
// );

// INSERT INTO person
// (name, favorite_color, city, age, height)
// VALUES
// ('Josh', 'pink', 'SLC', 19, 172)

// INSERT INTO person
// (name, favorite_color, city, age, height)
// VALUES
// ('Sydney', 'dark green', 'SLC', 17, 171)

// INSERT INTO person
// (name, favorite_color, city, age, height)
// VALUES
// ('Hayden', 'blue', 'SLC', 19, 185)

// INSERT INTO person
// (name, favorite_color, city, age, height)
// VALUES
// ('Thomas', 'forest green', 'Murray', 28, 175);

// INSERT INTO person
// (name, favorite_color, city, age, height)
// VALUES
// ('Wade', 'red', 'Bismarck', 28, 190);

// SELECT *
// FROM person
// ORDER BY height DESC

// SELECT *
// FROM person
// ORDER BY height ASC

// SELECT *
// FROM person
// ORDER BY age DESC 

// SELECT * 
// FROM person
// WHERE age > 20

// SELECT * 
// FROM person
// WHERE age = 18

// SELECT * 
// FROM person
// WHERE age < 20 OR age > 30;

// SELECT * 
// FROM person
// WHERE age != 27

// SELECT * 
// FROM person
// WHERE favorite_color != 'red'

// SELECT * 
// FROM person
// WHERE favorite_color != 'red' AND favorite_color != 'blue'

// SELECT * 
// FROM person
// WHERE favorite_color = 'orange' OR favorite_color = 'green'

// SELECT * 
// FROM person
// WHERE favorite_color IN ('orange', 'green', 'blue')

// SELECT * 
// FROM person
// WHERE favorite_color IN ('yellow', 'purple')