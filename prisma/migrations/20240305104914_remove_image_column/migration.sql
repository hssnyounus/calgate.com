/*
  Warnings:

  - You are about to drop the column `images` on the `companyserviceimages` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `companyservices` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `companyserviceimages` DROP COLUMN `images`,
    ADD COLUMN `image` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `companyservices` DROP COLUMN `image`;
