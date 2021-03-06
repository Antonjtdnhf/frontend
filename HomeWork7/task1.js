var framework = {
  append: function(elem, elem1) {
    return elem.appendChild(elem1);
  },
  prepend: function(elem, elem1, nextSibling) {
    return elem.insertBefore(elem1, nextSibling)
  },
  remove: function(elem) {
    return elem.remove()
  },
  create: function(elem) {
    return document.createElement(elem);
  },
  getBy: {
    id: function(id) {
      return document.getElementById(id);
    },
    class: function(clas) {
      return document.getElementsByClassName(clas);
    },
    name: function(name) {
      return document.getElementsByName(name);
    },
    tag: function(tag) {
      return daocument.getElementsByTagName(tag)
    },
    selectorAll: function(elem, css) {
      return elem.querySelectorAll(css);
    },
    selector: function(elem, css) {
      return elem.querySelector(css);
    }
  },
  event: {
    add: function(event1, handler, elem) {
      if (typeof(elem.addEventListener) = "function") {
        return elem.addEventListener(event1, handler);
      } else {
        return elem.attachEvent("on" + event1, handler);
      }
    },
    remove: function(event1, handler, elem) {
      if (typeof(elem.addEventListener) = "function") {
        return elem.addEventListener(event1, handler);
      } else {
        return elem.detachEvent("on" + event1, handler);
      }
    },
    dispatch: function(event1, elem) {
      if (typeof(elem.addEventListener) = "function") {
        return elem.dispatchEvent(event1);
      } else {
        return elem.fireEvent("onclick", event1);
      }
    }
  },
  ajax: function(m, p, f) {
		var load = function() {
			var xhr = new XMLHttpRequest();
			xhr.open(m, p, true);
			xhr.onload = function() {
				var text = this.responseText;
				f(text);
			}
			xhr.send(null);
		}

		window.onhashchange = function() {
			load();
		}
	}
}                                                                                                                                                                                                                                                                                                                                                                               
