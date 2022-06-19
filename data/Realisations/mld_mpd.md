# MLD/MPD

## MLD

realisation ( id, titre, images_id, created_at, updated_at)
images ( id, title, lien, realisation_id, created_at, updated_at)

## MPD

realisation

- id INTEGER PRIMARY KEY GENERATED ALWAY AS IDENTITY,
- title VARCHAR(255) NOT NULL,
- images_id INTEGER NOT NULL REFERENCES "images", //ajouter après création table images
- created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
- updated_at TIMESTAMPTZ

images

- id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
- title VARCHAR(255) NOT NULL,
- link TEXT NOT NULL,
- realisation_id INTEGER REFERENCES "realisation",
- created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
- updated_at TIMESTAMPTZ
