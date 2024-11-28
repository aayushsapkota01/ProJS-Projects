# Dark Mode To-Do List  

## Description  
This is a simple, interactive **To-Do List** application that allows users to manage their tasks effectively. The app utilizes **Local Storage** for data persistence, ensuring tasks are not lost between sessions. It supports CRUD (Create, Read, Update, Delete) operations and employs event bubbling for efficient event handling.

## Features  
- **Add Tasks**: Quickly add new tasks with an input field and button.  
- **Mark as Complete**: Toggle task completion with a click.  
- **Delete Tasks**: Remove tasks when no longer needed.  
- **Local Storage**: Tasks are saved in Local Storage to persist across browser sessions.  

## Commits Overview  
### 1. **Task Addition Feature**  
- Implemented the functionality to add tasks via an input field.  
- Tasks are dynamically rendered to the DOM.  

### 2. **Handling Local Storage and DOM Events**  
- Integrated Local Storage for task persistence.  
- Set up event listeners to handle task addition, deletion, and completion.  

### 3. **Event Bubbling and CRUD Operations**  
- Utilized event bubbling for efficient event handling on task elements.  
- Added full CRUD operations:  
  - **Create**: Add new tasks.  
  - **Read**: Display tasks on page load.  
  - **Update**: Toggle task completion status.  
  - **Delete**: Remove tasks.  

## Technologies Used  
- **HTML**: Structure of the application.  
- **CSS**: Customizable styles (dark mode aesthetic).  
- **JavaScript**: Handles app logic, DOM manipulation, and Local Storage.  

## Setup and Usage  
1. Clone this repository or download the project files.  
2. Open the `index.html` file in your browser to start using the app.  

## How It Works  
1. **Adding Tasks**  
   - Enter a task in the input field and click "Add Task."  
   - The task will appear in the list below.  

2. **Toggling Completion**  
   - Click on a task to toggle its completed status.  

3. **Deleting Tasks**  
   - Click the "Delete" button next to a task to remove it.  

4. **Local Storage**  
   - Tasks are saved in Local Storage automatically, ensuring persistence.  

## Code Highlights  

### Core Functions  
#### Save Tasks to Local Storage  
```javascript
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
