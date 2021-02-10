import Players from './Players';
import cardiff from '../images/CardiffCity.png';
import swansea from '../images/SwanseaCity.png';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: 'auto',
  },
}));

const Fixture = ({ fixtureData }) => {
  const classes = useStyles();

  return (
    <>
      <div>{fixtureData.location}</div>
      <div>{fixtureData.date}</div>
      <hr />

      <Avatar alt='CardiffCity' src={cardiff} className={classes.large} />

      <h3>{fixtureData.teams[0].name}</h3>
      <h4>Formation: {fixtureData.teams[0].formation}</h4>
      <div>{fixtureData.teams[0].homeTeam && <h5>Home Team</h5>}</div>
      <Players playerData={fixtureData.teams[0]} />
      <hr />
      <Avatar alt='CardiffCity' src={swansea} className={classes.large} />
      <h3>{fixtureData.teams[1].name}</h3>
      <h4>Formation: {fixtureData.teams[1].formation}</h4>
      <Players playerData={fixtureData.teams[1]} />
    </>
  );
};

export default Fixture;
