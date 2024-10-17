import {lensFromPath} from "../optics/optics";

export type SetEvent = { type: 'setValue', path: string, value: any }

export type AppendEvent = { type: 'append', path: string, value: any }
export type Event = SetEvent | AppendEvent


export function setEventProcessor<T>(start: Partial<T>, e: SetEvent): Partial<T> {
    const lens = lensFromPath<any>(e.path)
    return lens.set(start, e.value)
}

export function appendEventProcessor<T>(start: Partial<T>, e: AppendEvent): Partial<T> {
    const lens = lensFromPath<any>(e.path) // lens points to an array
    const oldArray = lens.get(start)
    return lens.set(start, [...oldArray, e.value])
}

export function oneProcessor<T>(start: Partial<T>, e: Event): Partial<T> {
    switch (e.type) {
        case 'setValue':
            return setEventProcessor(start, e)
        case 'append':
            return appendEventProcessor(start, e)
        default:
            throw new Error(`Unknown event type ${JSON.stringify(e)}`)
    }
}

export function eventProcessor<T>(events: Event[], start: Partial<T>): Partial<T> {
    return events.reduce((acc, e) => oneProcessor(acc, e), start)
}