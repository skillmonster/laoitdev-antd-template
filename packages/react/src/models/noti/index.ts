import { ErrorRes } from "models/error";

/* The `NotifyAlert` interface is defining the structure of an object that represents an alert
notification. It has the following properties: */
export interface NotifyAlert {
     message: string;
     description?: ErrorRes['details'][0]['reason'] | string;
     type?: 'success' | 'error' | 'warning' | 'info';
     duration?: number;
     serviceType: 'snackbar' | 'pageComponent';
}

/* The `export interface InitialState` is defining the structure of an initial state object for a
module or component. It has three properties: */
export interface InitialState {
     alerts: NotifyAlert[] | null;
     addAlert: (payload: NotifyAlert | NotifyAlert[]) => void;
     removeAlert: () => void;
}
