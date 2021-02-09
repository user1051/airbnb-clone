import React, {useState} from 'react'
import './Search.css'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { DateRangePicker } from 'react-date-range'
import { Button } from '@material-ui/core'
import PeopleIcon from '@material-ui/icons/People'
import { useHistory } from 'react-router-dom'

//Date Picker Component
function Search() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const history = useHistory()        // to keep track of history of search page

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };
    //function for selecting dates
    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
    return (
        <div className="search">
            <DateRangePicker ranges={
                [selectionRange]} onChange={handleSelect} 
            />
            <h2>
                Number of guests
                <PeopleIcon/>
            </h2>
            <input min={0}
            defaultValue={2}
            type="number">
            </input>
            <Button onClick={() => history.push('/search')}>Search Airbnb</Button> 
            {/* function to direct to search page on clicking the button */}
        </div>
    )
}

export default Search
