import { api } from './api/mockApi';

export function useTodoService() {
    const loadTodos = () => {
        return api.get("/todos")
            .then(response => response.data)
            .catch(error => {
                console.error("Error fetching todos:", error);
                return [];
            });
    }

    const createTodo = (text) => {
        return api.post("/todos", { text: text, done: false })
            .then(response => response.data)
            .catch(error => {
                console.error("Error adding todo:", error);
                return null;
            });
    }

    const updateTodo = (updatedTodo) => {
        return api.put(`/todos/${updatedTodo.id}`, updatedTodo)
            .then(response => response.data)
            .catch(error => {
                console.error("Error updating todo:", error);
                return null;
            });
    }

    const deleteTodo = (id) => {
        return api.delete(`/todos/${id}`)
            .then(response => response.data)
            .catch(error => {
                console.error("Error deleting todo:", error);
                return null;
            });
    }

    return {
        loadTodos,
        createTodo,
        updateTodo,
        deleteTodo
    };
}