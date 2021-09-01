
    var duration = [];
    window.addEventListener('DOMContentLoaded', init);
    function init(){
      const url = 'https://cse135proj.site/api/performance';
      fetch(url).then(response => {
            response.json().then(data => {
              console.log(data); 
              
                for(i = 0; i < 20; i++){
                    duration[i] = data[i].duration;
                }
                ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9", "b55b025e438fa8a98e32482b5f768ff5"];
                let myConfig1 = {
                type: "bar",
                plotarea: {
                    adjustLayout: true
                },
                scaleX: {
                    label: {
                    text: "duration time"
                    }
                    // labels: id
                },
                series: [{
                    values: duration
                  }
                ]
              };

                zingchart.render({
                id: 'myChart1',
                data: myConfig1,
                height: "80%",
                width: "80%"
                });

                document.getElementById('grid1').data = data;
            }).catch(error => {
                console.log(error.message);
            })    
        });

    };
