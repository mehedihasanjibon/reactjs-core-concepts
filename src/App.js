import logo from './logo.svg';
import './App.css';

const number = 5555;
const singer = {name: 'Dr.Mahfuz' , job: 'singer'}
const singer2 = {name: 'Eva Rahman' , job: 'singer2'}


const singerStyle = {
  color: "purple",
  backgroundColor: 'white'
}

function App() {
  const nayoks = ['Rubel', 'BappaRaz', 'Kuber' , 'salman Shah' , 'Riyaz', 'Razzak' , 'Anwer']
  return (
    <div className="App">

        <h1> JAX </h1>
        <div className='container'>
            <h3> Hello Dude, react , how are you!!! </h3>
        </div>

        <div className='music'>
          <p>Name: {2222 + number}</p>
          <p style={singerStyle}> Name: {singer.name} {singer.job}</p>
          <p style={{color: 'blue' , backgroundColor: 'yellow'}}> Name: {singer2.name} {singer2.job}</p>
        </div>

        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }

        <Person name={nayoks[0]} nayika="moushumi"></Person>
        <Person name={nayoks[1]} nayika="cheka"></Person>
        <Person name={nayoks[2]} nayika="kopila"></Person>

    </div>
  );
}

function Person (props){
  console.log(props);
  return (
    <div className='person'>
      {/* <h1> Sakib Al Hasan </h1> */}
      <h1> {props.name}</h1>
      {/* <p> Profession: Cricket </p> */}
      {/* <p> Nayika; {props.nayika}</p> */}
    </div>
  )
}

export default App;
