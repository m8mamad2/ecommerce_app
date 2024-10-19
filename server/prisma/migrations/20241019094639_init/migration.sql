/*
  Warnings:

  - Made the column `phoneNumber` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "phoneNumber" SET NOT NULL,
ALTER COLUMN "city" DROP NOT NULL,
ALTER COLUMN "plate" DROP NOT NULL,
ALTER COLUMN "postal_code" DROP NOT NULL,
ALTER COLUMN "privance" DROP NOT NULL;
