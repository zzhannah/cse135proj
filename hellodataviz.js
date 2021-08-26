  // I can't get data.element into an array, once I put them into an array
  // the array becomes an object, so i have to use a silly solution here.
    var id = [];
    var trans = [];
    var duration = [];
    var decodedBodySize = []
    var domContentLoadedEventStart = [];
    var domContentLoadedEventEnd = [];
    window.addEventListener('DOMContentLoaded', init);
    function init(){
      const url = 'https://cse135proj.site/api/performance';
      fetch(url).then(response => {
            response.json().then(data => {
              console.log(data); 
                for(i = 0; i < 5; i++){
                    id[i] = data[i].id;
                    trans[i] = data[i].transferSize;
                    duration[i] = data[i].duration;
                    decodedBodySize[i] = data[i].decodedBodySize;
                    domContentLoadedEventEnd[i] = data[i].domContentLoadedEventEnd;
                    domContentLoadedEventStart[i] = data[i].domContentLoadedEventStart;
                }
                ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9", "b55b025e438fa8a98e32482b5f768ff5"];
                let myConfig1 = {
                type: "bar",
                plotarea: {
                    adjustLayout: true
                },
                scaleX: {
                    label: {
                    text: "transferSize, duration, decodeBodySize / id"
                    },
                    labels: id
                },
                series: [{
                    values: trans
                  },
                  {
                    values: duration
                  },
                  {
                    values: decodedBodySize
                  }
                ]
              };

                zingchart.render({
                id: 'myChart1',
                data: myConfig1,
                height: "50%",
                width: "30%"
                });


                var myConfig2 = {
                    "type": "line",
                    "scaleX": {
                        "label": {
                        "text": "domContentLoadedEventStart and End / id"
                        },
                        "labels": id
                    },
                    "series": [{
                      "values": domContentLoadedEventEnd
                    }, {
                      "values": domContentLoadedEventStart
                    }]
                  };
               
                  zingchart.render({
                    id: 'myChart2',
                    data: myConfig2,
                    height: "30%",
                    width: "80%"
                  });
                  
                  const total = domContentLoadedEventEnd[1]+trans[1]+duration[1]+decodedBodySize[1]+domContentLoadedEventStart[1];
                  var myConfig3 = {
                    "type": "ring",
                    "title": {
                      "text": "transferSize duration decodedBodySize domContentLoadedEventEnd domContentLoadedEventStart"
                    },
                    "plot": {
                      //Use the "slice" attribute to adjust the size of the donut ring.
                    },
                    "series": [{
                        "values": [10*domContentLoadedEventEnd[1]/total]
                      },
                      {
                        "values": [10*trans[1]/total]
                      },
                      {
                        "values": [10*duration[1]/total]
                      },
                      {
                        "values": [10*decodedBodySize[1]/total]
                      },
                      {
                        "values": [10*domContentLoadedEventStart[1]/total]
                      }
                    ]
                  };
               
                  zingchart.render({
                    id: 'myChart3',
                    data: myConfig3,
                    height: 100,
                    width: "80%"
                  });


            }).catch(error => {
                console.log(error.message);
            })    
        });
    };
