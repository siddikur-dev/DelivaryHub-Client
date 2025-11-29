import { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      // First check for saved theme
      const savedTheme = localStorage.getItem('Delivery Hub-theme');
      if (savedTheme) {
        return savedTheme;
      }
      
      // If no saved theme, check system preference
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      return systemTheme;
    }
    return 'light';
  });

  useEffect(() => {
    document.documentElement.removeAttribute('data-theme');
    document.body.removeAttribute('data-theme');
    document.body.setAttribute('data-theme', theme);
    document.body.style.colorScheme = theme;
    localStorage.setItem('Delivery Hub-theme', theme);
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleSystemThemeChange = (e) => {
      // Only update if user hasn't manually set a theme
      const savedTheme = localStorage.getItem('Delivery Hub-theme');
      if (!savedTheme) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-secondary btn-outline btn-sm rounded-full shadow flex items-center justify-center px-3 py-2"
      aria-label="Toggle dark mode"
      title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {theme === 'light' ? <FaMoon className="text-lg" /> : <FaSun className="text-lg" />}
    </button>
  );
};

export default ThemeToggle;