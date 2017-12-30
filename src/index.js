alert('content_script: index')

const loc = document.location;
const uri = {
  spec: loc.href,
  host: loc.host,
  prePath: loc.protocol + '//' + loc.host,
  scheme: loc.protocol.substr(0, loc.protocol.indexOf(':')),
  pathBase: loc.protocol + '//' + loc.host + loc.pathname.substr(0, loc.pathname.lastIndexOf('/') + 1)
};

const documentClone = document.cloneNode(true);
const article = new Readability(uri, documentClone).parse();

chrome.runtime.sendMessage({
  cmd: 'open_reader',
  article
});
