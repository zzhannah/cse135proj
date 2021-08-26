  // I can't get data.element into an array, once I put them into an array
  // the array becomes an object, so i have to use a silly solution here.
  var id1;
  let id2;
  let id3;
  let transferSize1;
  let transferSize2;
  let transferSize3;
  let duration1;
  let duration2;
  let duration3;
  let decodeBodySize1;
  let decodeBodySize2;
  let decodeBodySize3;
  window.addEventListener('DOMContentLoaded', init);
  function init(){
    const url = 'https://cse135proj.site/api/performance';
    fetch(url).then(response => {
          response.json().then(data => {
            console.log(data[1].id);
            console.log(data[2].id);
              id1 = data[1].id.toString();
              // id2 = data[2].id;
              // id3 = data[2].id;
              // transferSize1 = data[1].transferSize;
              // transferSize2 = data[2].transferSize;
              // transferSize3 = data[3].transferSize;
              // duration1  = data[1].duration;
              // duration2  = data[2].duration;
              // duration3  = data[3].duration;
              // decodeBodySize1  = data[1].decodeBodySize;
              // decodeBodySize2  = data[2].decodeBodySize;
              // decodeBodySize3  = data[3].decodeBodySize;
          }).catch(error => {
              console.log(error.message);
          })    
      });
      console.log(id1);
      draw();
  };
  
  
  function draw(){
    
    ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9", "b55b025e438fa8a98e32482b5f768ff5"];
  let myConfig = {
    type: "bar",
    plotarea: {
      adjustLayout: true
    },
    scaleX: {
      label: {
        text: "Here is a category scale"
      },
      labels: [id1, id2, id3]
    },
    series: [{
        values: [transferSize1, transferSize2, transferSize3]
      },
      {
        values: [duration1, duration2, duration3]
      },
      {
        values: [decodeBodySize1, decodeBodySize2, decodeBodySize3]
      }
    ]
  };

  zingchart.render({
    id: 'myChart',
    data: myConfig,
    height: "30%",
    width: "30%"
  });
  };