/*
  Warnings:

  - You are about to drop the column `productId` on the `Cart` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cartId]` on the table `Cart` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cartId` to the `Cart` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_productId_fkey";

-- DropIndex
DROP INDEX "Cart_productId_key";

-- AlterTable
ALTER TABLE "Cart" DROP COLUMN "productId",
ADD COLUMN     "cartId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Cart_cartId_key" ON "Cart"("cartId");

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
