import React, {useState} from 'react';

type UnControlledAccordionPropsType = {
    titleValue: string
}

type AccordionTitlePropsType = {
    titleValue: string
}

const UnControlledAccordion = (props: UnControlledAccordionPropsType) => {

    let [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <AccordionTitle titleValue={props.titleValue}/>
            <button onClick={()=> {setCollapsed(!collapsed)}}>TOGGLE</button>
            {!collapsed && <AccordionBody/>}
        </div>
    );
};

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <h3> {props.titleValue}</h3>
    )
}

const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}


export default UnControlledAccordion;