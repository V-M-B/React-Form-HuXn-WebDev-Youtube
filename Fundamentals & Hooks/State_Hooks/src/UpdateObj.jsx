import React from 'react'
import { useState } from 'react'

export default function UpdateObj() {
    const [movie,setMovie]=useState({
        title:"Equalizer 1",
        ratings:7, 
        title:"Equalizer 2",
        ratings:7
    })

    const handleRating=()=>{
        // const copyMovie={
        //     ...movie,
        //     ratings:5
        // }
        // setMovie(copyMovie)
        setMovie({...movie,ratings:5})
    }
    return (
        <>
        <h1>Mpvie Title: {movie.title} </h1>
        <p>Movier Rating: {movie.ratings} </p>
        <button onClick={handleRating}>Change Ratting</button>
            
        </>
    )
}


// ARRAY OF OBECTS

// export default function UpdateObj() {
//     const [movies, setMovies] = useState([
//         { id: 1, title: "Equalizer 1", ratings: 7 },
//         { id: 2, title: "Equalizer 2", ratings: 7 }
//     ]);

//     const handleRating = (id) => {
//         setMovies((prevMovies) =>
//             prevMovies.map((movie) =>
//                 movie.id === id ? { ...movie, ratings: 5 } : movie
//             )
//         );
//     };

//     return (
//         <>
//             {movies.map((movie) => (
//                 <div key={movie.id}>
//                     <h1>Movie Title: {movie.title}</h1>
//                     <p>Movie Rating: {movie.ratings}</p>
//                     <button onClick={() => handleRating(movie.id)}>
//                         Change Rating
//                     </button>
//                 </div>
//             ))}
//         </>
//     );
// }
