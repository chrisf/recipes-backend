/*
  Warnings:

  - You are about to drop the column `content` on the `Recipe` table. All the data in the column will be lost.
  - You are about to drop the column `published` on the `Recipe` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Recipe" DROP COLUMN "content",
DROP COLUMN "published",
ADD COLUMN     "description" TEXT,
ADD COLUMN     "directions" TEXT,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "ingredients" TEXT;
