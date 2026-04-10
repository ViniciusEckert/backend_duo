-- CreateTable
CREATE TABLE "Personagens" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "primeiraAp" TEXT,
    "idade" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Desenho" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT,
    "lançamento" TEXT NOT NULL,
    "temporadas" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL,
    "genero" TEXT NOT NULL,
    "CreateAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateIn" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "admin" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "_DesenhoToPersonagens" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_DesenhoToPersonagens_A_fkey" FOREIGN KEY ("A") REFERENCES "Desenho" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_DesenhoToPersonagens_B_fkey" FOREIGN KEY ("B") REFERENCES "Personagens" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_DesenhoToPersonagens_AB_unique" ON "_DesenhoToPersonagens"("A", "B");

-- CreateIndex
CREATE INDEX "_DesenhoToPersonagens_B_index" ON "_DesenhoToPersonagens"("B");
