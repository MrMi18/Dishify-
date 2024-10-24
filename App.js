const app = React.createElement("div", {},
    [React.createElement("h1", {}, "Hey MI"), 
    React.createElement("p", {}, "Hey mi this is our react app andwe are practicing our react"),
    React.createElement("ul",{},[
        React.createElement("li",{},"React"),
        React.createElement("li",{},"Java"),
        React.createElement("li",{} ,"Python")
    ])
]
)





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(app);
