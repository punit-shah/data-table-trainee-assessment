function makeChart(canvas, data, channels) {
  var canvas = $(canvas);
  var chart = new Chart(canvas, {
    type: 'line',
    data: getChartData(data, channels),
    options: {
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 10
        },
      },
      tooltips: {
        'mode': 'x-axis',
      },
    },
  });
}

function getChartData(data) {
  return {
    labels: getChartLabels(data),
    datasets: getChartDatasets(data, channels),
  };
}

function getChartLabels(data) {
  var labels = [];

  for (var date in data) {
    labels.push(convertDate(date));
  }

  return labels;
}

function getChartDatasets(data, channels) {
  var datasets = [];

  var colors = {
    bbcone: '#ea2923',
    bbctwo: '#005761',
    bbcthree: '#d41c6f',
    bbcfour: '#1e1e1e',
    bbcnews24: '#900',
    cbbc: '#9fe600',
    cbeebies: '#29c5fe',
  };

  for (var channel in channels) {
    var dataset = {
      fill: false,
      lineTension: 0.1,
      pointRadius: 1,
      pointHoverRadius: 5,
      pointHitRadius: 50,
      borderColor: colors[channel],
      backgroundColor: colors[channel],
      label: channels[channel],
      data: [],
    };

    for (var date in data) {
      dataset.data.push(data[date][channel]);
    }

    datasets.push(dataset);
  }

  return datasets;
}
