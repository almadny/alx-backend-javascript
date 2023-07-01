export default function handleResponseFromAPI(promise){
	return promise
		.then((reponse) => ({
			status: 200,
			body: 'success'
		}))
	.catch((error) => {
		console.error(new Error());
	})
	.finally(() => {
		console.log('Got a response from the API');
	});
}
