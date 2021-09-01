
    var duration = [];
    var transfer = []
    window.addEventListener('DOMContentLoaded', init);
    function init(){
      const url = 'https://cse135proj.site/api/performance';
      fetch(url).then(response => {
            response.json().then(data => {
              console.log(data); 
              
                for(i = 0; i < 20; i++){
                    duration[i] = data[i].duration;
                    transfer[i] = data[i].transferSize;
                }
                ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9", "b55b025e438fa8a98e32482b5f768ff5"];
                let myConfig1 = {
                type: "bar",
                plotarea: {
                    adjustLayout: true
                },
                scaleX: {
                    label: {
                    text: "relationship between duration and transferSize"
                    }
                    // labels: id
                },
                series: [{
                    values: duration
                  },
                  {
                      values: transfer
                  }
                ]
              };

                zingchart.render({
                id: 'myChart1',
                data: myConfig1,
                height: "80%",
                width: "80%"
                });

                
                var table = document.getElementById("table");
                for(i = 0; i<duration.length;i++){
                    var row = table.insertRow(-1);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    cell1.innerHTML = duration[i];
                    cell2.innerHTML = transfer[i];
                }

            }).catch(error => {
                console.log(error.message);
            })    
        });

    };
