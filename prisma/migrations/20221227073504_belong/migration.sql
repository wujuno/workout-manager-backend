-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_recordId_fkey";

-- CreateTable
CREATE TABLE "_ItemToRecord" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ItemToRecord_AB_unique" ON "_ItemToRecord"("A", "B");

-- CreateIndex
CREATE INDEX "_ItemToRecord_B_index" ON "_ItemToRecord"("B");

-- AddForeignKey
ALTER TABLE "_ItemToRecord" ADD CONSTRAINT "_ItemToRecord_A_fkey" FOREIGN KEY ("A") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItemToRecord" ADD CONSTRAINT "_ItemToRecord_B_fkey" FOREIGN KEY ("B") REFERENCES "Record"("id") ON DELETE CASCADE ON UPDATE CASCADE;
