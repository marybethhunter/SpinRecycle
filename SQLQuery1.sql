/*******************************************************************************
   Drop database if it exists
********************************************************************************/
IF EXISTS (SELECT name FROM master.dbo.sysdatabases WHERE name = N'SpinRecycle')
BEGIN
    ALTER DATABASE [SpinRecycle] SET OFFLINE WITH ROLLBACK IMMEDIATE;
    ALTER DATABASE [SpinRecycle] SET ONLINE;
    DROP DATABASE [SpinRecycle];
END
/*******************************************************************************
   Create database
********************************************************************************/
CREATE DATABASE [SpinRecycle];
GO
USE [SpinRecycle];
GO
/*******************************************************************************
   Create Tables
********************************************************************************/
CREATE TABLE [dbo].[Record]
(
    [RecordId] INT NOT NULL IDENTITY,
    [Title] NVARCHAR(160) NOT NULL,
    [ArtistId] INT NOT NULL,
    [GenreId] INT NOT NULL,
    [Image] TEXT,
    [Price] DECIMAL(5,2) NOT NULL,
    CONSTRAINT [PK_Record] PRIMARY KEY CLUSTERED ([RecordId])
);
GO
CREATE TABLE [dbo].[Artist]
(
    [ArtistId] INT NOT NULL IDENTITY,
    [Name] NVARCHAR(160)
    CONSTRAINT [PK_Artist] PRIMARY KEY CLUSTERED ([ArtistId])
);
GO
CREATE TABlE [dbo].[Genre]
(
    [GenreId] INT NOT NULL IDENTITY,
    [Name] NVARCHAR(120),
    CONSTRAINT [PK_Genre] PRIMARY KEY CLUSTERED ([GenreId])
);
GO
/*******************************************************************************
   Populate Tables
********************************************************************************/
INSERT INTO [dbo].[Genre] ([Name]) VALUES (N'Rock');
INSERT INTO [dbo].[Genre] ([Name]) VALUES (N'Rap');
INSERT INTO [dbo].[Genre] ([Name]) VALUES (N'Metal');
INSERT INTO [dbo].[Genre] ([Name]) VALUES (N'Punk');
INSERT INTO [dbo].[Genre] ([Name]) VALUES (N'Alternative');
INSERT INTO [dbo].[Genre] ([Name]) VALUES (N'Pop');
INSERT INTO [dbo].[Genre] ([Name]) VALUES (N'Country');
INSERT INTO [dbo].[Genre] ([Name]) VALUES (N'R&B');
INSERT INTO [dbo].[Genre] ([Name]) VALUES (N'Electronic');
INSERT INTO [dbo].[Genre] ([Name]) VALUES (N'Classical');
INSERT INTO [dbo].[Genre] ([Name]) VALUES (N'Jazz');
INSERT INTO [dbo].[Genre] ([Name]) VALUES (N'Blues');
INSERT INTO [dbo].[Genre] ([Name]) VALUES (N'Comedy');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'The Rolling Stones');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'AC/DC');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'The Beatles');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'Clutch');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'Nirvana');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'Dr Dre');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'Eminem');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'Snoop Dogg');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'Jay-Z');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'OutKast');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'Korn');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'Slayer');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'Motorhead');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'Slipknot');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'Avenged Sevenfold');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'The Clash');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'Ramones');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'Green Day');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'Blink-182');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'The Offspring');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'Foo Fighters');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'Radiohead');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'Pearl Jam');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'Red Hot Chili Peppers');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'Weezer');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'Michael Jackson');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'Britany Spears');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'Whitney Houston');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'Adele');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'Rihanna');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'Garth Brooks');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'Johnny Cash');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'Darius Rucker');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'Hank Williams');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'Kenny Chesney');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'Marvin Gaye');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'Barry White');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'Mary J Blige');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'Lionel Richie');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'Usher');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'Daft Punk');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'deadmau5');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'Nero');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'Skrillex');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'The Crystal Method');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'Johann Sebastian Bach');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'Wolfgang Amadeus Mozart');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'Ludwig van Beethoven');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'Louis Armstrong');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'Miles Davis');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'Nat King Cole');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'Frank Sinatra');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'Weird Al Yankovic');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'The Lonley Island');
INSERT INTO [dbo].[Artist] ([Name]) VALUES (N'Tenacious D');
INSERT INTO [dbo].[Record] (Title, ArtistId, GenreId, Image, Price) Values (N'Let it Bleed', 1, 1, 'https://coverartarchive.org/release/f6d8a428-d098-4e44-9434-97c2e13b0e03/27434134690.jpg', 29.99);