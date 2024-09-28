/*
import {ObjectDef} from "../RenderObject";
import {Dragon, Body, Head, Eye, Chest, Stomach, Wing, Color} from "../../domain/Dragon";

const colorOptions: Color[] = ['blue', 'green'];

export const eyeDef: ObjectDef<Eye> = {
    color: {type: 'dropdown', options: colorOptions},
};

export const stomachDef: ObjectDef<Stomach> = {
    contents: 'text'
};

export const chestDef: ObjectDef<Chest> = {
    stomach: {type: 'object', objectDef: stomachDef},
    hitpoints: 'text'
};

export const wingDef: ObjectDef<Wing> = {
    hitpoints: 'text'
};

export const bodyDef: ObjectDef<Body> = {
    chest: {type: 'object', objectDef: chestDef},
    leftWing: {type: 'object', objectDef: wingDef},
    rightWing: {type: 'object', objectDef: wingDef}
};

export const headDef: ObjectDef<Head> = {
    leftEye: {type: 'object', objectDef: eyeDef},
    rightEye: {type: 'object', objectDef: eyeDef},
    hitpoints: 'text'
};

export const dragonDef: ObjectDef<Dragon> = {
    body: {type: 'object', objectDef: bodyDef},
    head: {type: 'object', objectDef: headDef}
};
*/

export {}
