-- CreateTable
CREATE TABLE "Workout" (
    "id" SERIAL NOT NULL,
    "items" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "owner" TEXT,

    CONSTRAINT "Workout_pkey" PRIMARY KEY ("id")
);
