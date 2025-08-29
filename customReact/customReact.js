const reactElement = {
type : 'a', // a tag is what we want to mean
props : {
    href : 'https://google.com',
    target : '_blank'
},
children : 'Click me to visit Google'
}
// we created a custom react element that stores info like this

// mainContainer is our div tag identified by root class
const mainContainer = document.getElementById('root');

let customRender = function(reactElement,mainContainer)
{
    const domElement = document.createElement(reactElement.type); //initialise a tag 
    domElement.textContent = reactElement.children; // add its textContnet from children
    for(let prop in reactElement.props)
    {
        if(prop === 'children') continue; //optional(we did it bcz we already set value (textCOntent from reactElement.children))
        domElement.setAttribute(prop, reactElement.props[prop]); // property_name , its value
    }
    mainContainer.appendChild(domElement); // append to container(our div tag in index.html)
}

customRender(reactElement,mainContainer);
//its a function call which inputs reactElement and mainContainer
