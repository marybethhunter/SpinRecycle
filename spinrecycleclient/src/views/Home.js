import React from 'react';
const Home = () => {
	function getData(){
		fetch("https://localhost:7115/api/records", {
			method:'GET',
			headers:{
				"Accept":'application/json',
				"content-type":'application/json'
			}
		})
		// .then(res => res.json())
		// .then(resJson => {
		// 	console.log('GET RECORDS RESULTS',resJson)
		// })
	}

	return (
		<>
		<h1>You are here in Record time!</h1>
		{/* <button onClick={() => getData()}>Click to get records</button> */}
		
		</>
	)
}
export default Home;
