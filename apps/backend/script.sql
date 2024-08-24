-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "ConfigurationType" AS ENUM ('GAMING', 'OFFICE', 'WORK', 'HIGH_END', 'DEFAULT');

-- CreateEnum
CREATE TYPE "ComputerType" AS ENUM ('DESKTOP', 'LAPTOP');

-- CreateEnum
CREATE TYPE "ComponentType" AS ENUM ('MOTHERBOARD', 'PROCESSOR', 'GPU', 'RAM', 'STORAGE', 'POWERSUPPLY', 'PCCASE');

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "userType" "UserType" NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Component" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "componentType" "ComponentType" NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "manufacturer" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Component_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "userType" "UserType" NOT NULL DEFAULT 'USER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Motherboard" (
    "id" TEXT NOT NULL,
    "socket" TEXT NOT NULL,
    "formFactor" TEXT NOT NULL,
    "ramSlots" INTEGER NOT NULL,
    "ramType" TEXT NOT NULL,
    "gpuInterface" TEXT NOT NULL,
    "stroageBusType" TEXT NOT NULL,
    "componentId" TEXT NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Motherboard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Processor" (
    "id" TEXT NOT NULL,
    "architecture" TEXT NOT NULL,
    "cores" INTEGER NOT NULL,
    "threads" INTEGER NOT NULL,
    "bits" INTEGER NOT NULL,
    "socket" TEXT NOT NULL,
    "componentId" TEXT NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Processor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GPU" (
    "id" TEXT NOT NULL,
    "memory" INTEGER NOT NULL,
    "powerConnector" TEXT NOT NULL,
    "interface" TEXT NOT NULL,
    "power" INTEGER NOT NULL,
    "componentId" TEXT NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "GPU_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RAM" (
    "id" TEXT NOT NULL,
    "memoryType" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "computerType" "ComputerType" NOT NULL,
    "componentId" TEXT NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "RAM_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Storage" (
    "id" TEXT NOT NULL,
    "storageType" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "busType" TEXT NOT NULL,
    "componentId" TEXT NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Storage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PowerSupply" (
    "id" TEXT NOT NULL,
    "powerOutput" INTEGER NOT NULL,
    "efficiency" TEXT NOT NULL,
    "formFactor" TEXT NOT NULL,
    "componentId" TEXT NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "PowerSupply_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PCCase" (
    "id" TEXT NOT NULL,
    "formFactor" TEXT NOT NULL,
    "componentId" TEXT NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "PCCase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ParcialPCConfiguration" (
    "id" TEXT NOT NULL,
    "configurationType" "ConfigurationType" NOT NULL,
    "motherboardId" TEXT,
    "processorId" TEXT,
    "gpuId" TEXT,
    "powerSupplyId" TEXT,
    "pcCaseId" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "ParcialPCConfiguration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PCConfiguration" (
    "id" TEXT NOT NULL,
    "totalPrice" DOUBLE PRECISION NOT NULL,
    "configurationType" "ConfigurationType" NOT NULL,
    "motherboardId" TEXT NOT NULL,
    "processorId" TEXT NOT NULL,
    "gpuId" TEXT NOT NULL,
    "powerSupplyId" TEXT NOT NULL,
    "pcCaseId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "PCConfiguration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ParcialPCConfigurationToRAM" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ParcialPCConfigurationToStorage" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PCConfigurationToRAM" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PCConfigurationToStorage" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Motherboard_componentId_key" ON "Motherboard"("componentId");

-- CreateIndex
CREATE UNIQUE INDEX "Processor_componentId_key" ON "Processor"("componentId");

-- CreateIndex
CREATE UNIQUE INDEX "GPU_componentId_key" ON "GPU"("componentId");

-- CreateIndex
CREATE UNIQUE INDEX "RAM_componentId_key" ON "RAM"("componentId");

-- CreateIndex
CREATE UNIQUE INDEX "Storage_componentId_key" ON "Storage"("componentId");

-- CreateIndex
CREATE UNIQUE INDEX "PowerSupply_componentId_key" ON "PowerSupply"("componentId");

-- CreateIndex
CREATE UNIQUE INDEX "PCCase_componentId_key" ON "PCCase"("componentId");

-- CreateIndex
CREATE UNIQUE INDEX "ParcialPCConfiguration_userId_key" ON "ParcialPCConfiguration"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "_ParcialPCConfigurationToRAM_AB_unique" ON "_ParcialPCConfigurationToRAM"("A", "B");

-- CreateIndex
CREATE INDEX "_ParcialPCConfigurationToRAM_B_index" ON "_ParcialPCConfigurationToRAM"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParcialPCConfigurationToStorage_AB_unique" ON "_ParcialPCConfigurationToStorage"("A", "B");

-- CreateIndex
CREATE INDEX "_ParcialPCConfigurationToStorage_B_index" ON "_ParcialPCConfigurationToStorage"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PCConfigurationToRAM_AB_unique" ON "_PCConfigurationToRAM"("A", "B");

-- CreateIndex
CREATE INDEX "_PCConfigurationToRAM_B_index" ON "_PCConfigurationToRAM"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PCConfigurationToStorage_AB_unique" ON "_PCConfigurationToStorage"("A", "B");

-- CreateIndex
CREATE INDEX "_PCConfigurationToStorage_B_index" ON "_PCConfigurationToStorage"("B");

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Motherboard" ADD CONSTRAINT "Motherboard_componentId_fkey" FOREIGN KEY ("componentId") REFERENCES "Component"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Processor" ADD CONSTRAINT "Processor_componentId_fkey" FOREIGN KEY ("componentId") REFERENCES "Component"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GPU" ADD CONSTRAINT "GPU_componentId_fkey" FOREIGN KEY ("componentId") REFERENCES "Component"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RAM" ADD CONSTRAINT "RAM_componentId_fkey" FOREIGN KEY ("componentId") REFERENCES "Component"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Storage" ADD CONSTRAINT "Storage_componentId_fkey" FOREIGN KEY ("componentId") REFERENCES "Component"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PowerSupply" ADD CONSTRAINT "PowerSupply_componentId_fkey" FOREIGN KEY ("componentId") REFERENCES "Component"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PCCase" ADD CONSTRAINT "PCCase_componentId_fkey" FOREIGN KEY ("componentId") REFERENCES "Component"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParcialPCConfiguration" ADD CONSTRAINT "ParcialPCConfiguration_motherboardId_fkey" FOREIGN KEY ("motherboardId") REFERENCES "Motherboard"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParcialPCConfiguration" ADD CONSTRAINT "ParcialPCConfiguration_processorId_fkey" FOREIGN KEY ("processorId") REFERENCES "Processor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParcialPCConfiguration" ADD CONSTRAINT "ParcialPCConfiguration_gpuId_fkey" FOREIGN KEY ("gpuId") REFERENCES "GPU"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParcialPCConfiguration" ADD CONSTRAINT "ParcialPCConfiguration_powerSupplyId_fkey" FOREIGN KEY ("powerSupplyId") REFERENCES "PowerSupply"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParcialPCConfiguration" ADD CONSTRAINT "ParcialPCConfiguration_pcCaseId_fkey" FOREIGN KEY ("pcCaseId") REFERENCES "PCCase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParcialPCConfiguration" ADD CONSTRAINT "ParcialPCConfiguration_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PCConfiguration" ADD CONSTRAINT "PCConfiguration_motherboardId_fkey" FOREIGN KEY ("motherboardId") REFERENCES "Motherboard"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PCConfiguration" ADD CONSTRAINT "PCConfiguration_processorId_fkey" FOREIGN KEY ("processorId") REFERENCES "Processor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PCConfiguration" ADD CONSTRAINT "PCConfiguration_gpuId_fkey" FOREIGN KEY ("gpuId") REFERENCES "GPU"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PCConfiguration" ADD CONSTRAINT "PCConfiguration_powerSupplyId_fkey" FOREIGN KEY ("powerSupplyId") REFERENCES "PowerSupply"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PCConfiguration" ADD CONSTRAINT "PCConfiguration_pcCaseId_fkey" FOREIGN KEY ("pcCaseId") REFERENCES "PCCase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PCConfiguration" ADD CONSTRAINT "PCConfiguration_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParcialPCConfigurationToRAM" ADD CONSTRAINT "_ParcialPCConfigurationToRAM_A_fkey" FOREIGN KEY ("A") REFERENCES "ParcialPCConfiguration"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParcialPCConfigurationToRAM" ADD CONSTRAINT "_ParcialPCConfigurationToRAM_B_fkey" FOREIGN KEY ("B") REFERENCES "RAM"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParcialPCConfigurationToStorage" ADD CONSTRAINT "_ParcialPCConfigurationToStorage_A_fkey" FOREIGN KEY ("A") REFERENCES "ParcialPCConfiguration"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParcialPCConfigurationToStorage" ADD CONSTRAINT "_ParcialPCConfigurationToStorage_B_fkey" FOREIGN KEY ("B") REFERENCES "Storage"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PCConfigurationToRAM" ADD CONSTRAINT "_PCConfigurationToRAM_A_fkey" FOREIGN KEY ("A") REFERENCES "PCConfiguration"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PCConfigurationToRAM" ADD CONSTRAINT "_PCConfigurationToRAM_B_fkey" FOREIGN KEY ("B") REFERENCES "RAM"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PCConfigurationToStorage" ADD CONSTRAINT "_PCConfigurationToStorage_A_fkey" FOREIGN KEY ("A") REFERENCES "PCConfiguration"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PCConfigurationToStorage" ADD CONSTRAINT "_PCConfigurationToStorage_B_fkey" FOREIGN KEY ("B") REFERENCES "Storage"("id") ON DELETE CASCADE ON UPDATE CASCADE;

