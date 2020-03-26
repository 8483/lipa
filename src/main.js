/* 
TODO: 

- Use spread operator to update the model in the update function. { ...model, input: msg.payload };
- Make an example app with menu, and 3 pages: counter, todo, api calls
- Split code into modules i.e. page one and page two, to be combined with webpack.

*/

const h = require('virtual-dom/h');
const diff = require('virtual-dom/diff');
const patch = require('virtual-dom/patch');
const createElement = require('virtual-dom/create-element');

let locationChangeMsg = require('./navigation').locationChangeMsg;
let headerComponent = require('./headerComponent').headerComponent;
let CounterModule = require('./counterModule');
let ApiModule = require('./apiModule');

// ======================== PAGES ========================

const PAGES = {
    HOME: '/',
    API: '/api',
    COUNTER: '/counter'
};

// ======================== MODEL ========================

const initModel = {
    page: PAGES.HOME,
    counterModule: CounterModule.init,
    apiModule: ApiModule.init,
    initialData: "Initial data...",
    contentOne: null,
    input: "",
    items: [
        { id: 1, task: "Get milk." },
        { id: 2, task: "Get eggs." },
        { id: 3, task: "Get chocolate." },
        { id: 4, task: "Get bread." },
    ],
};

// Initialize the view.
let init = {
    model: initModel,
    command: getInitialData()
}

// ======================== HTTP COMMANDS ========================

function getInitialData(model) {
    return {
        request: { url: `https://swapi.co/api/people/1/` },
        // If the request succeeds, dispatch a message with these parameters.
        successMsg: (response) => {
            return {
                type: MSGS.GET_INITIAL_DATA_SUCCESS,
                payload: response,
            }
        },
        // If the request fails, dispatch a message with these parameters.
        errorMsg: (response) => {
            return {
                type: MSGS.GET_INITIAL_DATA_ERROR,
                payload: response,
            }
        }
    }
}

function getDataOne(model) {
    return {
        request: { url: `https://jsonplaceholder.typicode.com/posts/1` },
        // If the request succeeds, dispatch a message with these parameters.
        successMsg: (response) => {
            return {
                type: MSGS.GET_DATA_ONE_SUCCESS,
                payload: response,
            }
        },
        // If the request fails, dispatch a message with these parameters.
        errorMsg: (response) => {
            return {
                type: MSGS.GET_DATA_ONE_ERROR,
                payload: response,
            }
        }
    }
}

// ======================== MESSAGES ========================

/*
type Msg
    = Navigate Page
    | ChangePage Page
    | ChildModuleMsg ChildModule.Msg
*/

let MSGS = {
    LOCATION_CHANGE: 'LOCATION_CHANGE',

    INPUT: 'INPUT',
    SAVE: 'SAVE',
    DELETE: 'DELETE',

    GET_INITIAL_DATA_SUCCESS: 'GET_INITIAL_DATA_SUCCESS',
    GET_INITIAL_DATA_ERROR: 'GET_INITIAL_DATA_ERROR',

    GET_DATA_ONE: 'GET_DATA_ONE',
    GET_DATA_ONE_SUCCESS: 'GET_DATA_ONE_SUCCESS',
    GET_DATA_ONE_ERROR: 'GET_DATA_ONE_ERROR',

    COUNTER_MODULE_MESSAGE: "COUNTER_MODULE_MESSAGE",
    API_MODULE_MESSAGE: "API_MODULE_MESSAGE"
};

// ======================== UPDATE ========================

function update(msg, model) {
    switch (msg.type) {

        // Forwards the messages to the counter module
        case MSGS.COUNTER_MODULE_MESSAGE: {
            let counterModuleModel = { model: CounterModule.update(msg, model.counterModule.model) };
            let newModel = { ...model, counterModule: counterModuleModel };
            return newModel;
        }

        // Forwards the messages to the api module
        case MSGS.API_MODULE_MESSAGE: {

            // Extract model
            let apiModuleModel = { model: ApiModule.update(msg, model.apiModule.model)[0] };

            // extract command
            let apiModuleCommand = ApiModule.update(msg, model.apiModule.model)[1]

            let newModel = { ...model, apiModule: apiModuleModel };
            let command = apiModuleCommand;
            return [newModel, command];
        }

        case MSGS.LOCATION_CHANGE: {
            console.log("UPDATE MSG: ", msg)
            let newModel = model;
            newModel.page = msg.path;
            history.pushState("", "", msg.path); // BACK and FORWARD button
            return newModel;
        }

        case MSGS.INPUT: {
            // let newModel = model;
            // newModel.input = msg.payload;
            return { ...model, input: msg.payload };
        }

        case MSGS.SAVE: {
            let newModel = model;
            // Simulate Id incrementing.
            let id = newModel.items.length > 0 ? lastId = newModel.items[newModel.items.length - 1].id + 1 : 1;
            newModel.items.push({ id: id, task: newModel.input });
            newModel.input = "";
            return newModel;
        }

        case MSGS.DELETE: {
            return { ...model, items: model.items.filter(item => item.id != msg.payload) };
        }

        case MSGS.GET_INITIAL_DATA_SUCCESS: {
            return { ...model, initialData: JSON.stringify(msg.payload) };
        }

        case MSGS.GET_INITIAL_DATA_ERROR: {
            let newModel = model;
            newModel.initialData = msg.payload;
            return newModel;
        }

        case MSGS.GET_DATA_ONE: {
            // Model to be sent in app.
            let newModel = model;
            newModel.contentOne = "Loading..."

            // Command, executed in the app.
            let command = getDataOne();
            // Send to app. Must be an array.
            return [newModel, command]
        }

        case MSGS.GET_DATA_ONE_SUCCESS: {
            let newModel = model;
            newModel.contentOne = msg.payload.body;
            return newModel;
        }

        case MSGS.GET_DATA_ONE_ERROR: {
            let newModel = model;
            newModel.contentOne = msg.payload;
            return newModel;
        }
    }
}

// ======================== VIEW ========================

function homeView(dispatch, model) {

    function table() {
        var rows = []
        for (var i = 0; i < model.items.length; i++) {
            var item = model.items[i]
            rows.push(
                h('tr', {
                    attributes: { 'data-id': item.id },
                    onclick: (e) => {
                        dispatch({
                            type: MSGS.DELETE,
                            payload: e.target.parentNode.attributes["data-id"].value
                        })
                    }
                }, [
                    h('td', [item.task]),
                ])
            )
        }
        return h('table', [
            h('tbody', rows)
        ])
    }

    function input() {
        return h('input', {
            value: model.input,
            onkeyup: (e) => {
                if (e.key == "Enter") {
                    dispatch({
                        type: MSGS.SAVE
                    })
                } else {
                    dispatch({
                        type: MSGS.INPUT,
                        payload: e.target.value
                    })
                }
            }
        })
    }

    return h('div', [
        headerComponent(dispatch, model),
        h('div', [model.initialData]),
        h('br'),
        h('button', {
            onclick: () => {
                dispatch({
                    type: MSGS.GET_DATA_ONE
                })
            }
        },
            "Get data one"
        ),
        h('div', [model.contentOne]),
        h('br'),
        input(),
        h('span', [model.input]),
        table()
    ]);
}

/*
view model =
    let
        page =

            case model.page of
                ChildModulePage ->
                    Html.map ChildModuleMsg
                        ( ChildModule.view model.childModule )

                DashboardPage ->
                    Html.map DashboardMsg
                        ( Dashboard.view model.dashboard )

                LoginPage ->
                    Html.map LoginMsg
                        ( Login.view model.login )

                NotFound ->
                    div [ class "main" ]
                        [ h1 []
                            [ text "Page Not Found!" ]
                        ]
    in
        div [ class "container-fluid full-height" ]
            [ pageHeader model
            , page
            ]
*/

function view(dispatch, model) {
    console.log("VIEW model.page:", model.page)
    switch (model.page) {
        case PAGES.HOME: {
            console.log("PAGES.HOME")
            return homeView(dispatch, model);
        }
        case PAGES.API: {
            // console.log("PAGES.API")
            return ApiModule.view(dispatch, model.apiModule.model);
        }
        case PAGES.COUNTER: {
            // console.log("PAGES.COUNTER")
            return CounterModule.view(dispatch, model.counterModule.model);
        }
    }
}

// ======================== APP ========================

function app(init, update, view, node) {

    // This is the initialization of the app i.e. only fires once
    console.log(init)
    // Get the current browser's URL pathname
    const { pathname } = window.location;
    console.log(pathname)
    // Store the message with the pathname, to be dispatched
    const initMsg = locationChangeMsg(pathname);
    // The model is set to the initModel
    let model = update(initMsg, init.model);
    // The command is the initial data from an HTTP request.
    // If there is a command, execute the HTTP request.
    // // Update view at future time with the response.
    let command = init.command;
    if (command) httpEffects(dispatch, command);
    // The new view is rendered based on the initial model.
    let currentView = view(dispatch, model);
    console.log(currentView)
    // The new view is created and appended to the DOM.
    let rootNode = createElement(currentView);
    console.log(rootNode)
    node.appendChild(rootNode);

    // Dispatch sends a message with a type and payload to the update function, which updates the model, and the view renders the model
    function dispatch(msg) {
        // Update "catches" it, updates the current model, and returns it.
        // returns either a model or an array with model and command
        const updates = update(msg, model);
        console.log("INSIDE DISPATCH:", updates)
        // Array check boolean
        const isArray = updates.constructor === Array;
        // Get the model from the array. If not array, it's just the model.
        model = isArray ? updates[0] : updates;
        // Get the command form the array
        const command = isArray ? updates[1] : null;
        // Pass the dispatch function and command object for HTTP execution.
        // Update view at future time with the response.
        httpEffects(dispatch, command);
        // Return the new view either from normal types, or HTTP ones
        // The new view is rendered based on the returned new model.
        const updatedView = view(dispatch, model);
        // The DOM updates are defined.
        const patches = diff(currentView, updatedView);
        // The DOM updates are applied.
        rootNode = patch(rootNode, patches);
        // The new view becomes the old view in for future dispatches.
        currentView = updatedView;
        console.log("\n")
    }

    // BACK BUTTON i.e. load the view stored in the back button.
    window.addEventListener('popstate', () => {
        console.log("POPSTATE")
        const { pathname } = window.location;
        const msg = locationChangeMsg(pathname);
        dispatch(msg);
    })
}

// This returns data at a future time. The app renders something else until then.
function httpEffects(dispatch, command) {
    if (command === null) {
        return;
    }
    // Get the request object from the command.
    let request = command.request;
    // Fetch, and dispatch a success or fail message.
    fetch(request.url, request.headers, request.body)
        .then(res => res.json())
        .then(result => {
            // Dispatch the returned message defined in the command.
            dispatch(command.successMsg(result));
        })
        .catch(error => {
            // Dispatch the returned message defined in the command.
            dispatch(command.errorMsg(error));
        });
}

// App initializing.
const rootNode = document.getElementById('app');
app(init, update, view, rootNode);