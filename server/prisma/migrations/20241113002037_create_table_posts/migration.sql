/*
  Warnings:

  - You are about to drop the column `username` on the `posts` table. All the data in the column will be lost.
  - Added the required column `author` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `posts` DROP FOREIGN KEY `posts_username_fkey`;

-- AlterTable
ALTER TABLE `posts` DROP COLUMN `username`,
    ADD COLUMN `author` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `posts` ADD CONSTRAINT `posts_author_fkey` FOREIGN KEY (`author`) REFERENCES `users`(`username`) ON DELETE RESTRICT ON UPDATE CASCADE;
