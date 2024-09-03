import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './components/card'
import { jsx } from 'react/jsx-runtime'

function App() {
  const [data, setData] = useState([]);
  const API_URL = import.meta.env.API_URL;
  console.log(API_URL);
  
  useEffect(() => {
    const fetchData = async () => {
      console.log('fetching data');
      const response = await fetch(API_URL);
      const result = await response.json();
      console.log(result);
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <>
    {data.map(summoner => (
      <Card cardprops={{
        imageID: summoner.iconId,
        gameName: summoner.name,
        tier: summoner.tier,
        rank: summoner.rank,
        leaguePoints: summoner.leaguePoints,
        wins: summoner.wins,
        losses: summoner.losses
      }}></Card>
    ))}
    </>
  )
}

export default App
