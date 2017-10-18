// Task 1
document.write('<table border=1 cellpadding=10><tbody>');
var arr = [screen.availWidth, screen.availHeight, screen.height, screen.width, screen.colorDepth, navigator.appCodeName,
	navigator.appName, navigator.cookieEnabled, navigator.javaEnabled, navigator.onLine,
	navigator.userAgent, history.length, location.hash, location.host, location.href, location.port, location.protocol,
	location.search, window.innerWidth, window.innerHeight];
var a = ["Активная ширина", "Активная высота", "Высота экрана", "Ширина экрана", "Битовая глубина цветтовой палитры",
"Текущая ориентация экрана", "Кодовое имя браузера", "Имя браузера", "Поддержка cookie", "Подъдержка Java в браузере",
"Информация о браузере", "Количество URL которые хранятся в History", "Часть URL от #", "Хост", "URL", "Номер порта",
"Протокол", "Часть адресса от ?", "Ширина рабочей области", "Высота рабочей области"];

for (var i = 0; i < a.length; i++) {

	document.write('<tr><td>'+ a[i] +'</td>'+'<td>'+arr[i]+'</td></tr>');

}
