const TodoForm = () => {

    const handleChange = (event) => {
        console.log(event)
    }

    return (
        <form>
            <input id="todoInput" type="text" onChange={handleChange} />
            <label htmlFor="todoTitle"> Title </label>
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoForm