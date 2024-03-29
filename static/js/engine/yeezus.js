function showroulette(){
  $("#RouletteTable").toggle(200);
}

function showMenu(){
  $(".menhider").show(0);
  $(".logform").hide(0);
}

$(document).ready(function() {
    //$(".red").hide();
});

//////////////// Drag Elements //////////////

function dragtokens() {
  $("#token5, #token10, #token20, #token50, #token100, #token200").draggable();
}dragtokens();

/////////// Clone elements /////////////////

// Func duplicate print and drag //

$(document).ready(function() { 
    $("#resetbtn").click(function(){
      $("#Todestroy").remove();
    });
  }); 

////////////////////////////////////////////

function hudhider(){
  $(".gamblingtable").toggle(1000)
  $("#gamb, #gamb2").toggle(1000)
}

function hudtimer(){
  setInterval(hudhider,300000)
}

/////////////////////////////////////////////////////////////////////vue.js////////////////////////////////////////////////////////////////////////////////////////////////////////


//// Timer bar ////

////function startbar() {
  

////////apex graphs/////////

// Graph OddEven //
var options = {
  chart: {
      height: '100%',
      type: 'bar'
  },
  plotOptions: {
      bar: {
          barHeight: '75%',
          distributed: true,
          horizontal: true,
          dataLabels: {
              position: 'bottom'
          },
      }
  },
  colors: ['#33b2df', '#d4526e'],
  dataLabels: {
      enabled: true,
      textAnchor: 'start',
      style: {
          colors: ['#fff']
      },
      formatter: function(val, opt) {
          return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
      },
      offsetX: 0,
      dropShadow: {
        enabled: true
      }
  },
  series: [{
      data: [52, 48]
  }],
  stroke: {
      width: 1,
    colors: ['#fff']
  },
  xaxis: {
      categories: ['Even', 'Odd'],
  },
  yaxis: {
      labels: {
          show: false
      }
  },
  tooltip: {
      theme: 'dark',
      x: {
          show: false
      },
      y: {
          title: {
              formatter: function() {
                  return ''
              }
          }
      }
  }
}

var chart = new ApexCharts(
  document.querySelector("#chart"),
  options
);

chart.render();

// Graph Columns //

var shoptions = {
  annotations: {
    points: [{
      x: 'Column 2',
      seriesIndex: 0,
      label: {
        borderColor: '#775DD0',
        offsetY: 0,
        style: {
          color: '#fff',
          background: '#775DD0',
        },
        text: 'Quite unfair right ?',
      }
    }]
  },
  chart: {
    height: '100%',
    type: 'bar',
  },
  plotOptions: {
    bar: {
      columnWidth: '50%',
      endingShape: 'rounded'	
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 2
  },
  series: [{
    name: 'Servings',
    data: [33, 27, 40]
  }],
  grid: {
    row: {
      colors: ['#fff', '#f2f2f2']
    }
  },
  xaxis: {
    labels: {
      rotate: -45
    },
    categories: ['Column 1', 'Column 2', 'Column 3'],
  },
  yaxis: {
    title: {
      text: '100 last rounds Value %',
    },

  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: "horizontal",
      shadeIntensity: 0.25,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 0.85,
      opacityTo: 0.85,
      stops: [50, 0, 100]
    },
  },

}

var shart = new ApexCharts(
  document.querySelector("#shart"),
  shoptions
);

shart.render();

// Dozens Graph //

var toptions = {
  chart: {
      height: '100%',
      type: 'bar',
  },
  plotOptions: {
      bar: {
          horizontal: true,
      }
  },
  dataLabels: {
      enabled: false
  },
  series: [{
      data: [32, 33, 35]
  }],
  xaxis: {
      categories: ['First Dozen', 'Second Dozen', 'Third Dozen'],
  }
}

var thart = new ApexCharts(
  document.querySelector("#thart"),
  toptions
);

thart.render();

// Numbers Panel Graph // 


var Moptions = {
  chart: {
    height: '100%',
    type: 'heatmap',
  },
  stroke: {
    width: 0
  },
  plotOptions: {
    heatmap: {
      radius: 1,
      enableShades: false,
      colorScale: {
        ranges: [
          {
            from: '',
            to: '0',
            color: '#000'
          },
          {
            from: 1,
            to: 12,
            color: '#008FFB'
          },
          {
            from: 13,
            to: 24,
            color: '#00E396'
          },
          {
            from: 25,
            to: 36,
            color: '#ff5079'
          },
        ],
      },

    }
  },
  dataLabels: {
    enabled: true,
    style: {
      colors: ['#fff']
    }
  },
  series: [{
      name: '1',
      data: [3, 11, 25]
    },
    {
      name: '2',
      data: [0, 5, 6, 12, 22, 30]
    },
    {
      name: '3',
      data: [7, 8, 13, 26, 29, 31, 32, 36]
    },
    {
      name: '4',
      data: [4, 14, 15, 19, 20, 23, 27, 28 ,33, 34]
    },
    {
      name: '5',
      data: [2, 10, 16, 24, 25]
    },
    {
      name: '6',
      data: [35]
    },
    {
      name: '7',
      data: [1, 17]
    },
    {
      name: '8',
      data: [8, 21]
    },
    {
      name: '9',
      data: [9]
    }
  ],

  xaxis: {
    type: 'category',
  },
  title: {
    text: 'Numbers Iterating (Last 100 Rounds)'
  },

}

var Mchart = new ApexCharts(
  document.querySelector("#Mchart"),
  Moptions
);

Mchart.render();
