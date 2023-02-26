CREATE SCHEMA NYCTaxi;

CREATE EXTERNAL TABLE NYCTaxi.PassengersCountStats
WITH (
    LOCATION = 'sysnapsedemo/NYCTaxi/Aggdata/',
    DATA_SOURCE = demoDataSource,
    FILE_FORMAT = ParquetFileFormat
)
AS 
    SELECT 
        PassengerCount,
        SUM(TripDistanceMiles) AS SumTripDistance,
        AVG(TripDistanceMiles) AS AvgTripDistance,
    FROM
        OPENROWSET(
            BULK 'http://...',
            FORMAT = 'PARQUET'
        ) AS [rows]
    WHERE TripDistanceMiles > 0 AND PassengerCount > 0
    GROUP BY PassengerCount;

GO;


