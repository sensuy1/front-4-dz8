import React, { useState } from 'react';

function ThemeToggle() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <div className={`app ${theme}`}>
      <h1>Мое приложение</h1>
      <button onClick={toggleTheme}>Переключить тему</button>
      <p>Текущая тема: {theme}</p>
    </div>
  )
}

export default ThemeToggle
