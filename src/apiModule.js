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
    console.log("MAKING API CALL!!!!!!!!!!!!!!!!")
    return {
        request: { url: `https://jsonplaceholder.typicode.com/posts/2` },
        successMsg: (response) => {
            console.log(response)
            return {
                type: MSGS.API_MODULE_MESSAGE,
                action: MSGS.MAKE_API_CALL_SUCCESS,
                payload: response,
            }
        },
        errorMsg: (response) => {
            return {
                type: MSGS.API_MODULE_MESSAGE,
                action: MSGS.MAKE_API_CALL_ERROR,
                payload: response,
            }
        }
    }
}

// ======================== MESSAGES ========================

const MSGS = {
    API_MODULE_MESSAGE: 'API_MODULE_MESSAGE',

    MAKE_API_CALL: 'MAKE_API_CALL',
    MAKE_API_CALL_SUCCESS: 'MAKE_API_CALL_SUCCESS',
    MAKE_API_CALL_ERROR: 'MAKE_API_CALL_ERROR',
};

// ======================== UPDATE ========================

function update(msg, model) {

    switch (msg.action) {

        case MSGS.MAKE_API_CALL: {
            console.log(`API MODULE > ${MSGS.MAKE_API_CALL}`, model)
            // Model to be sent in app.
            let newModel = model;
            newModel.content = "Loading..."

            // Command, executed in the app.
            let command = makeApiCall();
            // Send to app. Must be an array.
            return [newModel, command]
        }

        case MSGS.MAKE_API_CALL_SUCCESS: {
            console.log(`API MODULE > ${MSGS.MAKE_API_CALL_SUCCESS}`, model)
            let newModel = model;
            newModel.content = msg.payload.body;
            return [newModel, null]
        }

        case MSGS.MAKE_API_CALL_ERROR: {
            console.log(`API MODULE > ${MSGS.MAKE_API_CALL_ERROR}`, model)
            let newModel = model;
            newModel.content = msg.payload;
            return [newModel, null]
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
                    type: MSGS.API_MODULE_MESSAGE,
                    action: MSGS.MAKE_API_CALL
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