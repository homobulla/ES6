function timeout(ms) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}

async function prin(value, ms) {
	await timeout(ms);
	console.log(value);
}

prin('hahahha', 5000);
