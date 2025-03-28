/*
  Warnings:

  - You are about to drop the `chats` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "chats" DROP CONSTRAINT "chats_group_id_fkey";

-- DropTable
DROP TABLE "chats";
