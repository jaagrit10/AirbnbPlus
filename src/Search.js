import React ,{useState} from 'react'
import './Search.css'
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
import {DateRangePicker} from "react-date-range"
import PeopleIcon from '@mui/icons-material/People';
import { Button } from '@mui/material'
function Search() {
    const [startDate, setstartDate] = useState(new Date());
    const [endDate, setendDate] = useState(new Date());
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    }
    function handleSelect(ranges){
        setstartDate(ranges.selection.startDate);
        setendDate(ranges.selection.endDate);
    }
  return (
    <div className='search'>
        <DateRangePicker ranges={[selectionRange]} onChange = {handleSelect}/>
        <h2>Number of Guests
            <PeopleIcon></PeopleIcon>
        </h2>
        <input min={0} defaultValue={2}  type="number"/>
        <Button className='searchairbnb'> Search Airbnb</Button>

    </div>
  )
}

export default Search