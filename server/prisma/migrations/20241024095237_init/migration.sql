/*
  Warnings:

  - A unique constraint covering the columns `[userId,productId]` on the table `Cart` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `userId` on the `Cart` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Cart" ADD COLUMN     "quanity" INTEGER NOT NULL DEFAULT 1,
DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Cart_userId_key" ON "Cart"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Cart_userId_productId_key" ON "Cart"("userId", "productId");

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
