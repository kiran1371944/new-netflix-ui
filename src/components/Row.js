import React,{useState,useEffect} from 'react'
import bsUrl from '../bdomain'
import './Row.css';
const base_url = "https://image.tmdb.org/t/p/original/";
  
function Row({title,fetch}) {
  
  const [movies,setMovies] = useState([])  

  async function fetchdata(){
  const datas= await bsUrl.get(fetch)
  setMovies(datas.data.results)

  }
  useEffect(()=>{
    fetchdata()
  },[])
  console.log(movies);
  return (
    <div className='row'>
          <h2>{title}</h2>
          <div className='posters'>
            {
              movies.map(movie=>(
              
                <div className='poster-div'>
                <img className='poster'
                  src={`${base_url}${movie.backdrop_path}`}
                  alt={movie.name || movie.title} />
                    <div className='title'>
                    <h6>{movie.name || movie.title}</h6>
                    </div>
                </div>
                
              ))
            }
          </div>
    </div>
  )
}

export default Row