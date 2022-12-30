/*
  Warnings:

  - Added the required column `itemId` to the `Count` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Count" ADD COLUMN     "itemId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Count" ADD CONSTRAINT "Count_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
