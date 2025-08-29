//Card isnt working due to lack of config file in new react-vite version

import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn';
// import Card from './components/Card';
import Card2 from './components/Card2';

function App() {

  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  }
  const darkTheme = () => {
    setThemeMode("dark");
  }

  //change theme
  useEffect(() => {
  document.documentElement.classList.toggle('dark', themeMode === 'dark');
  },[themeMode]);

  

  return (
    
<ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
  <div className="flex flex-wrap min-h-screen items-center">
    <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn/>
        </div>

        <div className="w-full max-w-sm mx-auto">
          {/*<Card/>*/}
          <Card2/>
        </div>
    </div>
 </div>
</ThemeProvider>

  )
}

export default App
