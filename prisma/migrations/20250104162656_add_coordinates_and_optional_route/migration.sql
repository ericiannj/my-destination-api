/*
  Warnings:

  - Added the required column `latitude` to the `Poi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `Poi` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Poi" DROP CONSTRAINT "Poi_routeId_fkey";

-- AlterTable
ALTER TABLE "Poi" ADD COLUMN     "latitude" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "longitude" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "routeId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Poi" ADD CONSTRAINT "Poi_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "Route"("id") ON DELETE SET NULL ON UPDATE CASCADE;
