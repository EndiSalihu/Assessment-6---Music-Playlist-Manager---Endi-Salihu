

const fetchPlaylist = async () => {
    try {
        const res = await fetch('data.json')
        const musics = await res.json()

        const getTitles = musics.map((d) => d.title)
        console.log(`Unsorted Titles: ${getTitles}`);
        const sortTitles = getTitles.sort()
        console.log(`Sorted Titles: ${sortTitles}`);

        const genresElectronic = musics.filter(music => music.genres.includes('Electronic'))
        console.log(genresElectronic);

        const calcDuration = musics.reduce((total, song) => total + song.durationSec, 0)
        console.log(calcDuration);

        // show data
        console.log(musics);
    } catch (err) {
        console.log(err.message)
    }
}

fetchPlaylist()