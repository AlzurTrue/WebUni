
function finit() { //
    var k = AS.length
    var s = "<table id=\"table-id\" border width=500 > <tr data-sort-method='none'><th>Автостанция</th><th>Год</th><th>Месяц</th><th>Вызовы</th></tr>"
    for (i=0; i<k; i++){
        ns = AS[i].AdmArea
        ts = AS[i].Year
        rs = AS[i].Month
        us = AS[i].Calls
        s += "<tr><td>"+ns+"</td>"+"<td>"+ts+"</td>"+"<td>"+rs+"</td>"+"<td>"+us+"</td></tr>";
    }
    s += "</table>"
    document.write(s);

}


finit();

