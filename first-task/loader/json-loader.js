module.exports = json => {
    if (!json) return;
    const parsedJson = JSON.parse(json);
    const methodsString = parseMethods(parsedJson.methods);
    const propertiesString = parseProperties(parsedJson.properties);
    const result = `class ${parsedJson.name} {
        ${propertiesString} 
        ${methodsString}
    }`;

    return `module.exports = ${result}`;
};

function parseMethods (objMethods) {
    let result = '';
    for (let key in objMethods) {
        result += `
        ${key} () {
            ${objMethods[key]}
        }
        `;
    }
    return result;
}

function parseProperties (objProperties) {    
    let result = 'constructor () {';
    for (let key in objProperties) {
        let value = objProperties[key];
        if (typeof value === 'string') {
            value = `'${objProperties[key]}'`;
        }
        result += `
        this.${key} = ${value};
        `;
    }
    return result + '}';
}
