-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_doacoes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pessoa_id" INTEGER NOT NULL,
    "local_id" INTEGER NOT NULL,
    "data" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "doacoes_pessoa_id_fkey" FOREIGN KEY ("pessoa_id") REFERENCES "pessoas" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "doacoes_local_id_fkey" FOREIGN KEY ("local_id") REFERENCES "locais_coleta" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_doacoes" ("created_at", "data", "id", "local_id", "pessoa_id", "updated_at") SELECT "created_at", "data", "id", "local_id", "pessoa_id", "updated_at" FROM "doacoes";
DROP TABLE "doacoes";
ALTER TABLE "new_doacoes" RENAME TO "doacoes";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
