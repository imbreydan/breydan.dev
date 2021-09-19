let playingElement = document.getElementById("playing");

let lastFetch = 0;

async function getPlaying() {
    if (Date.now() - lastFetch <= 2000) {
        await sleep(2000);
    }
    await fetch('https://api.breydan.dev/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: `{
                    spotifyGetCurrentSongPlaying {
                      artist {
                        name
                      }
                      title
                      previewUrl
                      externalUrl
                      currentProgress
                      isCurrentlyPlaying
                      album {
                        name
                      }
                    }
                  }`,
                variables: {
                    now: new Date().toISOString(),
                },
            }),
        })
        .then((res) => res.json())
        .then((result) => {
            if (result.data.spotifyGetCurrentSongPlaying === null) {
                playingElement.innerText = "Not Listening - Spotify"
                return;
            }
            var playing = result.data.spotifyGetCurrentSongPlaying.isCurrentlyPlaying;
            var artist = result.data.spotifyGetCurrentSongPlaying.artist.name;
            var title = result.data.spotifyGetCurrentSongPlaying.title;
            if (playing) {
                playingElement.innerText = `${title} - ${artist}`
                return;
            }
            playingElement.innerText = `${title} - ${artist} \n(Not Playing)`
        });

    lastFetch = Date.now();
    setTimeout(getPlaying(), 30000);
}

getPlaying();