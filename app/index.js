import clock from "clock";
import document from "document";
import * as util from "../common/utils";

// Update the clock every minute
clock.granularity = "minutes";

// Get a handle on the <text> element
const SleepsLabel = document.getElementById("SleepsLabel");
const NumberofSleeps = document.getElementById("NumberofSleeps");
const MerryChristmas = document.getElementById("MerryChristmas");

function datediff(first, second) {
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
    return Math.round((second-first)/(1000*60*60*24));
}

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {

  let today = evt.date;

  //let today = new Date("2028-12-26")

  let year = today.getFullYear()

  if (today.getMonth()+1 == 12 && today.getDate() > 25 ) {
    year += 1  
  }

  let christmas = new Date (`${year}-12-25`);

  let daysUntilChristmas = datediff(today, christmas)
  
  if (daysUntilChristmas == 0) {
    NumberofSleeps.text = "";
    SleepsLabel.text = "";
    MerryChristmas.text = "Merry Christmas!";
  } else {
   NumberofSleeps.text = `${daysUntilChristmas}`; 
  }
}
