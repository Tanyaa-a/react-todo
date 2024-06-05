
async function fetchData() {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
    };
    const url = `https://api.airtable.com/v0/${
      import.meta.env.VITE_AIRTABLE_BASE_ID
    }/${import.meta.env.VITE_TABLE_NAME}`;
    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
//accepts the results of mapping data.records
      const todos = data.records.map((todo) => ({
        id: todo.id,
        title: todo.fields.title,
      }));
      return todos;
      // setTodoList(todos);
      // setIsLoading(false);
    } catch (error) {
      console.error(error.message);
    }
}

export { fetchData}
  