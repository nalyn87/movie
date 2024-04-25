const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NWI5NGFhM2NlYmVlNTE3MDA1OGZkNTE4YmYyMzdmOSIsInN1YiI6IjY2MjhlMTQwZTI5NWI0MDE0YTlhM2EyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.92T_Xg7sAwljnOVmTCWxLkYMWTXdvllzp8EVPjlWVv0'
    }
};


async function movieData() {
    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
    const data = await response.json();
    // console.log(data);

    foreach (let i = 0; i < data['results'].length; i++) {
        console.log(data['results'][i]['title']);
        console.log(data['results'][i]['overview']);
        console.log(data['results'][i]['poster_path']);
        console.log(data['results'][i]['vote_average']);

        const newDiv = document.createElement('div');
        const movieCard = document.getElementsByTagName('div').innerHTML(`
        <div class="col">
            <div class="card h-100">
                <img src="${poster_path}" class="card-img-top" alt="이미지 준비중">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${overview}</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-body-secondary">${vote_average}</small>
                    </div>
            </div>
        </div>
        `);
        append
    };


};

movieData();

// .then(response => console.log(response["results"][0]["title"]))
// .catch(err => console.error(err));