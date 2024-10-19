/*
  Warnings:

  - You are about to drop the column `cartId` on the `Cart` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[productId]` on the table `Cart` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `productId` to the `Cart` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_cartId_fkey";

-- DropIndex
DROP INDEX "Cart_cartId_key";

-- AlterTable
ALTER TABLE "Cart" DROP COLUMN "cartId",
ADD COLUMN     "productId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Cart_productId_key" ON "Cart"("productId");

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
