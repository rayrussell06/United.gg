
//Filter through Roster using jquery //
$(document).ready(function(){
    $("#roster-Search").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#prem-roster tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

  $(document).ready(function(){
    $("#roster-Search-Mobile").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#prem-roster tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });


  //Filter through Schedule using jquery //
  $(document).ready(function(){
    $("#schedule-Search").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#prem-schedule tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

  $(document).ready(function(){
    $("#schedule-Search-Mobile").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#prem-schedule tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

  document.getElementById("hamburger").onclick = function toggleMenu() {
    const navToggle = document.getElementsByClassName("toggle");
    for (let i = 0; i < navToggle.length; i++) {
      navToggle.item(i).classList.toggle("hidden");
    }
  };

/*Jquery function loader */
const loaderTable = () => {
$(window).on("load", function(){
  $(".loader-wrapper-table").fadeOut(1000)
  $("table").fadeIn(1000)
})}
loaderTable();

const loaderSchedule = () => {
  $(window).on("load", function(){
    $(".loader-wrapper-schedule").fadeOut(1000)
    $("schedule").fadeIn(1000)
  })}
  loaderSchedule();
  
  const loaderRoster = () => {
    $(window).on("load", function(){
      $(".loader-wrapper-roster").fadeOut(1000)
      $("roster").fadeIn(1000)
    })}
    loaderRoster();




//Fetching Premier league table data//

const fetchTableData = () => {
fetch('https://data.football-api.com/v3/standings/1204?Authorization=cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b')
    .then((premData)=>{
        //console.log(premData);
        return premData.json(); //coverts api data into json format//
    }).then((premObjectData)=>{
        console.log(premObjectData);
        let premTableData=''; //prem object is an empty string then premObjectData is mapped //
        premObjectData.map((values)=>{
            premTableData += 
            ` 
            <tr>
            <td class="text-white hidden md:table-cell">${values.position}</td>
            <td class="text-white px-4 py-4">${values.team_name}</td>
            <td class="text-white">${values.overall_gp}</td>
            <td class="text-white">${values.overall_w}</td>
            <td class="text-white">${values.overall_l}</td>
            <td class="text-white hidden md:table-cell">${values.overall_d}</td>
            <td class="text-white">${values.points}</td>
            <td class="text-white hidden md:table-cell">${values.gd}</td>
            <td class="text-white hidden md:table-cell">${values.recent_form}</td>
            </tr>
            `
    });
    document.getElementById('prem-table').innerHTML=premTableData;
    }).catch((err)=>{
        console.log(err);
    });
}
fetchTableData();

    


    
      
  //Fetch Premier League News
  
  const getFootballNews = () => {

    fetch('https://newsdata.io/api/1/news?apikey=pub_99422de71633776f4853284d00f0d83d1e76&q=Manchester%20United&country=gb,us&language=en&category=sports ') 
    
    .then((response)=>{
        return response.json()
    }).then((data)=>{   
        console.log(data.results);
        let premNews = '';
       
        data.results.map((values)=>{
            
            premNews +=
            `
            
           
            <div id="news-card" class="bg-white rounded-xl">
            <div class="mt-20 ">
            <div class="card-image">
            <div class="url-img ">
            <img src="${values.image_url}" class="rounded-t-lg" title="replacement" onerror="this.onerror=null;this.src='./united-images/manchester-united2.jpg'"/>
            
            </div>
            </div>
            
            <div class="card-content  ">
            <span class="card-title"></span>
            <h3 id="title" class="text-red  p-5 text-center">${values.title}</h3>
            
            </div>
            
            

            <div class="card-reveal ">
            
            <span id="card-description"></span>
            
            </div>

            <div id="prem-url" class="card-action text-center  p-5">
              
                <a href="${values.link}" id="prem-url-background" target="_blank" class="text-white" >Full Article</a>  
            </div>       
            </div>
            </div>
            </div>
            </div>
            
            

           `
    });
        document.getElementById('news-Articles').innerHTML=premNews;
    }).catch((err)=>{
        console.log(err);
    }); 
}

getFootballNews();



  
  

  

    




