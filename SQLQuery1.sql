SELECT c.RecordId AS CartRecordId, 
r.RecordId AS RecordId,
a.[Name] AS ArtistName,
g.[Name] AS Genre,
r.Title, 
Price
            FROM Cart As c
                                      LEFT JOIN Record r 
                                      ON c.RecordId = r.RecordId 
                                      LEFT JOIN Artist as a
                                      ON r.ArtistId = a.ArtistId
                                      LEFT JOIN Genre as g
                                      ON r.GenreId = g.GenreId