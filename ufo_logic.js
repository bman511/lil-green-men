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

//select filter button
let filterBtn = d3.select("#filter-click");

//select filter form fields
let formTable = d3.select("#filter-table");

let inputFields = formTable.selectAll("input").nodes();

let clearFilter = d3.select("#clear-filter");

clearFilter.on("click", function(){

  inputFields.forEach(function(el){
    el.value = "";
  });
  injectTable(sightings);
});
//Add event handler to filter button
filterBtn.on("click", function() {

  let filterObj = {};
  //let filterObj = {datetime: "1/1/2011"};

  d3.event.preventDefault();

  //construct filter object
  inputFields.forEach(el => {
   if(el.value){ 
    filterObj[el.name] = el.value;
   }
   
  });

   // Create a custom filtering function
   function filterList(sighting) {
    for(let [key,val] of Object.entries(filterObj)){
      if(sighting[key] != val){
        return false;
      }
      return true; 
      }
   }

  let filteredList = sightings.filter(filterList);
  //console.log(filteredList);
  injectTable(filteredList); 
   
});
    
function injectTable(filList){

  tableBody = d3.select("tbody");
  tableBody.html("");

  filList.forEach(el => {
    newRow = tableBody.append("tr");
    
    Object.entries(el).forEach(function([key,val]){ 
                               newCell = newRow.append("td");
                               newCell.text(val);
                               });
    });
}

