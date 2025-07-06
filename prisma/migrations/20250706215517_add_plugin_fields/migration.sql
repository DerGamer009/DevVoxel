/*
  Warnings:

  - You are about to drop the column `file` on the `Plugin` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Plugin` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Plugin` DROP COLUMN `file`,
    DROP COLUMN `name`,
    ADD COLUMN `bStatsId` VARCHAR(191) NULL,
    ADD COLUMN `category` VARCHAR(191) NULL,
    ADD COLUMN `discordId` VARCHAR(191) NULL,
    ADD COLUMN `donationLink` VARCHAR(191) NULL,
    ADD COLUMN `fileUrl` VARCHAR(191) NULL,
    ADD COLUMN `iconUrl` VARCHAR(191) NULL,
    ADD COLUMN `languages` VARCHAR(191) NULL,
    ADD COLUMN `optionalDeps` VARCHAR(191) NULL,
    ADD COLUMN `price` DOUBLE NULL,
    ADD COLUMN `requiredDeps` VARCHAR(191) NULL,
    ADD COLUMN `sourceLink` VARCHAR(191) NULL,
    ADD COLUMN `tagline` VARCHAR(191) NULL,
    ADD COLUMN `title` VARCHAR(191) NULL,
    ADD COLUMN `version` VARCHAR(191) NULL,
    MODIFY `description` VARCHAR(191) NULL;
