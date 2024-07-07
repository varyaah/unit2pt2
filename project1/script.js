function conversionTable(tagId, miles)
{
    var first = document.getElementById("Input1");
    miles = parseInt(first.value);
    var conv = document.getElementById(tagId);
    var tab = conv.querySelector('table'); // Check if a table already exists in conv

    // If no table exists, create a new one
    if (!tab) {
        tab = document.createElement("table");
        conv.appendChild(tab);
    }

    // Clear existing table content
    tab.innerHTML = '';

    // Create table head and body if they don't exist
    if (!tab.querySelector('thead')) {
        var thed = document.createElement("thead");
        tab.appendChild(thed);
        var tr = document.createElement("tr");
        thed.appendChild(tr);
        var th = document.createElement("th");
        tr.appendChild(th);
        th.appendChild(document.createTextNode("Miles"));
        th = document.createElement("th");
        tr.appendChild(th);
        th.appendChild(document.createTextNode("Kilometers"));
    }

    if (!tab.querySelector('tbody')) {
        var bod = document.createElement("tbody");
        tab.appendChild(bod);
    }

    // Data row
    var bod = tab.querySelector('tbody');
    var tr = document.createElement("tr");
    tr.setAttribute("class", "even");
    bod.appendChild(tr);

    var td = document.createElement("td");
    td.appendChild(document.createTextNode(miles));
    tr.appendChild(td);

    td = document.createElement("td");
    td.appendChild(document.createTextNode(c2f(miles)));
    tr.appendChild(td);
    
    function c2f(c) {return c * 1.6093}
}