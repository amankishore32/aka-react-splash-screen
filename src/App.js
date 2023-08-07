import './App.css';
import withSplashScreen from './components/withSplashScreen';

function App() {
  return (
    <div className="App">
      Hello, World!
    </div>
  );
}

export default withSplashScreen(App);
