import './App.css';
import PersonCard from './componentes/PersonCard';

function App() {
  return (
    <div>
      
      <PersonCard firstName="Doe" lastName="Jane" age={45} hairColor="Black" ></PersonCard>
      
      <PersonCard firstName="John" lastName="Smith" age={88} hairColor="Brown" ></PersonCard>

      <PersonCard firstName="Millard" lastName="Filmore" age={50} hairColor="Brown" ></PersonCard>

      <PersonCard firstName="Maria" lastName="Smith" age={62} hairColor="Brown" ></PersonCard> 

    </div>
  
  );
}

export default App;
