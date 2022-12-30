/*
  Warnings:

  - You are about to drop the column `restTime` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `setTimes` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `times` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `weight` on the `Item` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Item" DROP COLUMN "restTime",
DROP COLUMN "setTimes",
DROP COLUMN "times",
DROP COLUMN "weight";

-- CreateTable
CREATE TABLE "Count" (
    "id" SERIAL NOT NULL,
    "times" INTEGER,
    "setTimes" INTEGER,
    "weight" INTEGER,
    "restTime" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Count_pkey" PRIMARY KEY ("id")
);
