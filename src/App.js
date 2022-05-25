import logo from './logo.svg';
import './App.css';
import {Button} from "./components/Button"
import {Logo} from "./components/Logo"
import {Link} from "./components/Link"

function App() {
  let word = [{props:"Services"},{props:"Projects"},{props:"About"}] ;
  return (
    <div className="App">
      <div className='navbar'>
       <div className="logo">
       <Logo />
       </div>
       <div className="link">
       <Link {...word[0]}/>
       <Link {...word[1]}/>
       <Link {...word[2]}/>
       </div>
       <div className="btn">
       <Button />
       </div>
     </div>
    </div>
  );
}

export default App;
