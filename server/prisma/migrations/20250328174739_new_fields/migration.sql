/*
  Warnings:

  - The primary key for the `group_users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `group_users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "group_users" DROP CONSTRAINT "group_users_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "group_users_pkey" PRIMARY KEY ("id");
