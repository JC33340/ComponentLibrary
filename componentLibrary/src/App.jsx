import { useState } from 'react'
import './App.css'
import Badge from "./components/Badge"
import Banner from "./components/Banner"
import Card from "./components/Card"
import Testimonial from "./components/Testimonial"

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
        <Card>
          <header>Lorem Ipsum</header>
          <span>Nulla facilisi. Donec mollis quam lorem, sed interdum nisl accumsan in. Donec imperdiet arcu et orci vulputate, et accumsan sem elementum. Proin semper rutrum leo sed blandit. Nulla maximus mollis consectetur. Praesent interdum libero purus, ac convallis dui mattis a. Donec sollicitudin tellus eu dolor pellentesque rhoncus. Sed nec lectus congue, tincidunt lorem id, ultrices purus. Donec aliquet lacus eu rutrum accumsan.</span>
        </Card>
      </div>

      <div className = "component-wrapper">
        <h1>Testimonial</h1>
        <Testimonial 
          img = "https://images.squarespace-cdn.com/content/v1/5c4d7e227e3c3a6ec70a5ac7/1549195524586-CME2N96PTXMCQQP0RBN6/Sir+Patrick+Stewart+Portrait+Sitting+2014-14-05-+%284+of+4%29.jpg?format=750w"
          name = "Jason Chan"
          company = "Scrimba"
        >
          <span>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”</span>
        </Testimonial>
      </div>
    </>
  )
}

export default App
