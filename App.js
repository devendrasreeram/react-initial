
const parent= React.createElement("div",{id:"Parent"},[ 
        React.createElement("div",{id:"child1"},[
            React.createElement("h1",{id:"c1"},"I am in h1"),
            React.createElement("h2",{id:"c2"},"I am in h2")])],

        React.createElement("div",{id:"child2"},[
        React.createElement("h1",{id:"c3"},"I am in h1"),
        React.createElement("h2",{id:"c4"},"I am in h2")]));

const root =ReactDOM.createRoot(document.getElementById("root"));



root.render(parent);