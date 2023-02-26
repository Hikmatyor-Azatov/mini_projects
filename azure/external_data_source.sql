USE DemoDB;

CREATE MASTER KEY ENCRYPTION BY PASSWORD = 'Welcome1$Hello@';

CREATE DATABASE SCOPED CREDENTIAL sqlondemand
WITH IDENTITY = 'SHARED ACCESS SIGNATURE',
    SECRET = '';


CREATE EXTERNAL DATA SOURCE SqlOnDemandDemo
WITH (
    LOCATION = 'https://sqlondemandstorage.blob.core.windows.net',
    CREDENTIAL = sqlondemand
);