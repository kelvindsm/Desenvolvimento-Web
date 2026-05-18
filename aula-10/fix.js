const fs = require('fs');
let text = fs.readFileSync('data.js', 'utf8');
text = text.replace(/'\[([^\]]+)\]\([^\)]*\)'/g, "'$1'");
fs.writeFileSync('data.js', text);

eval(text);
console.log('Total seleções:', teamsData.length);
const groups = {};
teamsData.forEach(t => { groups[t.group] = (groups[t.group] || 0) + 1; });
console.log(groups);
