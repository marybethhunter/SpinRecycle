import React, { useState, useEffect } from "react";
import Record from "../components/Record";
import getAllRecords from "../data/recordData";

export default function Shop() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getAllRecords().then((recordsArray) => {
      if (isMounted) setRecords(recordsArray);
    });
  });

  return (
    <>
      {records.map((record) => (
        <Record key={record.RecordId} record={record} />
      ))}
    </>
  );
}
