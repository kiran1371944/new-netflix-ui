import './App.css';
import Row from './components/Row';
import requests from './request';
import Banner from './components/Banner';
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <Nav/>
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
  );
}

export default App;
