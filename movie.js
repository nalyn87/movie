const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NWI5NGFhM2NlYmVlNTE3MDA1OGZkNTE4YmYyMzdmOSIsInN1YiI6IjY2MjhlMTQwZTI5NWI0MDE0YTlhM2EyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.92T_Xg7sAwljnOVmTCWxLkYMWTXdvllzp8EVPjlWVv0'
    }
};
// 카드 제작
function makeCard() {
    console.log(getdata());
    document.getElementsByClassName("moviecard")[0].insertAdjacentHTML('beforeend', `
    <div class="col">
        <div class="card h-100">
            <img src="https://image.tmdb.org/t/p/w500${getdata[0].poster_path}" class="card-img-top" alt="이미지 준비중">
                <div class="card-body">
                    <h5 class="card-title">${getdata.title}</h5>
                    <p class="card-text">${getdata.overview}</p>
                </div>
                <div class="card-footer">
                    <small class="text-body-secondary">${getdata.vote_average}</small>
                </div>
        </div>
    </div>
    `)
}


// api 가져오기
async function getdata() {
    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
    const data = await response.json();


    const movieData = [];
    
    for (item of data['results']) {
        const movie = {};
        // console.log(item['title']);
        movie['title'] = item['title'];
        movie['overview'] = item['overview'];
        movie['poster_path'] = item['poster_path'];
        movie['vote_average'] = item['vote_average'];
        movie['movie_id'] = item['id'];

        movieData.push(movie);
    };
    console.log(movieData);
    return movieData;
};

// 출력
const print = async () => {
    const data = await getdata();
    let count = 0;
    data.forEach(item => {
        makeCard();
        // count++;
        // console.log(count);
        // console.log(item);
    });
}

print();
// .then(response => console.log(response["results"][0]["title"]))
// .catch(err => console.error(err));