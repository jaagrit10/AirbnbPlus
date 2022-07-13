import React from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { useState } from "react";
import "./MLTest.css"
export default function MLTest() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [airlines, setAirlines] = useState("");
  const [date, setDate] = useState("");
  const [Dep, setDep] = useState("");
  const [Arr, setArr] = useState("");
  const [price, setprice] = useState({"Price":0})


  // const [datas, setdatas] = useState({});
  const airline_mapping = {
    Trujet: 0,
    SpiceJet: 1,
    "Air Asia": 2,
    IndiGo: 3,
    GoAir: 4,
    Vistara: 5,
    "Vistara Premium economy": 6,
    "Air India": 7,
    "Multiple carriers": 8,
    "Multiple carriers Premium economy": 9,
    "Jet Airways": 10,
    "Jet Airways Business": 11,
  };
  const destination_mapping = {
    'Kolkata':0, 'Hyderabad':1, 'Delhi':2, 'Bangalore':3, 'Cochin':4
  }
  function getPrice() {
    let month = + date.split("/")[1];
    let day = + date.split("/")[0];
    let arr_hour = +Arr.split(":")[0];
    let arr_minute = +Arr.split(":")[1];
    let dep_minute = +Dep.split(":")[1];
    let dep_hour = +Dep.split(":")[0];
    let tot_duration = (arr_hour<dep_hour) ? ((24-dep_hour)*60+(arr_hour)*60):((dep_hour-arr_hour))*(-60);
    let dur_hour = 0;
    let dur_min = 0;
    tot_duration = tot_duration + arr_minute-dep_minute;
    dur_hour = Math.floor(tot_duration/60);
    dur_min = tot_duration%60;

    var myParams = {
      Airline: airline_mapping[airlines],
      Destination: destination_mapping[destination],
      journey_month: month,
      journey_day: day,
      Arrival_Time_hour: arr_hour,
      Arrival_Time_minute: arr_minute,
      Dep_Time_hour: dep_hour,
      Dep_Time_minute: dep_minute,
      Duration_hour: dur_hour,
      Duration_mins: dur_min,
      Duration_total_mins: tot_duration,
      Source_Banglore: (source==="Bangalore") ? 1:0,
      Source_Kolkata: (source==="Kolkata") ? 1:0,
      Source_Delhi: (source==="Delhi") ? 1:0,
      Source_Chennai: (source==="Chennai") ? 1:0,
      Source_Mumbai: (source==="Mumbai") ? 1:0,
    };
    axios
      .post("/add", myParams)
      .then(function (response) {
        console.log(response);
        setprice(response.data)
        //Perform action based on response
      })
      .catch(function (error) {
        console.log(error);
        //Perform action based on error
      });

    console.log(price.Price)
    // console.log("to");
  }
  return (
    <div>
      <div className="antialiased bg-grey-lightest">
        <div className="w-full bg-green fixed shadow z-1">
          <div className="container mx-auto">
            <div className="w-full flex justify-between items-center"></div>
          </div>
        </div>
        <div className="w-full bg-grey-lightest" style={{ "paddingTop": "4rem" }}>
          <div className="container mx-auto py-8">
            <div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
              <div className="py-4 px-8 text-black text-xl border-b border-grey-lighter">
                Flight Details
              </div>
              <div className="py-4 px-8">
                <div className="flex mb-4">
                  <div className="w-1/2 mr-1">
                    {/* <label className="block text-grey-darker text-sm font-bold mb-2" for="first_name">From</label> */}
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                      type="text"
                      placeholder="From"
                      onChange={(event)=>{setSource(event.target.value)}}
                    />
                  </div>
                  <div className="w-1/2 ml-1">
                    {/* <label className="block text-grey-darker text-sm font-bold mb-2" for="last_name">Last Name</label> */}
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                      type="text"
                      placeholder="To"
                      onChange={(event)=>{setDestination(event.target.value)}}
                    />
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="w-1/2 mr-1">
                    {/* <label className="block text-grey-darker text-sm font-bold mb-2" for="first_name">From</label> */}
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                      type="text"
                      placeholder="Airlines"
                      onChange={(event)=>{setAirlines(event.target.value)}}
                    />
                  </div>
                  <div className="w-1/2 ml-1">
                    {/* <label className="block text-grey-darker text-sm font-bold mb-2" for="last_name">Last Name</label> */}
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                      type="text"
                      placeholder="Date"
                      onChange={(event)=>{setDate(event.target.value)}}
                    />
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="w-1/2 mr-1">
                    {/* <label className="block text-grey-darker text-sm font-bold mb-2" for="first_name">From</label> */}
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                      type="text"
                      placeholder="Preferred Departure time"
                      onChange={(event)=>{setDep(event.target.value)}}
                    />
                  </div>
                  <div className="w-1/2 ml-1">
                    {/* <label className="block text-grey-darker text-sm font-bold mb-2" for="last_name">Last Name</label> */}
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                      type="text"
                      placeholder="Preferred Arrival Time"
                      onChange={(event)=>{setArr(event.target.value)}}
                    />
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        <div className="w-full py-8">
          <div className="container mx-auto text-center px-8">
          <div className="PriceButton">
          <Button type="submit" variant="outlined" onClick={getPrice}>
                    Estimate Price
                  </Button>
          </div>
        </div>
        </div>
        <footer className="w-full bg-grey-lighter py-8">
          <div className="container mx-auto text-center px-8">
            <p className="text-grey-dark mb-2 text-sm">
              This is a product of{" "}
              <span className="font-bold"> &#169; {`Jaagrit ${price.Price}`} </span>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
