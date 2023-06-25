/*
  Warnings:

  - You are about to drop the column `creatorId` on the `Market` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[marketId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `Market` DROP FOREIGN KEY `Market_creatorId_fkey`;

-- AlterTable
ALTER TABLE `Market` DROP COLUMN `creatorId`;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `marketId` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_marketId_key` ON `User`(`marketId`);

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_marketId_fkey` FOREIGN KEY (`marketId`) REFERENCES `Market`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
