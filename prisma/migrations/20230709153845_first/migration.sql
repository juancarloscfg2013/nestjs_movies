-- CreateTable
CREATE TABLE `Genre` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Genre_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Movie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NULL,
    `tagline` VARCHAR(191) NULL,
    `release_date` VARCHAR(191) NULL,
    `poster_path` VARCHAR(191) NULL,
    `overview` VARCHAR(191) NULL,
    `original_title` VARCHAR(191) NULL,
    `original_language` VARCHAR(191) NULL,
    `imdb_id` VARCHAR(191) NULL,
    `homepage` VARCHAR(191) NULL,
    `backdrop_path` VARCHAR(191) NULL,
    `adult` BOOLEAN NULL,
    `video` BOOLEAN NULL,
    `vote_count` INTEGER NULL,
    `budget` INTEGER NULL,
    `revenue` INTEGER NULL,
    `runtime` INTEGER NULL,
    `popularity` DECIMAL(65, 30) NULL,
    `vote_average` DECIMAL(65, 30) NULL,
    `genreId` INTEGER NOT NULL,

    UNIQUE INDEX `Movie_title_key`(`title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Movie` ADD CONSTRAINT `Movie_genreId_fkey` FOREIGN KEY (`genreId`) REFERENCES `Genre`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
