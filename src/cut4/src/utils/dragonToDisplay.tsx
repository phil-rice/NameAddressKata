import {FieldWithLens} from "../render/withLenses/file.with.lense";
import {renderStringInput} from "../render/simpleImpl/simple.renderers";
import {parseLens} from "./lens";
import React from "react";

const dragonToObj = (list: any[]) =><Main extends any>(obj: Main, setObj: (main: Main) => void,) => list.map((item) => {
    if (typeof item === 'string') {
        let [path, type] = item.split('/')
        const lens = parseLens(path)
        if (type === 'number')
            return <FieldWithLens id={path} renderer={renderStringInput} lens={lens} obj={obj} setObj={setObj}/>
        else if (type === 'string')
            return <FieldWithLens id={path} renderer={renderStringInput} lens={lens} obj={obj} setObj={setObj}/>
        else throw new Error(`Invalid type ${type}`);
    } else if (item.type) {
        if (item.type === 'title')
            return <h1>{item.text}</h1>
        else if (item.type === 'subtitle')
            return <h2>{item.text}</h2>
        else throw new Error(`Invalid type ${item.type}`);
    } else throw new Error(`Invalid item ${item}`);
});

