module.exports = function () {
    return {
        visitor: {
            CallExpression (path) {
                const {object, property} = path.node.callee;
                if (!object || !property) return;
                if (object.name === 'console' && property.name === 'log') {
                    path.remove();
                }
            }
        }
    };
};
