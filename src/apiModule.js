const h = require('virtual-dom/h');
let headerComponent = require('./headerComponent').headerComponent;

// ======================== MODEL ========================

const initModel = {
    content: "empty...",
};

// Initialize the view.
let init = {
    model: initModel,
    // command: getInitialData()
}

// ======================== HTTP COMMANDS ========================

function makeApiCall() {
    return {
        request: { url: `https://jsonplaceholder.typicode.com/posts/2` },
        successMsg: (response) => {
            return {
                type: MSGS.MAKE_API_CALL_SUCCESS,
                payload: response,
            }
        },
        errorMsg: (response) => {
            return {
                type: MSGS.MAKE_API_CALL_ERROR,
                payload: response,
            }
        }
    }
}


// ======================== MESSAGES ========================

const MSGS = {
    MAKE_API_CALL: 'MAKE_API_CALL',
    MAKE_API_CALL_SUCCESS: 'MAKE_API_CALL_SUCCESS',
    MAKE_API_CALL_ERROR: 'MAKE_API_CALL_ERROR',
};

// ======================== UPDATE ========================

function update(msg, model) {
    switch (msg.type) {

        case MSGS.MAKE_API_CALL: {
            // Model to be sent in app.
            let newModel = model;
            newModel.content = "Loading..."

            // Command, executed in the app.
            let command = makeApiCall();
            // Send to app. Must be an array.
            return [newModel, command]
            break;
        }

        case MSGS.MAKE_API_CALL_SUCCESS: {
            let newModel = model;
            newModel.content = msg.payload.body;
            return newModel;
            break;
        }

        case MSGS.MAKE_API_CALL_ERROR: {
            let newModel = model;
            newModel.content = msg.payload;
            return newModel;
            break;
        }

    }
}

// ======================== VIEW ========================


function view(dispatch, model) {
    return h('div', [
        headerComponent(dispatch, model),
        h('button', {
            onclick: () => {
                dispatch({
                    type: MSGS.MAKE_API_CALL
                })
            }
        },
            "Make API call"
        ),
        h('div', [model.content])
    ]);
}

module.exports.makeApiCall = makeApiCall;
module.exports.init = init;
module.exports.msg = MSGS;
module.exports.update = update;
module.exports.view = view;