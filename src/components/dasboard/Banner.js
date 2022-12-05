import React,{useState,useEffect} from 'react';
import bsUrl from '../../bdomain';
import './Banner.css';
import { Icon } from 'react-icons-kit';
import {playCircle} from 'react-icons-kit/fa/playCircle';
import {info} from 'react-icons-kit/fa/info';

function Banner({fetch}) {

    const [movies,setMovies] = useState([])  

    async function fetchdata(){
    const datas= await bsUrl.get(fetch)
    setMovies(datas.data.results[Math.floor(Math.random() * datas.data.results.length -1)])
    }
    useEffect(()=>{
      fetchdata()
    },[])
    console.log(movies);  
    function truncate(str,n){
     return str?.length>n ? str.substr(0,n-1)+'...' : str
    }
  return (
    <header className='bannerhead'
    style ={{
      backgroundImage:`url("https://image.tmdb.org/t/p/original/${movies.backdrop_path}")`,
      backgroundSize:"cover",
      backgroundPosition:"center"
    }}>
       <div className="fadebottom">
      <div className='banner-content'>
        <h1 className='banner-title'>
          {movies.name}
        </h1>
        <h2 className='banner-description'>
          { truncate(movies?.overview,150)}
        </h2>

        <div className="buttons">
          <button className="play">
            <Icon className='icon  ' icon={playCircle} />
            <span>Play</span>
          </button>
          <button className="more">
            <Icon className='icon' icon={info} />
            <span>Info</span>
          </button>
        </div>

       </div>

      </div>

     </header>
  )
}

export default Banner