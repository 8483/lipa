const h = require('virtual-dom/h');
let locationChangeMsg = require('./navigation').locationChangeMsg;

function headerComponent(dispatch, model) {
    return h('div', [
        h('button', {
            onclick: () => dispatch(locationChangeMsg("/"))
        }, "HOME PAGE"),
        h('button', {
            onclick: () => dispatch(locationChangeMsg("/api"))
        }, "API CALL"),
        h('button', {
            onclick: () => dispatch(locationChangeMsg("/counter"))
        }, "COUNTER"),
        h('br'),
        h('br'),
    ]);
}

module.exports.headerComponent = headerComponent;