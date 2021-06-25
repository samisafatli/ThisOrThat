import List from './Components/List'
import Header from './Components/Header'
import './App.css';

function App() {
  const imageURL = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftous-logos.com%2Fwp-content%2Fuploads%2F2018%2F03%2FLogo-Harry-Potter.jpg&f=1&nofb=1'
  const item = {option: 'salada', image: imageURL}
  const options = [item, item]
  return (
    <div className="App">
      <Header></Header>
      <List options={options}></List>
    </div>
  );
}

export default App;
