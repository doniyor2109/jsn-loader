# jsn-loader
This is webpack loader converts your dynamic configuration to static.

# Usage

Just add the loader to your webpack configuration

# Example

Before
This is your dynamic configuration file
```javascript
const os = require("os");
var foo = 1;

module.exports = {
  bar: foo + 1,
  foo: foo++,
  arr: ["npm", "run", "start"].join(" "),
  platform: os.platform()
};
```
After 
This is your static configuration file
```javascript
{
  "bar": 2,
  "foo": 2,
  "arr": "npm run start",
  "platform": "linux"
}
```


