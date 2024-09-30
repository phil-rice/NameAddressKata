//export type Hitpoint = number;
export type Color = 'blue' | 'green' | '';

export interface Dragon {
    body: Body;
    head: Head;
}

export interface Body {
    chest: Chest;
    leftWing: Wing;
    rightWing: Wing;
}

export interface Head {
    leftEye: Eye;
    rightEye: Eye;
    hitpoints: string;
}

export interface Eye {
    color: Color;
}

export interface Chest {
    stomach: Stomach;
    hitpoints: string;
}

export interface Stomach {
    contents: string[];
}

export interface Wing {
    hitpoints: string;
}

export const initialDragon: Dragon = {
    body: {
        chest: {
            hitpoints: '10',
            stomach: {
                contents: ['the adventurer'],
            },
        },
        leftWing: {hitpoints: '5'},
        rightWing: {hitpoints: '5'},
    },
    head: {hitpoints: '5', leftEye: {color: 'blue'}, rightEye: {color: 'green'}},
};

/*
export interface Dragon {
    body: string,
    head: string;
    wings: string;
    claws: Claws;
}

export interface Claws {
    length: string,
    sharpness: string
}*/
