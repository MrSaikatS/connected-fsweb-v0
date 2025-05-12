-- DropIndex
DROP INDEX `account_providerId_key` ON `account`;

-- AlterTable
ALTER TABLE `session` MODIFY `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `verification` MODIFY `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3);
