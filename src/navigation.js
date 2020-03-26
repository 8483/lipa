const MSGS = {
    LOCATION_CHANGE: 'LOCATION_CHANGE',
};

function locationChangeMsg(path) {
    console.log("locationChangeMsg", path)
    return {
        type: MSGS.LOCATION_CHANGE,
        path
    }
}

module.exports.locationChangeMsg = locationChangeMsg;