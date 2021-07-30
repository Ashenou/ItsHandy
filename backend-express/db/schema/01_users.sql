DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(15) NOT NULL,
  last_name VARCHAR(15) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL,
  phone_number VARCHAR(32) NOT NULL,
  img_url VARCHAR(255),
  is_provider BOOLEAN DEFAULT false,
  avg_rating INTEGER
);
