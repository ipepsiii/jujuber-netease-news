function jsonp(url) {
  return new Promise((resolve) => {
    let script = document.createElement('script');
    script.setAttribute("src", url);
    document.body.appendChild(script);
    window.artiList = function (data) {
      resolve(data)
      document.body.removeChild(script);
    };
  })
}

async function fetchFlow(column, offset, length) {
  return await jsonp(`http://3g.163.com/touch/reconstruct/article/list/${column}/${offset}-${length}.html`).then(data => {
    if (!data) return [];
    for (let key in data) {
      data = data[key];
      break;
    }
    return data.filter(item => item.skipType !== 'video' && item.skipType !== 'special' && item.skipType !== 'live' && item.modelmode !== 'u')
  });
}


/* /list/column/offset-length */
async function getList(url) {
  let requestArray = url.split('/');
  let column = requestArray[2];
  let offset = requestArray[3].split('-')[0];
  let length = requestArray[3].split('-')[1].split('.')[0];
  return await fetchFlow(column, offset, length);
}


export default getList;
