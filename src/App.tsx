import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

type PageTitlePropsType = {
    title: string
}

const App = () => {
    return (
        <div>
            <PageTitle title = {'This is an App Component!'}/>
            <PageTitle title = {'Yabadabado'}/>

            Article 1
            <Rating value = {3}/>
            <Accordion titleValue = {'Menu'} collapsed = {true}/>
            <Accordion titleValue = {'Users'} collapsed = {false}/>

            Article 2
            <Rating value = {4}/>

        </div>
    );
}

const PageTitle = (props: PageTitlePropsType) => {
    return (
        <h1>{props.title}</h1>
    )
}


export default App;
