import { useEffect, useState, useContext } from 'react'


import './App.scss'

import AppRouter from './AppRouter'
import { ThemeContext } from './providers/ThemeProvider'

function App() {    
  const { theme , toggleTheme } = useContext(ThemeContext)


  useEffect(() => {

    document.body.className = theme   // 👈 THIS IS THE KEY

  }, [theme])


  return (<>
  <div style={{width:"100%", textAlign:'center', backgroundColor:'gray'}}>Task manager</div>
  <button onClick={toggleTheme} >{theme}</button>
    <AppRouter/>
  </>
  )
}

export default App
