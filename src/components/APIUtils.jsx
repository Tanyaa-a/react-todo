export async function fetchData() {
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

    // Map the data to todo items
    const todos = data.records.map((todo) => ({
      id: todo.id,
      title: todo.fields.title,
      completed: todo.fields.completed || false,
    }));

    // Sort the todos by title in ascending order
    todos.sort((objectA, objectB) => {
      const titleA = objectA.title.toLowerCase();
      const titleB = objectB.title.toLowerCase();
      if (titleA < titleB) return 1;
      if (titleA > titleB) return -1;
      return 0;
    });

    return todos;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}
