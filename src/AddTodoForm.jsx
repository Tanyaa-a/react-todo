const AddTodoForm = () => {
    return (
        <form>
            <input id="todoTitle" type="text" />
            <label htmlFor="todoTitle">Title </label>
            <button type="submit">Add</button>
        </form>
    )
}

export default AddTodoForm