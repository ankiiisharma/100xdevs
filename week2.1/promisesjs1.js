let promise = new Promise(function (resolve, reject) {
	reject('Promise Rejected!!')
})

promise
	.then(function (successMessage) {
		console.log(successMessage);
	})
	.catch(function (errorMessage) {
		console.log(errorMessage);
	});
