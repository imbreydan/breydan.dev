let commitElement = document.getElementById("commit");
let dateElement = document.getElementById("year")

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

function setCopyrightYear() {
    dateElement.innerText = new Date().getFullYear()
}

setCopyrightYear()
getLatestCommit();