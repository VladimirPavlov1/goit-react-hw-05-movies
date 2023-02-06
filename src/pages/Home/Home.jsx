


export const Home = ({trendMovies}) => {

    return (
        <div>
            <h2>Trending today</h2>
            <ul>
                {trendMovies.map(movie=>{
                    return <li key={movie.id}>{movie.name}</li>
                })}
            </ul>
        </div>
    )
}