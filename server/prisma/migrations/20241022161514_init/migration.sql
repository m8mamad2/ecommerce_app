-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);
