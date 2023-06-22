import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainDiv from './components/MainDiv';
import { useState } from 'react';

function App() {
  const [data , setData] = useState([
      { id : 1 , name : 'ali', age : 20},
      { id : 2 , name : 'hosein', age : 21},
      { id : 3 , name : 'mamad', age : 22},
      { id : 4 , name : 'reza', age : 23}
  ])
  
  return (
    <div className="container-fluid d-flex flex-column">
      <Header />
      <MainDiv data={data} checker={setData} />
    </div>
  );
}

export default App;
