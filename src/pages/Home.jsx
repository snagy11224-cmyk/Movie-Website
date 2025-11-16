import MovieCard from "../components/MovieCard"
import { useState } from "react"
import "../css/Home.css"

function Home(){

const [searchQuery , setSearchQuery]= useState("");
const movies=[
    {id:1 , title:"john wick", release_date:"2025"},
    {id:2 , title:"Terminator", release_date:"1999"},
    {id:3 , title:"The matrix", release_date:"1998"}
]

const handleSearch =(e) => {
e.preventDefault()
alert(searchQuery);
}

return <div className="home">

<form onSubmit={handleSearch} className="search-form"> 
    <input type="text" placeholder="Search for movies" className="search-input" value={searchQuery}
    onChange={(e)=>setSearchQuery(e.target.value)}
    />
    <button type="submit" className="search-button">search</button>
</form>

<div className="movies-grid"> 
{movies.map((movie) => movie.title.startsWith(searchQuery) &&
    (
<MovieCard movie={movie} key={movie.id} />
))}
</div>
</div>

}

export default Home 