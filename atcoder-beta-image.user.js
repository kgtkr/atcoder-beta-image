// ==UserScript==
// @name         AtCoder Beta Image
// @version      0.3
// @description  AtCoder Beta版の画像を正常に表示
// @author       kgtkr
// @match        https://beta.atcoder.jp/*
// ==/UserScript==

(function () {
  'use strict';
  function url(url) {
    {
      var reg = /^\/img\/other\/([0-9a-zA-Z\-_]+)\/bagnyahay\/([0-9a-zA-Z\-_]+)\.png$/;
      var arr = url.match(reg);
      if (arr) {
        var con = arr[1];
        var name = arr[2];
        return "https://" + con + ".contest.atcoder.jp/img/other/" + con + "/bagnyahay/" + name + ".png";
      }
    }
    {
      var reg = /^\/img\/([0-9a-zA-Z\-_]+)\/([0-9a-zA-Z\-_]+)(\/[0-9a-zA-Z\-_]+)*\/([0-9a-zA-Z\-_]+)\.png$/;
      var arr = url.match(reg);
      if (arr) {
        var con = arr[1] + arr[2];
        var oldUrl = "https://" + con + ".contest.atcoder.jp";
        return oldUrl + url;
      }
    }
    return null;
  }
  for (var _i = 0, _a = document.getElementsByTagName("img"); _i < _a.length; _i++) {
    var img = _a[_i];
    var newURL = url(img.getAttribute("src"));
    if (newURL !== null) {
      img.setAttribute("src", newURL);
    }
  }

})();