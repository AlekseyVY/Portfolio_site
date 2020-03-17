import  React, { Component } from "react";

//main component that will render first.
class HomePage extends Component
{
    constructor(props)
    {
        super(props);
        //state for changing language of a page.
        this.state = {
            rus: true,
            eng: false
    }
}
render() {
        return (
            <h1>Home Page Component</h1>
        )
}
}

export default HomePage;
