import React from 'react'
import Konami, { useKonami } from 'react-konami-code'
import { useEffect } from 'react'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { GlobalStyle } from './styles/global'
import 'react-toastify/dist/ReactToastify.css'
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route, 
  Link
} from "react-router-dom";

const easterEgg = () => {
  alert('Hey, you typed the Konami Code!');
  window.open('https://www.youtube.com/watch?v=iik25wqIuFo', '_blank');
}

function App() {
  useKonami(easterEgg);
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  )
}

export default App
