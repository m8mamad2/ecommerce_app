/*
  Warnings:

  - You are about to drop the `JustForFun` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "JustForFun";

-- CreateTable
CREATE TABLE "MostSellProduct" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "images" TEXT[],
    "price" INTEGER NOT NULL,
    "lable" TEXT NOT NULL,

    CONSTRAINT "MostSellProduct_pkey" PRIMARY KEY ("id")
);
