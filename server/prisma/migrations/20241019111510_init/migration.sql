/*
  Warnings:

  - You are about to drop the column `description` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `images` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Cart` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Cart` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[productId]` on the table `Cart` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `productId` to the `Cart` table without a default value. This is not possible if the table is not empty.
  - Made the column `userId` on table `Cart` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Cart" DROP COLUMN "description",
DROP COLUMN "images",
DROP COLUMN "price",
DROP COLUMN "title",
ADD COLUMN     "productId" INTEGER NOT NULL,
ALTER COLUMN "userId" SET NOT NULL,
ALTER COLUMN "userId" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Cart_userId_key" ON "Cart"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Cart_productId_key" ON "Cart"("productId");

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
