import logo from './logo.svg';
import './App.css';

const number = 5555;
const singer = {name: 'Dr.Mahfuz' , job: 'singer'}
const singer2 = {name: 'Eva Rahman' , job: 'singer2'}

const singers = [
  {name: 'Dr.Mahfuz' , job: 'singer'},
  {name: 'Eva Rahman' , job: 'singer2'},
  {name: 'Agun' , job: 'sopno'},
  {name: 'Shuvro' , job: 'pathor'}
]


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
        {/* {
          nayoks.map(nayok => <Person name={nayok}></Person>)
        } */}

        {
          singers.map(singer => <Person name={singer.name}></Person>)
        }

        {/* <Person name={nayoks[0]} nayika="moushumi"></Person>
        <Person name={nayoks[1]} nayika="cheka"></Person>
        <Person name={nayoks[2]} nayika="kopila"></Person> */}
        <h5> New component. YAY </h5>
        <p> Rock mama React mama. </p>

        <Friend movie="shingam" phone="017777"></Friend>
        <Friend phone="019999"></Friend>

    </div>
  );
}

function Person (props){
  // console.log(props);
  return (
    <div className='person'>
      {/* <h1> Sakib Al Hasan </h1> */}
      <h1> {props.name}</h1>
      {/* <p> Profession: Cricket </p> */}
      {/* <p> Nayika; {props.nayika}</p> */}
    </div>
  )
}

function Friend (props){
  // console.log(props);
  return(
    <div className='container'>
      {/* <h3> Name: Ajay Devgun</h3> */}
      {/* <p> job: maramari </p> */}
      <h3> Name: {props.movie}</h3>
      <p> Phone: {props.phone}</p>
    </div>
  )
}

export default App;
