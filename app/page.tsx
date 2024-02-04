"use client"

import { Navbar } from "@/components"
import "./main.css"
function App() {

  
  return (
    <div className="body">
      <div className="topsec" style={{height: "100vh"}}>
        <Navbar />
        <h1 className="title">Eco Emissions</h1>

        <div className="btnContainer">
          <button className="missionBtn" onClick={(event) => {
            document.getElementById("missionContent")?.scrollIntoView()
          }}>Our Mission</button>
          <button className="calculatorBtn" onClick={(event) => {
            location.href = "/emissions-calculator"
          }}>Calculator</button>


          {/*  Place arrow here to prompt scroll down  */}
        </div>
      </div>
      <div className="missionSection">
        <hr className="hr"></hr>

        <div style={{padding: "10px"}}>
        <h2 className="missionTitle">Our Mission</h2>
        <p id="missionContent" className="missionContent">At Carbon Counter, our mission is to make environmental awareness an integral part of decision-making by offering a simple yet powerful tool to calculate carbon emissions. Founded with a passion for sustainability, our creators envision a world where individuals and organizations are not just mindful of their actions, but actively engaged in understanding and reducing their carbon footprint. Through accessible and precise emission calculations, we strive to enlighten users about the environmental impact of their choices, fostering a sense of responsibility and empowering them to make informed, eco-conscious decisions in their daily lives.
        <br />
        <br />
        At the core of our mission is the belief that awareness sparks change. The creators behind Carbon Counter are driven by the desire to bridge the gap between knowledge and action. By providing a platform that demystifies carbon emissions and encourages a deeper understanding of personal and collective environmental impact, we aim to inspire a global community committed to positive change. Together, we embark on a journey towards a more sustainable future, where every individual is not just aware of their emissions, but actively strives to minimize their ecological footprint for the well-being of our planet.</p>
        </div>
      </div>
    </div>
  )
}

export default App;