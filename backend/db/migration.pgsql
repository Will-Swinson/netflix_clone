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
  id            INT NULL ,
  type          INT NULL,
  name          TEXT  NULL,
  adult         BOOLEAN NULL,
  backdrop_path TEXT NULL,
  genre_ids     INT[] NULL,
  media_type    TEXT NULL,
  origin_country TEXT[] NULL,
  original_language TEXT NULL,
  original_title TEXT NULL,
  overview      TEXT NULL,
  popularity    FLOAT NULL,
  poster_path   TEXT NULL,
  release_date  TEXT NULL,
  title         TEXT NULL,
  video         BOOLEAN NULL,
  vote_average  FLOAT NULL,
  vote_count    INT NULL,
  PRIMARY KEY (id)
);
