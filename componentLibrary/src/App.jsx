import { useState } from 'react'
import './App.css'
import Badge from "./components/Badge"
import Banner from "./components/Banner"
import Card from "./components/Card"

function App() {

  const colors = ["red","blue","indigo","pink","yellow","green","purple"]
  const bannerColors = ["green","yellow","red","blue"]

  const badgeDivs = colors.map((color)=>{
    return(
      <>
        <Badge color = {color} >
          Warning
        </Badge>
        <Badge color={color} shape = "round">
          Warning
        </Badge>
      </>
      
    )
  })

  const bannerDivs = bannerColors.map((color)=>{
    return(
      <>
      <Banner color = {color}>
        <header>Title for banner with further text content</header>
        <span>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
      </Banner>
      <Banner color = {color}>
        <header>Title for banners with only title</header>
      </Banner>
      </>
    )
  })

  return (
    <>
      <div className = "component-wrapper">
        <h1>Badges</h1>
        {badgeDivs}
      </div>

      <div className='component-wrapper'>
        <h1>Banners</h1>
        {bannerDivs}
      </div>

      <div className = 'component-wrapper'>
        <h1>Cards</h1>
        <Card />
      </div>
    </>
  )
}

export default App
