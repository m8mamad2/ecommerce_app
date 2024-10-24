/*
  Warnings:

  - Changed the type of `userId` on the `Favorite` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropIndex
DROP INDEX "Cart_userId_key";

-- AlterTable
ALTER TABLE "Favorite" DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Favorite_userId_key" ON "Favorite"("userId");
