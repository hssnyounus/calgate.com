-- CreateTable
CREATE TABLE `CompanyServiceImages` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `images` VARCHAR(191) NULL,
    `companyServiceId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CompanyServiceImages` ADD CONSTRAINT `CompanyServiceImages_companyServiceId_fkey` FOREIGN KEY (`companyServiceId`) REFERENCES `companyservices`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
