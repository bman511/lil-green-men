/*jshint esversion: 6 */

let sightings = [{
    datetime: "1/1/2010",
    city: "benton",
    state: "ar",
    country: "us",
    shape: "circle",
    durationMinutes: "5 mins.",
    comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
  },
  {
    datetime: "1/1/2010",
    city: "bonita",
    state: "ca",
    country: "us",
    shape: "light",
    durationMinutes: "13 minutes",
    comments: "Three bright red lights witnessed floating stationary over San Diego New Years Day 2010"
  },
  {
    datetime: "1/1/2010",
    city: "el cajon",
    state: "ca",
    country: "us",
    shape: "triangle",
    durationMinutes: "6 minutes",
    comments: "On New Years Eve I went outside to hear the celebration and fireworks in my neighbor hood. And noticed 3 red lights above my house and"
  },
  {
    datetime: "1/1/2011",
    city: "el cajon",
    state: "ca",
    country: "us",
    shape: "triangle",
    durationMinutes: "12 minutes",
    comments: "3 Red objects hovering over El Cajon CA"
  }];

//build filter object
//get all elements of form
//for element in elements, if not null add to filter object
filterObj = {};
//
//write function for filter
//for key in filterObj
//if item[key] != filterObj[key] return false;
//return true
//

// Create a custom filtering function
function filterList(site,ind,arr) {
    return site.datetime === "1/1/2010";
  }
  
  // filter() uses the custom function as its argument
var filteredTable = sightings.filter(filterList);

function injectTable(filTable){

    filTable.forEach(el => {
        console.log(`<tr>
                     <td>${el.datetime}</td>
                     <td>${el.city}</td>
                     <td>${el.state}</td>
                     <td>${el.country}</td>
                     <td>${el.shape}</td>
                     <td>${el.durationMinutes}</td>
                     <td>${el.comments}</td>
                     </tr>`);
    });
}

injectTable(filteredTable);

  /*
    1. `date/time`
  2. `city`
  3. `state`
  4. `country`
  5. `shape`
*/

