const url = require('url');
const address = 'http://localhost:8080/default.htm?year=2021&month=october&day=26';
const parsedUrl = url.parse(address, true);

console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
console.log(parsedUrl.search);

const qdata = parsedUrl.query;
console.log(qdata);
console.log(qdata.month);