/*
  Warnings:

  - The primary key for the `group_users` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "group_users" DROP CONSTRAINT "group_users_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "group_users_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "group_users_id_seq";

-- CreateTable
CREATE TABLE "chats" (
    "id" TEXT NOT NULL,
    "group_id" UUID NOT NULL,
    "message" TEXT,
    "name" TEXT NOT NULL,
    "file" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "chats_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "chats_created_at_idx" ON "chats"("created_at");

-- AddForeignKey
ALTER TABLE "chats" ADD CONSTRAINT "chats_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "chat_groups"("id") ON DELETE CASCADE ON UPDATE CASCADE;
