// Task 1
document.write('<style>.diagonal{background:#999}.condition{background:#ddd}</style>');
document.write('<table border=1 cellpadding=5><tbody>');

var n = prompt('Введите число n'), rez = "";

for (var i = 1; i <= n; i++) {
	rez = rez + '<tr>';
	for (var j = 1; j <= n; j++) {
		if (j == 1) {
			rez = rez + '<td class="condition">' + i + '</td>';
		} else {
			if (i == 1) {
				rez = rez + '<td class="condition">' + j + '</td>';
			} else {
				if (i == j) {
					rez = rez + '<td class="diagonal">' + j * i + '</td>';
				} else {
					rez = rez + '<td>' + j * i + '</td>';
				}
			}
		}
	}
		rez = rez + '</tr>';
}

document.write(rez + '</tbody></table>');
