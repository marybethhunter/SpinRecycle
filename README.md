# Vinyl Destination 🎶

## Get Started:

```javascript
 $ git clone https://github.com/marybethhunter/SpinRecycle.git
 $ cd SpinRecycle
```

## About
* Vinyl Destination is an online store where a user can buy vinyl records.

## Features: 

#### CRUD:
* Users have a cart they can create a record entry to - adding the cart to the record.
* Users can udpate their cart by deleting or adding records to it.
* Users can see all records available for purchase.
* New records can be added to the database by going to the /addrecord path.

## Relevant Links:
* [Figma](https://www.figma.com/file/sqOo6ek4RWE12ENouMExWa/SpinRecycle?node-id=0%3A1)
*  [ERD](https://dbdiagram.io/d/624e2da4d043196e390d4f30)
* [Project Board](https://github.com/marybethhunter/SpinRecycle/projects/1)

## Code Snippets:

```csharp
        public List<Record> GetCartRecords()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT c.RecordId as CartRecordId,
                        r.RecordId as RecordId,
                        r.Title,
                        r.Artist,
                        r.Genre,
                        r.Price,
                        r.Image
                        FROM Cart as c
                        LEFT JOIN Record as r
                        ON c.RecordId = r.RecordId
                     ";

                    SqlDataReader reader = cmd.ExecuteReader();
                    List<Record> records = new List<Record>();
                    while (reader.Read())
                    {
                        if (reader["RecordId"] != DBNull.Value)
                        {
                            Record record = new Record
                            {
                                RecordId = reader.GetInt32(reader.GetOrdinal("RecordId")),
                                Title = reader.GetString(reader.GetOrdinal("Title")),
                                Artist = reader.GetString(reader.GetOrdinal("Artist")),
                                Genre = reader.GetString(reader.GetOrdinal("Genre")),
                                Price = reader.GetDecimal(reader.GetOrdinal("Price")),
                                Image = reader.GetString(reader.GetOrdinal("Image")),
                            };
                            records.Add(record);
                        }
                    }
                    reader.Close();
                    return records;
                }
            }
        }
```

## Technology Used:
* Javascript
* React
* Firebase
* Postman
* Figma
* Axios
* SQL
* C#
* Reactstrap
* Styled Components
* Swagger

## Screenshots:

<img width="959" alt="2022-05-14" src="https://user-images.githubusercontent.com/86667443/168437327-97034527-f72b-4816-8992-865c9717a1d8.png">
<img width="960" alt="2022-05-14 (1)" src="https://user-images.githubusercontent.com/86667443/168437335-18c84c80-746b-4f37-94ed-61f02a2f4044.png">
<img width="956" alt="2022-05-14 (2)" src="https://user-images.githubusercontent.com/86667443/168437343-ff957f65-1496-445a-be81-f9b829a0d59e.png">
<img width="947" alt="2022-05-14 (3)" src="https://user-images.githubusercontent.com/86667443/168437353-3db24ec0-4351-4189-9f8e-3ba48cae3d0f.png">
<img width="956" alt="2022-05-14 (4)" src="https://user-images.githubusercontent.com/86667443/168437361-3103a172-b2c7-4d39-8ba7-0d7764418a82.png">

## Contributors: [Craig Wellspring](https://github.com/Craig-Wellspring), [Charnissa McKinney](https://github.com/Nissa2424), [Luke Allen](https://github.com/lukus2013),  [Mary Beth Hunter](https://github.com/marybethhunter)
