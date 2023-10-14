import React from 'react';
import {Button} from "primereact/button";
import {useShomarandeh} from "../ShomarandehContext";

function AfzayeshKahesh(props) {
    let {dispatch} = useShomarandeh();
    return (
        <div className="flex w-full gap-2 justify-content-center">
            <Button label="کاهش" onClick={()=>{dispatch({type:"KAHESH"})}}/>
            <Button label="افزایش" onClick={()=>{dispatch({type:"AFZAYESH"})}}/>
        </div>
    );
}

export default AfzayeshKahesh;