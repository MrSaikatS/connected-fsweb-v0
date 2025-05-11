/*
  Warnings:

  - A unique constraint covering the columns `[accountId]` on the table `account` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[providerId]` on the table `account` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[providerId,accountId]` on the table `account` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `account` MODIFY `accountId` VARCHAR(191) NOT NULL,
    MODIFY `providerId` VARCHAR(191) NOT NULL,
    MODIFY `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `user` MODIFY `emailVerified` BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX `account_accountId_key` ON `account`(`accountId`);

-- CreateIndex
CREATE UNIQUE INDEX `account_providerId_key` ON `account`(`providerId`);

-- CreateIndex
CREATE UNIQUE INDEX `account_providerId_accountId_key` ON `account`(`providerId`, `accountId`);
