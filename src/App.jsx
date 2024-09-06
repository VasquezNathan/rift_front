import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './components/card'
import { jsx } from 'react/jsx-runtime'
import Switch from '@mui/material/Switch';
import { FormControlLabel } from '@mui/material'

function App() {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false)
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

  const handleChange = () => {
    setToggle(!toggle);
  }

  return (
    <>
    <div className='hstack'>
      <p style={{marginRight: '0px'}}>Total</p>
      <Switch onChange={handleChange}/>
      <p>Today</p>
    </div>
    {data.map(summoner => (
      <Card cardprops={{
        imageID: summoner.iconId,
        gameName: summoner.name,
        tier: summoner.tier,
        rank: summoner.rank,
        leaguePoints: summoner.leaguePoints,
        wins: summoner.wins,
        losses: summoner.losses,
        pDayWins: summoner.pDayWins,
        pDayLosses: summoner.pDayLosses,
        toggle: toggle
      }}></Card>
    ))}
    </>
  )
}

export default App
