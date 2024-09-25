export interface Name {
    title: string;
    firstName: string;
    lastName: string;
}

/**
 * set the initial state of any name in the form (empty) because
 * we will pass this to the useState hook which receives the initial state of
 * the object
 */
export const initialName: Name = {
    title: '',
    firstName: '',
    lastName: ''
}