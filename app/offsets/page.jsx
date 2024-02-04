import { Navbar } from "@/components";
import "./index.css";
function Offsets() {
  return (
    <div>
      <Navbar />

      <main style={{padding: 10}}>
        <section className="offsets-info">
          <h2>Carbon Offsets Information</h2>
          <p>
            Learn about carbon
            offsets and contribute to various initiatives that aim to make a
            positive impact on our environment.
          </p>
        </section>

        <section className="donation-links">
          <h2>Support Environmental Causes</h2>
          <ul>
            <li>
              <a href="https://teamtrees.org/" target="_blank">
                Donate to Team Trees
              </a>
            </li>
            <li>
              <a href="https://www.cleanairtaskforce.org/" target="_blank">
                Donate to Clean Air Task Force
              </a>
            </li>
            <li>
              <a href="https://www.rainforestfoundation.org/" target="_blank">
                Donate to Rainforest Foundation
              </a>
            </li>
            <li>
              <a href="https://www.worldwildlife.org/" target="_blank">
                Donate to World Wildlife Fund
              </a>
            </li>
            <li>
              <a href="https://oceana.org/" target="_blank">
                Donate to Oceana
              </a>
            </li>
            <li>
              <a href="https://350.org/" target="_blank">
                Donate to 350.org
              </a>
            </li>
          </ul>
        </section>

        <section className="carbon-reduction-ideas">
          <h2>Reducing Your Carbon Footprint</h2>
          <ul>
            <li>Use public transportation or carpool to reduce emissions.</li>
            <li>Opt for electric or hybrid vehicles for a greener commute.</li>
            <li>
              Bike or walk for short distances to minimize your carbon
              footprint.
            </li>
            <li>
              Switch to energy-efficient appliances to save on electricity
              consumption.
            </li>
            <li>Unplug electronics when not in use to reduce standby power.</li>
            <li>
              Install solar panels to harness renewable energy for your home.
            </li>
            <li>
              Install smart thermostats for efficient temperature control.
            </li>
            <li>Upgrade to energy-efficient windows for better insulation.</li>
            <li>
              Choose a plant-based diet to reduce carbon emissions associated
              with meat production.
            </li>
            <li>
              Support local farmers and choose seasonal produce to reduce food
              transportation emissions.
            </li>
            <li>
              Stay informed about environmental issues to make conscious
              choices.
            </li>
            <li>
              Participate in or support environmental advocacy groups to promote
              positive change.
            </li>
            <li>
              Purchase carbon offsets for flights to offset travel emissions.
            </li>
            <li>
              Choose environmentally conscious hotels and lodgings when
              traveling.
            </li>
            <li>
              Support or participate in local community gardens to promote
              sustainable agriculture.
            </li>
            <li>
              Join or organize tree planting events to contribute to
              reforestation efforts.
            </li>
            <li>Opt for virtual meetings to reduce the need for travel.</li>
            <li>Use eco-friendly apps that promote sustainable living.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Offsets;
