import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import UnControlledAccordion from "./components/Accordion/UnControlledAccordion";

type PageTitlePropsType = {
    title: string
}

const App = () => {
    return (
        <div className={'App'}>
          {/*  <PageTitle title = {'This is an App Component!'}/>
            <PageTitle title = {'Yabadabado'}/>

            Article 1
            <Rating value = {3}/>
            <Accordion titleValue = {'Menu'} collapsed = {true}/>
            <Accordion titleValue = {'Users'} collapsed = {false}/>

            Article 2
            <Rating value = {0}/>
            <Rating value = {1}/>
            <Rating value = {2}/>
            <Rating value = {3}/>
            <Rating value = {4}/>
            <Rating value = {5}/>*/}

            <OnOff />

            <UnControlledAccordion titleValue={'Menu'}/>

        </div>
    );
}

const PageTitle = (props: PageTitlePropsType) => {
    return (
        <h1>{props.title}</h1>
    )
}


export default App;
