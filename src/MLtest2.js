import React from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { useState } from "react";
import "./MLTest.css";
export default function MLtest2() {
  const [deposit, setdeposit] = useState("");
  const [yr, setyear] = useState("");
  const [mnth, setmonth] = useState("");
  const [dte, setDate] = useState("");
  const [leadtime, setleadtime] = useState("");
  const [week, setweek] = useState("");
  const [adult, setadults] = useState("");
  const [child, setchildren] = useState("");
  const [previouscan, setpreviouscan] = useState("");
  const [bookchange, setbookchange] = useState("");
  const [cmpany, setcompany] = useState("");
  const [price, setprice] = useState("");
  const [carpark, setcarpark] = useState("");
  const [specialreq, setaspecialreq] = useState("");


  // const [datas, setdatas] = useState({});
  const deposit_type_mapp = {
    No_Deposit:0.28402,
    Non_Refund:0.99362,
    Refundable:0.22222
  };
  
  function getPrice() {
    var myParams = {
      deposit_type: deposit_type_mapp[deposit],
      year: +yr,
      month: +mnth,
      date: +dte,
      lead_time: 4.343805,
      arrival_date_week_number: +week,
      adults: +adult,
      children: +child,
      previous_cancellations: +previouscan,
      booking_changes: +bookchange,
      company: +cmpany,
      adr: 4.424248,
      required_car_parking_spaces: +carpark,
      total_of_special_requests: +specialreq,
    };
    console.log(myParams);
    axios
      .post("/cancel", myParams)
      .then(function (response) {
        console.log(response);
        setprice(response.data);
        //Perform action based on response
      })
      .catch(function (error) {
        console.log(error);
        //Perform action based on error
      });

    // console.log(price.Price);
    // console.log("to");
  }
  return (
    <div className="color">
      <div>
        <div className="antialiased bg-grey-lightest">
          <div className="w-full bg-green fixed shadow z-1">
            <div className="container mx-auto">
              <div className="w-full flex justify-between items-center"></div>
            </div>
          </div>
          <div
            className="w-full bg-grey-lightest"
            style={{ paddingTop: "4rem" }}
          >
            <div className="container mx-auto py-8">
              <div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
                <div className="shadow">
                  <div className="py-4 px-8 text-black text-xl border-b border-grey-lighter">
                    Cancellation Prediction
                  </div>

                  <div className="py-4 px-8">
                    <div className="flex mb-4">
                      <div className="w-1/2 mr-1">
                        {/* <label className="block text-grey-darker text-sm font-bold mb-2" for="first_name">From</label> */}
                        <input
                          className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                          type="text"
                          placeholder="Deposit_Type"
                          onChange={(event) => {
                            setdeposit(event.target.value);
                          }}
                        />
                      </div>
                      <div className="w-1/2 ml-1">
                        {/* <label className="block text-grey-darker text-sm font-bold mb-2" for="last_name">Last Name</label> */}
                        <input
                          className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                          type="text"
                          placeholder="Lead_Time"
                          onChange={(event) => {
                            setleadtime(event.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex mb-4">
                      <div className="w-1/2 mr-1">
                        {/* <label className="block text-grey-darker text-sm font-bold mb-2" for="first_name">From</label> */}
                        <input
                          className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                          type="text"
                          placeholder="Year"
                          onChange={(event) => {
                            setyear(event.target.value);
                          }}
                        />
                      </div>
                      <div className="w-1/2 ml-1">
                        {/* <label className="block text-grey-darker text-sm font-bold mb-2" for="last_name">Last Name</label> */}
                        <input
                          className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                          type="text"
                          placeholder="Month"
                          onChange={(event) => {
                            setmonth(event.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex mb-4">
                      <div className="w-1/2 mr-1">
                        {/* <label className="block text-grey-darker text-sm font-bold mb-2" for="first_name">From</label> */}
                        <input
                          className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                          type="text"
                          placeholder="Week"
                          onChange={(event) => {
                            setweek(event.target.value);
                          }}
                        />
                      </div>
                      <div className="w-1/2 ml-1">
                        {/* <label className="block text-grey-darker text-sm font-bold mb-2" for="last_name">Last Name</label> */}
                        <input
                          className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                          type="text"
                          placeholder="Date"
                          onChange={(event) => {
                            setDate(event.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex mb-4">
                      <div className="w-1/2 mr-1">
                        {/* <label className="block text-grey-darker text-sm font-bold mb-2" for="first_name">From</label> */}
                        <input
                          className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                          type="text"
                          placeholder="Number of Adults"
                          onChange={(event) => {
                            setadults(event.target.value);
                          }}
                        />
                      </div>
                      <div className="w-1/2 ml-1">
                        {/* <label className="block text-grey-darker text-sm font-bold mb-2" for="last_name">Last Name</label> */}
                        <input
                          className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                          type="text"
                          placeholder="Number of Chilren"
                          onChange={(event) => {
                            setchildren(event.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex mb-4">
                      <div className="w-1/2 mr-1">
                        {/* <label className="block text-grey-darker text-sm font-bold mb-2" for="first_name">From</label> */}
                        <input
                          className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                          type="text"
                          placeholder="Previous_Cancellations"
                          onChange={(event) => {
                            setpreviouscan(event.target.value);
                          }}
                        />
                      </div>
                      <div className="w-1/2 ml-1">
                        {/* <label className="block text-grey-darker text-sm font-bold mb-2" for="last_name">Last Name</label> */}
                        <input
                          className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                          type="text"
                          placeholder="Booking_Changes"
                          onChange={(event) => {
                            setbookchange(event.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex mb-4">
                      <div className="w-1/2 mr-1">
                        {/* <label className="block text-grey-darker text-sm font-bold mb-2" for="first_name">From</label> */}
                        <input
                          className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                          type="text"
                          placeholder="Company"
                          onChange={(event) => {
                            setcompany(event.target.value);
                          }}
                        />
                      </div>
                      <div className="w-1/2 ml-1">
                        {/* <label className="block text-grey-darker text-sm font-bold mb-2" for="last_name">Last Name</label> */}
                        <input
                          className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                          type="text"
                          placeholder="Price"
                          onChange={(event) => {
                            setprice(event.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex mb-4">
                      <div className="w-1/2 mr-1">
                        {/* <label className="block text-grey-darker text-sm font-bold mb-2" for="first_name">From</label> */}
                        <input
                          className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                          type="text"
                          placeholder="Car_Parking_Prefernce"
                          onChange={(event) => {
                            setcarpark(event.target.value);
                          }}
                        />
                      </div>
                      <div className="w-1/2 ml-1">
                        {/* <label className="block text-grey-darker text-sm font-bold mb-2" for="last_name">Last Name</label> */}
                        <input
                          className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                          type="text"
                          placeholder="Special Requests"
                          onChange={(event) => {
                            setaspecialreq(event.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full py-6">
            <div className="container mx-auto text-center px-8">
              <div className="PriceButton">
                <Button type="submit" variant="outlined" onClick={getPrice}>
                  Prediction
                </Button>
              </div>
            </div>
          </div>    
        </div>
      </div>
      <body>
        <div class="container py-24">
          <div class="flex items-center justify-center h-full">
            <div class="bg-white shadow-2xl p-6 rounded-2xl border-2 border-gray-50">
              <div class="flex flex-col">
                {/* <div>
                  <h2 class="font-bold text-gray-600 text-center">
                    {`${source}-----${destination}`}
                  </h2>
                </div> */}
                {/* <div class="my-6">
                  <div class="flex flex-row space-x-4 items-center">
                    <div id="icon">
                      <span> */}
                        {/* <svg
                          class="w-20 h-20 fill-stroke text-yellow-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="C:/Users/DELL/Downloads/flying-aeroplane-top-view-svgrepo-com.svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                          ></path>
                        </svg> */}
                        {/* <img
                          className="w-20 h-20"
                          src="https://thumbs.dreamstime.com/b/airplane-silhouette-isolated-png-high-quality-illustration-airplane-silhouette-isolated-transparent-background-travel-105444328.jpg"
                          alt=""
                        />
                      </span>
                    </div>
                    <div id="temp">
                      <h4 class="text-4xl align-middle justify-center px-4">
                        {" "}
                        &#8377;{` ${Math.round(price.Price)}`}.00
                      </h4>
                      {/* <p class="text-xs text-gray-500">Feels like +14&deg;C</p> */}
                    {/* </div>
                  </div>
                </div> */}
                <div class="w-full place-items-end text-right border-t-2 border-gray-100 mt-2">
                  {/* <a href="/#" class="text-indigo-600 text-xs font-medium">
                    View more
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}
