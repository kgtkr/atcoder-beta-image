function url(url) {
  {
    const reg = /^\/img\/other\/([0-9a-zA-Z\-_]+)\/bagnyahay\/([0-9a-zA-Z\-_]+)\.png$/;
    const arr = url.match(reg);
    if (arr) {
      const con = arr[1];
      const name = arr[2];
      return `https://${con}.contest.atcoder.jp/img/other/${con}/bagnyahay/${name}.png`;
    }
  }
  {
    const reg = /^\/img\/([0-9a-zA-Z\-_]+)\/([0-9a-zA-Z\-_]+)(\/[0-9a-zA-Z\-_]+)*\/([0-9a-zA-Z\-_]+)\.png$/;
    const arr = url.match(reg);
    if (arr) {
      const con = arr[1] + arr[2];
      const oldUrl = `https://${con}.contest.atcoder.jp`;
      return oldUrl + url;
    }
  }
  
  return null;
}

for (let img of document.getElementsByTagName("img")) {
  const newURL = url(img.getAttribute("src"));
  if (newURL !== null) {
    img.setAttribute("src", newURL);
  }
}