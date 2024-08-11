import { useEffect } from 'react';
import './App.css'
import './assets/css/fonts.css'
import './assets/css/button.css';
import AppRouter from './routes/AppRouter'
import { setupIntersectionObserver } from './utilities/intersectionObserver';

function App() {
  useEffect(() => {
    const cleanupObserver = setupIntersectionObserver();

    // Clean up the observers when the component is unmounted
    return cleanupObserver;
  }, []);
  return (
    <>
    <AppRouter />
    </>
  )
}

export default App
