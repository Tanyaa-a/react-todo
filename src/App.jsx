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

function App() {
  return (
    <div>
      <h1>
        Todo List
      </h1>
      
      <ul>
        {todoList.map(function(item) {
          return (
            <li key={item.id}>{item.title}</li>
          );
       })} 
        
      </ul>
    </div>
  )
}
export default App
