import React from "react";
import ReactDOM from "react-dom/client";

// JSX -> Babel transpiles it to -> React.createElemnet (React object or native JS Object) -> render (HTML Element)
// JSX -> XML like syntax in JS -> Parcel -> Babel
// Babel transpiles the JSX code before reaching JS engine



// console.log(jsxHeading);

const data = 1000;


// React Element
const Title = () => (
    <h1 id="heading" className="heading" tabIndex="2">
        Namaste React using JSX
    </h1>
);


// Component Composition
// React Functional Component
const HeadingComponent = () => (
    <div id="container">
        {console.log(data)}
        {Title()}
        <Title />
        <Title></Title>
        <h1 id="heading" className="heading" tabIndex="2">
            Namaste React using JSX
        </h1>
        <h1 id="heading" className="heading">Namaste React🙏🏻</h1>
    </div>
);  




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);