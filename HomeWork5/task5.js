var n = prompt('Введите число n'),
  p = 2,
  m = 0,
  queue = [],
  pos = 0,
  pos2 = 0;
createTable(n);


function createTable(col) {
  var rez = "";
  document.write('<style>td{transition:all ease .5s}</style>');
  document.write('<table border=1 cellpadding=5><tbody><tr>');

  for (var i = 0; i < col - 1; i++) {
    if (i % 25 == 0) rez = rez + '</tr><tr>';
    rez = rez + '<td>' + (i + 2) + '</td>';
  }

  document.write(rez + '</tr></tbody></table>');
}
document.getElementById('start').addEventListener("click", function() {
  start();
});

function start() {

  var td = document.getElementsByTagName('td');

  function easy() {

    for (var i = m; i < td.length; i++) {
      if (i == m) {
        continue;
      }
      if (td[i].innerHTML % p == 0) {
        td[i].className = "first";
        queue[pos2++] = i;
      }

      if (i == td.length - 1) {
        for (var j = 0; j < td.length; j++) {
          if (td[j].innerHTML > p && td[j].className != 'first') {
            m = j;
            p = td[j].innerHTML;
            easy();
            break;
          }
        }
      }
    }
  }

  easy();


  setTimeout(function() {
    anim(queue);
  }, 1000)

  function anim(x) {

    td[x[pos]].style.backgroundColor = '#aaa';

    setTimeout(function() {
      if (pos < x.length) {
        anim(x);
        pos++;
      }
    }, 500)

  }

}
