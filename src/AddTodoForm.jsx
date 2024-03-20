const TodoForm = (props) => {
    const handleChange = (event) => {
        console.log(event.target.value);   
    }
    const handleAddTodo = (event) => {
        event.preventDefault();
        let todoTitle = event.target.title.value; //retrieve the value of the title element from the event target and store it in a variable named todoTitle
        event.target.reset();
        props.onAddTodo(todoTitle);
    }
    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle"> Title </label>
            <input id="todoInput" type="text" name="title" onChange={handleChange} />
           
            <button type="submit">Add</button>
        </form>
    )
}
export default TodoForm