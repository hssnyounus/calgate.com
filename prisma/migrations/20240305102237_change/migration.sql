/*
  Warnings:

  - Made the column `title` on table `companyservice` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `companyservice` MODIFY `title` VARCHAR(191) NOT NULL,
    MODIFY `description` TEXT NULL;
