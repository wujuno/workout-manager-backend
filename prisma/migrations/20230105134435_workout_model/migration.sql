-- CreateTable
CREATE TABLE "Pull" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pull_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Push" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Push_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Legs" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Legs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shoulders" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Shoulders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Abs" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Abs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pull_name_key" ON "Pull"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Push_name_key" ON "Push"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Legs_name_key" ON "Legs"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Shoulders_name_key" ON "Shoulders"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Abs_name_key" ON "Abs"("name");
