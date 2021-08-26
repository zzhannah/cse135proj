  // I can't get data.element into an array, once I put them into an array
  // the array becomes an object, so i have to use a silly solution here.
    let id1;
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
    var id = [];
    var trans = [];
    var duration = [];
    var decodeBodySize = []
    window.addEventListener('DOMContentLoaded', init);
    function init(){
      const url = 'https://cse135proj.site/api/performance';
      fetch(url).then(response => {
            response.json().then(data => {
              console.log(data[1].id); 
                for(i = 0; i < 5; i++){
                    id[i] = data[i].id;
                    trans[i] = data[i].transferSize;
                    duration[i] = data[i].duration;
                    decodeBodySize[i] = data[i].decodeBodySize;
                }
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
                    labels: id
                },
                series: [{
                    values: trans
                    },
                    {
                    values: duration
                    },
                    {
                    values: decodeBodySize
                    }
                ]
                };

                zingchart.render({
                id: 'myChart',
                data: myConfig,
                height: "30%",
                width: "100%"
                });
            }).catch(error => {
                console.log(error.message);
            })    
        });
        console.log(id1);
        console.log(id2);
    };
