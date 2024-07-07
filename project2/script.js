function conversionTable(tagId, miles)
{
    var first = document.getElementById("Input1");
    var second = document.getElementById("Input2")
    inches = parseInt(first.value);
    lbs = parseInt(second.value);
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
        th.appendChild(document.createTextNode("cms"));
        th = document.createElement("th");
        tr.appendChild(th);
        th.appendChild(document.createTextNode("kgs"));
        th = document.createElement("th");
        tr.appendChild(th);
        th.appendChild(document.createTextNode("BMI"));
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
    td.appendChild(document.createTextNode(inches*2.54));
    tr.appendChild(td);

    var td = document.createElement("td");
    td.appendChild(document.createTextNode(lbs*0.453592));
    tr.appendChild(td);

    td = document.createElement("td");
    td.appendChild(document.createTextNode(c2f(inches, lbs)));
    tr.appendChild(td);

    function c2f(inch, lbs) {return 703 * lbs / (inch * inch);}
}