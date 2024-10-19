/*
  Warnings:

  - You are about to drop the column `foodId` on the `Favorite` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[productId]` on the table `Favorite` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `productId` to the `Favorite` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Favorite" DROP CONSTRAINT "Favorite_foodId_fkey";

-- DropIndex
DROP INDEX "Favorite_foodId_key";

-- AlterTable
ALTER TABLE "Favorite" DROP COLUMN "foodId",
ADD COLUMN     "productId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Favorite_productId_key" ON "Favorite"("productId");

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
