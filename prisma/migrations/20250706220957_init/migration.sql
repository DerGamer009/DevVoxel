/*
  Warnings:

  - You are about to drop the column `bStatsId` on the `Plugin` table. All the data in the column will be lost.
  - You are about to drop the column `discordId` on the `Plugin` table. All the data in the column will be lost.
  - You are about to drop the column `donationLink` on the `Plugin` table. All the data in the column will be lost.
  - You are about to drop the column `languages` on the `Plugin` table. All the data in the column will be lost.
  - You are about to drop the column `optionalDeps` on the `Plugin` table. All the data in the column will be lost.
  - You are about to drop the column `requiredDeps` on the `Plugin` table. All the data in the column will be lost.
  - You are about to drop the column `sourceLink` on the `Plugin` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - Made the column `category` on table `Plugin` required. This step will fail if there are existing NULL values in that column.
  - Made the column `fileUrl` on table `Plugin` required. This step will fail if there are existing NULL values in that column.
  - Made the column `price` on table `Plugin` required. This step will fail if there are existing NULL values in that column.
  - Made the column `title` on table `Plugin` required. This step will fail if there are existing NULL values in that column.
  - Made the column `version` on table `Plugin` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Plugin` DROP COLUMN `bStatsId`,
    DROP COLUMN `discordId`,
    DROP COLUMN `donationLink`,
    DROP COLUMN `languages`,
    DROP COLUMN `optionalDeps`,
    DROP COLUMN `requiredDeps`,
    DROP COLUMN `sourceLink`,
    ADD COLUMN `downloads` INTEGER NOT NULL DEFAULT 0,
    MODIFY `category` VARCHAR(191) NOT NULL,
    MODIFY `fileUrl` VARCHAR(191) NOT NULL,
    MODIFY `price` DOUBLE NOT NULL DEFAULT 0,
    MODIFY `title` VARCHAR(191) NOT NULL,
    MODIFY `version` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `updatedAt`,
    MODIFY `name` VARCHAR(191) NULL;
