What is components?
Ans: Components are Independent and reuseable bits of code. They serve the same purpose as JS functions, but work in isolation and return HTML or JSX to be precise.

*The component name should be in upper case always 
eg: funcion App () {
    return
}
export default App;

Q. What is jsx?
Ans: JSX allows us to write HTML in React. Jsx makes it easier to write & add HTML in react.

*jsx must return a single parent element
*jsx element must be properly closed
*jsx attributes are written using camelCase (eg: className instead of class).



{Expressions in Jsx}
With jsx you can write expressions inside curly braces. The expressions can be a React variable, or property, or any other valid JavaScript expression. Jsx will execute the expression and return the result.

Lists- In react, you will render lists with some type of loop the javascript map() array method is generally the preferred method.

Props- Props/Properties are arguements passed into react components.
props allows us to pass data from parent component to a child component
props are passed to components via HTML attributes.

Conditional rendering:
Conditional rendering allows us to dynamically display different UI components or content based on specific conditions. This enables us to create more interactive and responsive user experiences.
IsvalidPassword, ValidPassowrd


STATE- State is a way to store and manage data that can change over time and affects how the components renders. We define state using the useState Hook , which allows you to set an initial value and provides a way to update theat state.

HOOKS- hooks are a new addition in React 16.8 , They let us use state other React features whithout writing a class.