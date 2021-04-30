import './App.css';
import Put from './components/Put';
import Get from './components/Get';
import Patch from './components/Patch';
import Patch from './components/Delete';

function App() {
  return (
    <div class="App">
      <Put/>
      <Get/>
      <Patch/>
      <Delete/>
    </div>
  );
}
export default App; 
