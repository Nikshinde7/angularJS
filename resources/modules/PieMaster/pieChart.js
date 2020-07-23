app.controller("mycontroller",function($state,$scope){


      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Wrong',     11],
          ['Unattempted',      2],
          ['Answered',  2]
           ]);


        var data2 = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Wrong',     2],
          ['Unattempted',      20],
          ['Answered',  20]
           ]);
      
         var data3 = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Wrong',     20],
          ['Unattempted',10],
          ['Answered',  20]
           ]);

        var options = {
          title: 'Easy'
        };

         var options2 = {
          title: 'Medium'
        };
         var options3 = {
          title: 'Hard'
        };
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        var chart2 = new google.visualization.PieChart(document.getElementById('piechart2'));
        var chart3 = new google.visualization.PieChart(document.getElementById('piechart3'));
        var chart4 = new google.visualization.PieChart(document.getElementById('piechart4'));
        var chart5 = new google.visualization.PieChart(document.getElementById('piechart5'));
        var chart6 = new google.visualization.PieChart(document.getElementById('piechart6'));
 
        chart.draw(data, options);
        chart2.draw(data2, options2);
        chart3.draw(data3, options3);
        chart4.draw(data, options);
        chart5.draw(data2, options2);
        chart6.draw(data3, options3);
        
      }


      google.charts.setOnLoadCallback(drawChart2);
      function drawChart2() {
        var dataS = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Wrong',     11],
          ['Unattempted',      2],
          ['Answered',    7]
        ]);

        var dataS2 = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Wrong',     20],
          ['Unattempted',      4],
          ['Answered',    3]
        ]);

        var dataS3 = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Wrong',     19],
          ['Unattempted',      1],
          ['Answered',    5]
        ]);

        var optionsS = {
          title: 'Easy',
          is3D: true,
        };


        var optionsS2 = {
          title: 'Medium',
          is3D: true,
        };


        var optionsS3 = {
          title: 'Hard',
          is3D: true,
        };

        var chartS = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        var chartS2 = new google.visualization.PieChart(document.getElementById('piechart_3d2'));
        var chartS3 = new google.visualization.PieChart(document.getElementById('piechart_3d3'));
        
        chartS.draw(dataS, optionsS);
        chartS2.draw(dataS2, optionsS2);
        chartS3.draw(dataS3, optionsS3);
        
      } 



google.charts.setOnLoadCallback(drawChart3);

      function drawChart3() {

        var data4 = google.visualization.arrayToDataTable([
          ['Effort', 'Amount given'],
          ['My all',     20],
          ['remains', 60],
          ['Unattempted',20]
        ]);

        var options4 = {
          title: 'My Daily Activities',
          pieHole: 0.4,
        };


        var dchart = new google.visualization.PieChart(document.getElementById('donutchart'));
        var dchart2 = new google.visualization.PieChart(document.getElementById('donutchart2'));
        var dchart3 = new google.visualization.PieChart(document.getElementById('donutchart3'));
        
        dchart.draw(data4, options4);
        dchart2.draw(data4, options4);
        dchart3.draw(data4, options4);

      }
});
