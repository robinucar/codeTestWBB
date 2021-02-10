import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_FIXTURE } from './redux/actions/types';
import { getFixture, getPlayer } from './helpers/apiServices';
import Fixture from './components/Fixture';

import './App.css';

const App = () => {
  //useDispatch
  const dispatch = useDispatch();
  //getting state
  const fixture = useSelector((state) => state.fixture);
  //loading
  const [load, setLoad] = useState(false);

  useEffect(() => {
    getData('1234567');
  }, []);

  const getData = async (fixtureId) => {
    getFixture(fixtureId)
      .then(async (res) => {
        //home Team
        const team1 = res.teams[0].players.map(async (d, i) => {
          //getting hometeam players detail with player id
          const player = await getPlayer(d.playerId);
          return {
            playerId: d.playerId,
            position: d.position,
            playerName: player.name,
            playerNo: player.played,
            playerGoals: player.goals,
            playerRedCards: player.redCards,
            playerYellowCards: player.yellowCards,
          };
        });
        //second Team
        const team2 = res.teams[1].players.map(async (d, i) => {
          //getting second team players details with player id
          const player = await getPlayer(d.playerId);
          return {
            playerId: d.playerId,
            position: d.position,
            playerName: player.name,
            playerNo: player.played,
            playerGoals: player.goals,
            playerRedCards: player.redCards,
            playerYellowCards: player.yellowCards,
          };
        });
        //teams informations
        const resultTeam1 = Promise.all(team1);
        const resultTeam2 = Promise.all(team2);

        res.teams[0].players = await resultTeam1;
        res.teams[1].players = await resultTeam2;

        //dispatch data to store
        dispatch({ type: ADD_FIXTURE, payload: res });

        setLoad(true);
      })
      .catch((err) => console.error(err));
  };

  if (load) {
    return (
      <div className='app'>
        <Fixture fixtureData={fixture} />
      </div>
    );
  } else {
    return <div className='app'>Loading...</div>;
  }
};

export default App;
