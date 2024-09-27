//export type Hitpoint = number;
export type Color = 'blue' | 'green';

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
    hitpoints: number;
}

export interface Eye {
    color: Color;
}

export interface Chest {
    stomach: Stomach;
    hitpoints: number;
}

export interface Stomach {
    contents: string[];
}

export interface Wing {
    hitpoints: number;
}

export const dragonData: Dragon = {
    body: {
        chest: {
            hitpoints: 10,
            stomach: {
                contents: ['the adventurer'],
            },
        },
        leftWing: {hitpoints: 5},
        rightWing: {hitpoints: 5},
    },
    head: {hitpoints: 5, leftEye: {color: 'blue'}, rightEye: {color: 'green'}},
};