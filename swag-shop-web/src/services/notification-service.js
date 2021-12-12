export const NOTIF_WISHLIST_CHANGED = "notif-wishlist";
var observers = {};
let instance = null;
class NotificationService {
    constructor() {
        if (!instance) {
            instance = this;
        }
        return instance;
    }

    removeObserver = (observer, notifName) => {
        var obs = observers[notifName];
        if (obs) {
            for (var x = 0; x < obs.length; x++) {
                if (observer === obs[x].observer) {
                    obs.splice(x, 1);
                    observers[notifName] = obs;
                    break;
                }
            }
        }
    }
    addObserver = (notifName, observer, callBack) => {
        // console.log("addObserver Function");
        let obs = observers[notifName];
        if (!obs) {
            observers[notifName] = [];
        }
        let obj = { observer: observer, callBack: callBack };
        observers[notifName].push(obj);
        // console.log(observers);
        // return callBack(data);
    }

    postNotification = (notifName, data) => {
        let obs = observers[notifName];
        // console.log(data);
        // console.log(obs);
        // console.log(notifName);
        for (var x = 0; x < obs.length; x++) {
            var obj = obs[x];
            obj.callBack(data);
        }
    }
}
export default NotificationService;