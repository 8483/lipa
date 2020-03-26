const h = require('virtual-dom/h');
let headerComponent = require('./headerComponent').headerComponent;

// ======================== MODEL ========================

const initModel = {
    counter: 0
};

// Initialize the view.
let init = {
    model: initModel,
    // command: getInitialData()
}

// ======================== MESSAGES ========================

const MSGS = {
    COUNTER_MODULE_MESSAGE: 'COUNTER_MODULE_MESSAGE',
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
};

// ======================== UPDATE ========================

function update(msg, model) {
    switch (msg.action) {

        case MSGS.INCREMENT: {
            console.log("COUNTER MODULE > UPDATE INCREMENT", model)
            return { counter: model.counter + 1 };
        }

        case MSGS.DECREMENT: {
            console.log("COUNTER MODULE > UPDATE INCREMENT", model)
            return { counter: model.counter - 1 };
        }
    }
}

// ======================== VIEW ========================

function view(dispatch, model) {
    console.log(model.counter)
    return h('div', [
        headerComponent(dispatch, model),
        h('div', ["Counter Module"]),
        h('button', {
            onclick: () => {
                dispatch({
                    type: MSGS.COUNTER_MODULE_MESSAGE,
                    action: MSGS.INCREMENT
                })
            }
        },
            "+"
        ),
        h('button', {
            onclick: () => {
                dispatch({
                    type: MSGS.COUNTER_MODULE_MESSAGE,
                    action: MSGS.DECREMENT
                })
            }
        },
            "-"
        ),
        h('div', [model.counter])
    ]);
}

module.exports.init = init;
module.exports.msg = MSGS;
module.exports.update = update;
module.exports.view = view;