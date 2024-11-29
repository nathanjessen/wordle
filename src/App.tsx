import { useEffect } from 'react';
import GamePage from './pages/GamePage';
import './styles/tailwind.css';

function App() {
  useEffect(() => {
    // Check system preference and localStorage
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || (!savedTheme && isDarkMode)) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg-primary text-gray-900 dark:text-dark-text-primary">
      <GamePage />
    </div>
  );
}

export default App;
