DROP TABLE IF EXISTS my_list,users, api_data;


CREATE TABLE users
(
  id       serial NOT NULL,
  username TEXT   NOT NULL,
  password TEXT   NOT NULL,
  email    TEXT   NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE my_list
(
  id                serial  NOT NULL,
  title             text    ,
  created           date    ,
  public_or_private boolean ,
  last_modified     date    ,
  user_id           INT  NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users (id),
  PRIMARY KEY (id)
);

CREATE TABLE api_data
(
  id            INT ,
  type          INT,
  name          TEXT,
  adult         BOOLEAN,
  backdrop_path TEXT,
  genre_ids     INT[],
  media_type    TEXT,
  origin_country TEXT[],
  original_language TEXT,
  original_title TEXT,
  overview      TEXT,
  popularity    FLOAT,
  poster_path   TEXT,
  release_date  TEXT,
  title         TEXT,
  video         BOOLEAN,
  vote_average  FLOAT,
  vote_count    INT,
  PRIMARY KEY (id)
);
