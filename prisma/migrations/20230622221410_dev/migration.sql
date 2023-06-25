/*
  Warnings:

  - You are about to drop the column `marketId` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[creatorId]` on the table `Market` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `creatorId` to the `Market` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_marketId_fkey`;

-- AlterTable
ALTER TABLE `Market` ADD COLUMN `creatorId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `marketId`;

-- CreateIndex
CREATE UNIQUE INDEX `Market_creatorId_key` ON `Market`(`creatorId`);

-- AddForeignKey
ALTER TABLE `Market` ADD CONSTRAINT `Market_creatorId_fkey` FOREIGN KEY (`creatorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
