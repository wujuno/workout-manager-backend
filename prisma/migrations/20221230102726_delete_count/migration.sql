/*
  Warnings:

  - You are about to drop the `Count` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Count" DROP CONSTRAINT "Count_itemId_fkey";

-- DropIndex
DROP INDEX "Item_name_key";

-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "restTime" INTEGER,
ADD COLUMN     "setTimes" INTEGER,
ADD COLUMN     "times" INTEGER,
ADD COLUMN     "weight" INTEGER;

-- DropTable
DROP TABLE "Count";
