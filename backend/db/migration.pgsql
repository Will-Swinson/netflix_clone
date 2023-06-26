
DROP TABLE IF EXISTS user_profiles;



-- CREATE TABLE my_list_movies
-- (
-- my_list_id INT NOT NULL,
-- api_data_id INT NOT NULL,
-- FOREIGN KEY (my_list_id) REFERENCES my_list (id),
-- PRIMARY KEY (my_list_id, api_data_id)
-- );

CREATE TABLE user_profiles
(
id SERIAL NOT NULL PRIMARY KEY,
user_id INT NOT NULL,
profiles TEXT[] NULL
);

