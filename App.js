
// Using React to manipulate DOM
const heading = React.createElement("h1", {id: 'heading'}, 'Hello World inside h1');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);

console.log(heading);