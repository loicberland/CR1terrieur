BEGIN;

DROP TABLE IF EXISTS "realization", "image", "user";
CREATE TABLE "realization"(
    "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "title" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "image"(
    "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "title" VARCHAR(255) NOT NULL,
    "link" TEXT NOT NULL,
    "realization_id" INTEGER NOT NULL REFERENCES "realization",
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);
CREATE TABLE "user"(
    "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL UNIQUE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);
ALTER TABLE "realization"
    ADD "image_id" INTEGER UNIQUE REFERENCES "image";

-- seeding
INSERT INTO "user"("email","password") VALUES --mdp : test
('berland.loic@yahoo.fr','$2a$10$FlWfDzFcjAxZzyCurLbYueboxRwAHdPoW89v3MkT23FA0p1pTXBBG');
INSERT INTO "realization"("title") VALUES
('Rea_1'),
('Rea_2');
INSERT INTO "image"("title","link","realization_id") VALUES
('DSCN0015','/img/realizations/1/DSCN0015.JPG',1),
('DSCN0017','/img/realizations/1/DSCN0017.JPG',1),
('DSCN0031','/img/realizations/1/DSCN0031.JPG',1),
('IMG_3738','/img/realizations/2/IMG_3738.JPG',2),
('IMG_3743','/img/realizations/2/IMG_3743.JPG',2),
('IMG_3753','/img/realizations/2/IMG_3753.JPG',2);
UPDATE "realization" SET "image_id" = 1 WHERE "id" = 1;
UPDATE "realization" SET "image_id" = 4 WHERE "id" = 2;
COMMIT;