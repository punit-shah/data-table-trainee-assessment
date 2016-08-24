function makeTable(element, data, channels) {
  var $table = $('<table/>')
    .addClass('data-table')
    .append(getTableHeader(channels))
    .append(getTableBody(channels, data));

  $(element).append($table);
}

// returns a jquery object of the thead element
function getTableHeader(channels) {
  var $tableHeader = $('<thead/>');
  var $row = $('<tr/>')
    .append('<th>Date</th>');

  for (var channel in channels) {
    $row.append('<th>' + channels[channel] + '</th>');
  }

  $tableHeader.append($row);

  return $tableHeader;
}

// returns a jquery object of the tbody element, populated with the data
function getTableBody(channels, data) {
  var $tableBody = $('<tbody/>');

  for (var date in data) {
    var dataRow = data[date];
    var $row = $('<tr />')
      .append('<td>' + convertDate(date) + '</td>');

    for (var channel in channels) {
      $row.append('<td>' + dataRow[channel] + '</td>');
    }

    $tableBody.append($row);
  }

  return $tableBody;
}

// returns the full month given a number 1-12
function getMonth(monthNumber) {
  var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return months[parseInt(monthNumber, 10) - 1];
}

// converts date from 'YYYY-MM' to 'Month YYYY'
function convertDate(date) {
  // regex makes sure date is in 'YYYY-MM' format
  var dateRegex = /^(\d{4})-(\d{2})$/;
  if (dateRegex.test(date)) {
    var yearMonthArray = date.split('-');

    var year = yearMonthArray[0];
    var month = getMonth(yearMonthArray[1]);

    return month + ' ' + year;
  } else {
    console.error('invalid date format passed to convertDate function');
    return null;
  }
}
