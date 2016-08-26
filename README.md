data-table-trainee-assessment
=============================

This was a test designed to demonstrate my front end development skills.

The file `data.json` includes the monthly number of broadcasts per BBC channel for the year 2009. I converted the data into a HTML table, listing all the content into the page.

```js
$.getJSON('data.json', function (data) {
    console.log(data); // where I started
});
```

I had to do this using standard JavaScript. This meant I could not use a library or jQuery plugin to create the table for me. jQuery could still be used for DOM manipulation.

Additional information:

* I had to use the data from the JSON file to build the table.
* I could not edit the structure of the data in the JSON file.
* I also provided a visualisation of the data in the form of a line chart. The user is able to navigate between the table and the chart with tabs.
