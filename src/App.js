
import './App.css';
import Shomarandeh from "./components/Shomarandeh";
import {ShomarandehProvider} from "./ShomarandehContext";

function App() {
  return (
    <div className="h-screen w-screen flex align-items-center justify-content-center">
        <ShomarandehProvider>
            <Shomarandeh/>
        </ShomarandehProvider>

    </div>
  );
}

export default App;
