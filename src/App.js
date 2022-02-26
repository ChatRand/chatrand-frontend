import './App.css';
import NavBar from './components/Navigation/NavBar';
import ChatPlace from './components/Chat/ChatPlace';

function App() {
  return (
    <div className="app font-wholefont bg-secondary text-textcolor"> 
      <NavBar />
      <ChatPlace/>
    </div>
  );
}

export default App;
