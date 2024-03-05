const todoList = [
    {
      id: 0,
      title: 'Review video lessons',
    },
    {
      id: 1,
      title: 'Read the "React" book',
    },
      {
        id: 2,
        title: 'Compleat the assignment', 
      },  
]
  
const TodoList = () => {
    return (
        <ul>
        {todoList.map((item) => {
          return (
            <li key={item.id}>{item.title}</li>
          );
       })}   
      </ul> 
    )
}

export default TodoList