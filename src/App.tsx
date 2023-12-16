import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

const App = () => {
    return (
        <div>
            <PageTitle title = {'This is an App Component!'}/>
            <PageTitle title = {'Yabadabado'}/>

            Article 1
            <Rating value = {3}/>
            <Accordion title = {'Menu'}/>
            <Accordion title = {'Menu123'}/>

            Article 2
            <Rating value = {4}/>

        </div>
    );
}

const PageTitle = (props:any) => {
    return (
        <h1>{props.title}</h1>
    )
}


export default App;
