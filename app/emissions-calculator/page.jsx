"use client";
import { Action, Navbar } from "../../components";
import "./calculator.css";
import React from "react";
import { Chart } from "react-google-charts";

function App() {
  let categories = {
    Utilities: {
      unit: "kWhs",
      value: 0.5, // kg of CO2 per unit
    },
    "Personal Vehicles": {
      unit: "miles",
      value: 0.356, // kg of CO2 per unit
    },
    "Air Travel": {
      unit: "miles",
      value: 0.15, // kg of CO2 per unit
    },
    "Meat Consumption": {
      unit: "kgs",
      value: 27, // kg of CO2 per unit
    },
  };

  var [emissionsArray, setEmissionsArray] = React.useState(
    JSON.parse(localStorage.getItem("userdata")) || []
  );
  if (!emissionsArray) {
    setEmissionsArray([]);
  } else {
  }

  let chartData = [
    [
      "Month",
      "Utilities",
      "Personal Vehicles",
      "Air Travel",
      "Meat Consumption",
      "Total",
    ],
  ];

  var thisData = [];

  emissionsArray.forEach((item, index) => {
    var thisYear = new Date(item.date).getFullYear();
    var thisMonth = new Date(item.date).toLocaleString('default', { month: 'long' });
    var thisDate = `${thisMonth} ${thisYear}`

    var foundItem = thisData.find((x) => (x.month = thisDate));
    if (foundItem) {
      foundItem.objects.push(item);
    } else {
      thisData.push({ month: thisDate, objects: [item] });
    }
  });


  // get data from ls
  // for (let i = 0; i < 1; i++) {
  //   // example data
  //   chartData.push(["January 2024", 165, 938, 522, 998, 1000]);
  //   chartData.push(["Febuary 2024", 135, 1120, 599, 1268, 1000]);
  //   chartData.push(["March 2024", 157, 1167, 587, 807, 1000]);
  //   chartData.push(["April 2024", 139, 1110, 615, 968, 1000]);
  //   chartData.push(["May 2024", 136, 691, 629, 1026, 1000]);
  // }
  thisData.forEach((data) => {
    var totalUtilities = 0
    var totalPersonalVehicles =0
    var totalAirTravel = 0
    var totalMeatConsumption = 0
    var total = 0

    data.objects.forEach((obj) => {
      total += obj.value
      switch(obj.category) {
        case "Utilities":
          totalUtilities += obj.value
          break;
        case "Personal Vehicles":
          totalPersonalVehicles += obj.value
          break;
        case "Air Travel":
          totalAirTravel += obj.value
          break;
        case "Meat Consumption":
          totalMeatConsumption += obj.value
          break;
      }
    })

    chartData.push([data.month, totalUtilities, totalPersonalVehicles, totalAirTravel, totalMeatConsumption, total])
  })

  var chartOptions = {
    title: "Co2 Emissions By Month",
    vAxis: { title: "Co2 (pounds" },
    hAxis: { title: "Month" },
    seriesType: "bars",
    series: { 4: { type: "line" } },
  };

  var originalNum = 0;
  emissionsArray.forEach((e) => {
    originalNum += e.value;
  });

  var [emissionsNum, setEmissionNum] = React.useState(originalNum);

  // var days = 10;

  React.useEffect(() => {
    var n = 0;
    emissionsArray.forEach((e) => {
      n += e.value;
    });
    setEmissionNum(n);
  }, [emissionsArray]);

  var [popupShowed, setPopupShowed] = React.useState(false);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Navbar />
      <div
        className="addEmissions"
        style={{ display: popupShowed ? "block" : "none" }}
      >
        <div className="selectStuff">
          <select
            style={{ width: "133px", height: "30px" }}
            id="emitionsDropdown"
            name="typeDropdown"
            onChange={(event) => {
              document.getElementById("units").innerText = categories[event.target.value].unit;
            }}
          >
            <option value="Utilities">Utilities</option>
            <option value="Personal Vehicles">Personal Vehicles</option>
            <option value="Air Travel">Air Travel</option>
            <option value="Meat Consumption">Meat Consumption</option>
          </select>

          <input
            id="inputUnits"
            name="valueInput"
            type="number"
            style={{ marginLeft: "5px", width: "100px", height: "24px" }}
          ></input>
          <span id="units" style={{ marginLeft: 5 }}>
            kWhs
          </span>
        </div>
        <button
          className="sumbitData"
          style={{
            marginLeft: "50%",
            marginTop: "20px",
            transform: "translateX(-50%)",
          }}
          onClick={() => {
            setPopupShowed(false);
            document.getElementById("btnadd").innerHTML = "+"

            var thisVal =
              parseInt(document.getElementById("inputUnits").value) *
              categories[document.getElementById("emitionsDropdown").value]
                .value *
              2.205;
              
            if (thisVal <= 0 || thisVal == null || isNaN(thisVal)) {return};

            var newData = {
              date: Date.now(),
              category: document.getElementById("emitionsDropdown").value,
              value: thisVal,
            };

            var newArray = [newData].concat(emissionsArray);
            setEmissionsArray(newArray);
            localStorage.setItem("userdata", JSON.stringify(newArray));
            console.log(emissionsArray);
          }}
        >
          SUBMIT
        </button>
      </div>
      <div style={{ display: "flex", width: "100%" }}>
        <div
          style={{ width: "60vw", height: "400px", backgroundColor: "gray" }}
        >
          <Chart
            chartType="ComboChart"
            data={chartData}
            options={chartOptions}
            width="60vw"
            height="400px"
            legendToggle
          />
        </div>
        <div className="emissionsContent">
          <div
            style={{
              width: "40vw",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span>Emissions</span>

            <button
              className="addBtn"
              id="btnadd"
              onClick={(event) => {
                setPopupShowed(!popupShowed);
                try {
                  if (!popupShowed) {
                    event.target.innerText = "-";
                  } else {
                    event.target.innerText = "+";
                  }
                } catch (err) {}
                /*var newArray = emissionsArray;

                newArray.push({
                  desc: "test desc",
                  value: 10,
                  time: Date.now(),
                  category: "test",
                });

                setEmissionsArray(newArray);
*/
                // localStorage.setItem(
                //   "userdata",
                //   JSON.stringify(newArray)
                // );
              }}
            >
              +
            </button>
          </div>
          <div>
            {emissionsArray.map((item, index) => {
              return (
                <Action key={index} desc={item.category} value={Math.round(item.value * 100) / 100} />
              );
            })}
          </div>
        </div>
      </div>

      <div className="totalContainer" style={{ marginLeft: "30px" }}>
        <h1 style={{ marginBottom: "0px" }}>
          Total Emissions: {Math.floor(emissionsNum)}lbs
        </h1>
      </div>
      {/* <div
        style={{
          fontSize: "100px",
          padding: 20,
        }}
      >
        <span>
          Avarage: {emissionsNum / days}
          <span style={{ fontSize: "60px" }}>lbs/day</span>
        </span>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          fontSize: "35px",
          borderRightWidth: "2px",
          borderRightColor: "black",
        }}
      >
        <div style={{ width: "100%" }}>
          <div className="tableHeader">
            <span>Emissions</span>
            <span></span>
          </div>
          <div>
            {emissions.map((e, i) => (
              <Action desc={e.desc} key={i} value={e.value} />
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
