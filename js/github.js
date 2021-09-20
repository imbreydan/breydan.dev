let commitElement = document.getElementById("commit");

async function getLatestCommit() {
    await fetch('https://api.github.com/repos/imbreydan/breydan.dev/git/refs/heads/master', {
            method: 'GET',
        })
        .then((res) => res.json())
        .then(async(result) => {
            let commitUrl = result.object.url;
            await fetch(commitUrl, {
                    method: 'GET',
                })
                .then((cRes) => cRes.json())
                .then((cResult) => {
                    commitElement.innerHTML = `<i class="far fa-code-commit"></i> ` + cResult.message;
                    commitElement.setAttribute('href', cResult.html_url);
                });
        });
}

getLatestCommit();