-- CreateTable
CREATE TABLE "UserSetting" (
    "UserId" TEXT NOT NULL PRIMARY KEY,
    "Currency" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Cattegory" (
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'income'
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "amount" REAL NOT NULL,
    "description" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'income',
    "category" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "MonthHistory" (
    "Userid" TEXT NOT NULL,
    "day" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "income" REAL NOT NULL,
    "expense" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "YearHistory" (
    "Userid" TEXT NOT NULL,
    "month" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "income" REAL NOT NULL,
    "expense" REAL NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Cattegory_name_userId_type_key" ON "Cattegory"("name", "userId", "type");

-- CreateIndex
CREATE UNIQUE INDEX "MonthHistory_Userid_day_month_year_key" ON "MonthHistory"("Userid", "day", "month", "year");

-- CreateIndex
CREATE UNIQUE INDEX "YearHistory_Userid_month_year_key" ON "YearHistory"("Userid", "month", "year");
