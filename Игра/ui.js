var horisontal = document.getElementsByTagName("tr"),
    width = horisontal.length,
    change = 0;

document.addEventListener("keydown", function(e) {
    if (e.keyCode == 37) shift("left");
    if (e.keyCode == 38) shift("top");
    if (e.keyCode == 39) shift("right");
    if (e.keyCode == 40) shift("bottom");
})
var matrix = getMatrix();
randAdd(matrix);

function shift(x) {
    matrix = getMatrix();
    switch (x) {
        case "right":
            for (var i = 0; i < width; i++) {
                for (var j = width - 1; j > 0; j--)
                    if (matrix[i][j].length > 0) {
                        for (var k = j - 1; k >= 0; k--) {
                            if (matrix[i][j] != matrix[i][k] && matrix[i][k].length != 0) break;
                            else if (matrix[i][j] == matrix[i][k]) {
                                matrix[i][k] = +matrix[i][k] * 2;
                                scorenumber.innerHTML = +scorenumber.innerHTML + matrix[i][k];
                                change = 1;
                                matrix[i][j] = "";
                                j--;
                                break;
                            }
                        }
                    }
                for (var k = width - 2; k >= 0; k--) {
                    if (matrix[i][k].length == 0) continue;
                    for (var n = k + 1; n < width; n++)
                        if (matrix[i][n].length == 0) {
                            matrix[i][n] = matrix[i][n - 1];
                            matrix[i][n - 1] = "";
                            change = 1;
                        }
                }
            }
            break;
        case "left":
            for (var i = 0; i < width; i++) {
                for (var j = 0; j < width - 1; j++)
                    if (matrix[i][j].length > 0) {
                        for (var k = j + 1; k < width; k++) {
                            if (matrix[i][j] != matrix[i][k] && matrix[i][k].length != 0) break;
                            else if (matrix[i][j] == matrix[i][k]) {
                                matrix[i][k] = +matrix[i][k] * 2;
                                scorenumber.innerHTML = +scorenumber.innerHTML + matrix[i][k];
                                change = 1;
                                matrix[i][j] = "";
                                j++;
                                break;
                            }
                        }
                    }
                for (var k = 1; k < width; k++) {
                    if (matrix[i][k].length == 0) continue;
                    for (var n = k - 1; n >= 0; n--)
                        if (matrix[i][n].length == 0) {
                            matrix[i][n] = matrix[i][n + 1];
                            matrix[i][n + 1] = "";
                            change = 1;
                        }
                }
            }
            break;
        case "top":
            for (var i = 0; i < width; i++) {
                for (var j = 0; j < width - 1; j++)
                    if (matrix[j][i].length > 0) {
                        for (var k = j + 1; k < width; k++) {
                            if (matrix[j][i] != matrix[k][i] && matrix[k][i].length != 0) break;
                            else if (matrix[j][i] == matrix[k][i]) {
                                matrix[k][i] = +matrix[k][i] * 2;
                                scorenumber.innerHTML = +scorenumber.innerHTML + matrix[k][i];
                                change = 1;
                                matrix[j][i] = "";
                                j++;
                                break;
                            }
                        }
                    }
                for (var k = 1; k < width; k++) {
                    if (matrix[k][i].length == 0) continue;
                    for (var n = k - 1; n >= 0; n--)
                        if (matrix[n][i].length == 0) {
                            matrix[n][i] = matrix[n + 1][i];
                            matrix[n + 1][i] = "";
                            change = 1;
                        }
                }
            }
            break;
        case "bottom":
            for (var i = 0; i < width; i++) {
                for (var j = width - 1; j > 0; j--)
                    if (matrix[j][i].length > 0) {
                        for (var k = j - 1; k >= 0; k--) {
                            if (matrix[j][i] != matrix[k][i] && matrix[k][i].length != 0) break;
                            else if (matrix[j][i] == matrix[k][i]) {
                                matrix[k][i] = +matrix[k][i] * 2;
                                scorenumber.innerHTML = +scorenumber.innerHTML + matrix[k][i];
                                matrix[j][i] = "";
                                change = 1;
                                j++;
                                break;
                            }
                        }
                    }
                for (var k = width - 2; k >= 0; k--) {
                    if (matrix[k][i].length == 0) continue;
                    for (var n = k + 1; n < width; n++)
                        if (matrix[n][i].length == 0) {
                            matrix[n][i] = matrix[n - 1][i];
                            matrix[n - 1][i] = "";
                            change = 1;
                        }
                }
            }
            break;
    }
    if (change) {
        change = 0;
        setMatrix(matrix);
        randAdd(matrix);
    }
}



function getMatrix() {
    var matrix = new Array();
    for (var i = 0; i < width; i++) {
        matrix[i] = new Array();
        for (var j = 0; j < width; j++)
            matrix[i][j] = horisontal[i].getElementsByClassName("number")[j].innerHTML;
    }
    return matrix;
}

function setMatrix(matrix) {
    for (var i = 0; i < width; i++)
        for (var j = 0; j < width; j++)
            horisontal[i].getElementsByClassName("number")[j].innerHTML = matrix[i][j];

}

function randAdd(matrix) {
    var randnumber = Math.round(0.5 + Math.random() * 4),
        max = 0;
    for (var i = 0; i < width; i++)
        for (var j = 0; j < width; j++)
            if (matrix[i][j].length == 0) max++;
    var randcell = Math.round(0.5 + Math.random() * max);
    var count = 0;
    for (var i = 0; i < width; i++) {
        if (count == -1) break;
        for (var j = 0; j < width; j++) {
            if (matrix[i][j].length == 0) count++;
            if (count == randcell) {
                horisontal[i].getElementsByClassName("number")[j].innerHTML = randnumber == 2 ? "4" : "2";
                count = -1;
                break;
            }
        }
    }
}