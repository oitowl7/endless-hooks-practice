// import logo from './logo.svg';
import './App.css';
import Header from './parts/Header/Header';
import Body from './parts/Body/Body';

function App() {
  return (
    <div className="App">
      <Header />
      <Body url="/images/photo-couch_2x.jpg" />
    </div>
  );
}

export default App;
