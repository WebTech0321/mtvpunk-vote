CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
  id bigserial PRIMARY KEY,
  address text NOT NULL,
  nonce text NULL,
  date_joined timestamp without time zone NOT NULL DEFAULT (NOW() at time zone 'utc')
);

CREATE TABLE proposals (
  id bigserial PRIMARY KEY,
  user_id bigint NOT NULL REFERENCES users(id),
  name text NOT NULL,
  description text NOT NULL,
  created_at timestamp without time zone NOT NULL DEFAULT (NOW() at time zone 'utc')
);

CREATE TABLE votes (
  id bigserial PRIMARY KEY,
  user_id bigint NOT NULL REFERENCES users(id),
  proposal_id bigint NOT NULL REFERENCES proposals(id),
  vote: int NOT NULL,
  created_at timestamp without time zone NOT NULL DEFAULT (NOW() at time zone 'utc')
);