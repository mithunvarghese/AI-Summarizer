/*
  Warnings:

  - You are about to alter the column `rating` on the `reviews` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.

*/
-- DropIndex
DROP INDEX `products_name_key` ON `products`;

-- AlterTable
ALTER TABLE `products` MODIFY `name` VARCHAR(255) NOT NULL,
    MODIFY `description` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `reviews` MODIFY `author` VARCHAR(255) NOT NULL,
    MODIFY `rating` TINYINT NOT NULL,
    MODIFY `content` TEXT NOT NULL;
