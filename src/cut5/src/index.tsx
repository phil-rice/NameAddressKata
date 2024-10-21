import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {eventProcessor, EventProcessor, LensEvent, SetEvent} from "./generic/events/events";
import {NameForm} from "./thisapp/components/NameForm";
import {AddressForm} from "./thisapp/components/AddressForm";
import {SimpleComponentsProvider} from "./generic/hooks/use.component";
import {SimpleFieldComponents} from "./generic/components/simpleImpl/simple.field.components";
import {appendPath} from "./generic/optics/optics";

export type SetFn = (path: string, localPath: string, value: string) => void;
export type StateOps<S> = [Partial<S>, SetFn];
export const StateContext = React.createContext<StateOps<any> | undefined>(undefined);

export function useStateOps<S>(): StateOps<S> {
    const stateOps = React.useContext(StateContext);
    if (!stateOps) throw new Error('useStateOps must be used within a StateProvider');
    return stateOps as StateOps<S>;
}

type StateProviderProps<S> = { initialEvents: LensEvent[], processor: EventProcessor<S>, children: React.ReactNode }

export function StateOpsProvider<S>({initialEvents, processor, children}: StateProviderProps<S>) {
    const [events, setEvents] = React.useState<LensEvent[]>(initialEvents);
    const [state, setState] = React.useState<Partial<S>>({});

    const setValue: SetFn = (path, localPath, value) => {
        const event: SetEvent = {type: 'setValue', path: appendPath(path, localPath), value};
        let newEvents = [...events, event];
        setEvents(newEvents);
        const newState = processor([event], state); //note we could run all events instead...
        setState(newState);
        console.log('fireEvent', event, newEvents, newState);
    }
    return <StateContext.Provider value={[state, setValue]}>{children}</StateContext.Provider>
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <SimpleComponentsProvider value={SimpleFieldComponents}>
            <StateOpsProvider initialEvents={[]} processor={eventProcessor}>
                <NameForm path='name'/>
                <AddressForm path='address'/>
            </StateOpsProvider></SimpleComponentsProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
