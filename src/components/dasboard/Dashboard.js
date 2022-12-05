import React from 'react';
import Row from './Row';
import Banner from './Banner'
import requests from '../../request';
import Navb from './Navb';

function Dashboard() {
  return (
    <div>
        <Navb/>
        <Banner fetch={requests.fetchNetflixOriginals}/>
        <Row title="NetflixOriginals"
        fetch={requests.fetchNetflixOriginals}/>
        <Row title="Trending"
        fetch={requests.fetchTrending}/>
        <Row title="TopRated"
        fetch={requests.fetchTopRated}/>
        <Row title="Action-Movies"
        fetch={requests.fetchActionMovies}/>
        <Row title="Comedy-Movies"
        fetch={requests.fetchComedyMovies}/>
        <Row title="Horror-Movies"
        fetch={requests.fetchHorrorMovies}/>
        <Row title="Romance-Movies"
        fetch={requests.fetchRomanceMovies}/>
        <Row title="Documentaries"
        fetch={requests.fetchDocumentaries}/>
    </div>
  )
}

export default Dashboard