# MLD/MPD

## MLD

realisation ( id, titre, image_id, created_at, updated_at)
image ( id, title, lien, realisation_id, created_at, updated_at)
user (id, email, password created_at, updated_at)

## MPD

realisation

- id INTEGER PRIMARY KEY GENERATED ALWAY AS IDENTITY,
- title VARCHAR(255) NOT NULL,
- image_id INTEGER NOT NULL REFERENCES "image", //ajouter après création table image
- created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
- updated_at TIMESTAMPTZ

image

- id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
- title VARCHAR(255) NOT NULL,
- link TEXT NOT NULL,
- realisation_id INTEGER REFERENCES "realisation",
- created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
- updated_at TIMESTAMPTZ

user

- id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
- email TEXT NOT NULL UNIQUE,
- password TEXT NOT NULL UNIQUE,
- created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
- updated_at TIMESTAMPTZ
