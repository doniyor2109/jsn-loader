const fs = require("fs");
const path = require("path");

module.exports = function (source) {
    var context = this._module && this._module.issuer
        && this._module.issuer.context || "";
    var filename = path.basename(this.resource).replace(/\..*?$/,".json");
    var code = null;
    try {
        code = eval(source);
    } catch (e){
        console.error("wrong js for json format");
    }
    fs.writeFileSync(path.resolve(this.options && this.options.output && this.options.output.path || "", filename), JSON.stringify(code || {}));
    return `module.exports = __webpack_public_path__ +  '${filename}'`;
};

