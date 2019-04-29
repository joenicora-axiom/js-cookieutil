// Installation

Copy + paste into Chrome Developer Tools as a new code snippet

// example usage

CookieUtil = new CookieUtil();

CookieUtil.dump();

// you can use plain text or serialize/deserialize JSON

CookieUtil.create('CookieUtil', '{"message":"Mildly handy utility"}', 10);// name, value, days

CookieUtil.dump();

console.log(CookieUtil.get('CookieUtil')); //name

console.log(document.cookie);

console.log(CookieUtil.destroy('CookieUtil')); // name

CookieUtil.dump();

console.log(document.cookie);
