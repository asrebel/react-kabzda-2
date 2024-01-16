import React, {useState} from 'react';




export const OnOff = () => {

   let [modeOn, setModeOn] = useState(false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: modeOn ? 'green' : 'white'
    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: modeOn ? 'white' : 'red'


    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: modeOn ? 'green' : 'red'


    };

    return (
        <div>
            <div style={onStyle} onClick={()=>{setModeOn(true)}}>On</div>
            <div style={offStyle} onClick={()=>{setModeOn(false)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};



