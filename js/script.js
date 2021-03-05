function copyDiscord() {
    const discord = document.getElementsByClassName("discord")[0]
    if (discord.innerText != "breydan#8605") return;

	const element = document.createElement('textarea');
	element.value = "breydan#8605";
	document.body.appendChild(element);
	element.select();
	document.execCommand('copy');
	document.body.removeChild(element);
	discord.innerText = "copied!";

	setTimeout(() => {
		discord.innerText = "breydan#8605";
	}, 1000)
}

function copyBtc() {
	const element = document.createElement('textarea');
	element.value = "bc1q3lj0v2d56j24lupvwvx8tw8nlnut2u3xkm7ac6";
	document.body.appendChild(element);
	element.select();
	document.execCommand('copy');
	document.body.removeChild(element);
}