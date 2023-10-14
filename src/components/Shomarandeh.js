import React, {useState} from 'react';
import AfzayeshKahesh from "./AfzayeshKahesh";
import {useShomarandeh} from "../ShomarandehContext";
import {Button} from "primereact/button";

function Shomarandeh(props) {

    const {state, dispatch} = useShomarandeh();

    return (
        <div className="w-4 flex flex-column gap-4">
            <span className="flex w-full gap-2 justify-content-center">{state.currentValue}</span>
            <AfzayeshKahesh/>
            <Button label="مقدار ثابت" onClick={()=>{dispatch({type:"SABET", value:75})}}/>
        </div>
    );
}

export default Shomarandeh;