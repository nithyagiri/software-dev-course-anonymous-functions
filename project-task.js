/*
===========================================
📝 To-Do List Filter with Anonymous Functions
===========================================

🎯 Objective:
Students will create and manipulate a simple array of to-do items using anonymous functions.

They will practice using:
- `filter()` to extract specific items
- `map()` to transform items
- `sort()` to organize items

This activity helps build a dynamic "To-Do List Filter" based on different criteria.
*/

// ============================================
// 🚀 Starting Point: To-Do List Array
// ============================================

const todos = [
    { task: "Wash the dishes", completed: false, priority: 3 },
    { task: "Write a blog post", completed: true, priority: 1 },
    { task: "Buy groceries", completed: false, priority: 2 },
    { task: "Study JavaScript", completed: true, priority: 1 },
    { task: "Walk the dog", completed: false, priority: 2 },
  ];
  
  // ============================================
  // 🔍 Tasks
  // ============================================
  
  /*
  let ages = [12, 18, 22, 16, 25];
let adults = ages.filter((age) => age >= 18);
console.log(adults); // Outputs: [18, 22, 25]
  🔹 Task 1: Filter Incomplete Tasks
  
  Step-by-Step:
  1. Use the `filter()` method on the todos array.
  2. Use an anonymous function as the callback.
  3. Return only the tasks that are not completed.
  */
  let incompleteTasks = todos.filter(function (todos) {
    return todos.completed == false });
  //console.log(incompleteTasks);
  
  /*
  🔹 Task 2: Sort Tasks by Priority
  
  Step-by-Step:
  1. Use the `sort()` method on the todos array.
  2. Use an anonymous function as the comparison function.
  3. Sort tasks in ascending order of priority (1 = highest).
  */
   let sortArray = todos.sort(function (a, b) {
    return a.priority - b.priority});
  //console.log(sortArray);
  
  
  /*
  🔹 Task 3: Mark All Tasks as Completed
  
  Step-by-Step:
  1. Use the `map()` method to return a new array.
  2. Use an anonymous function to modify each object.
  3. Change the `completed` property to `true` for every task.
  */
   //const result = array2D.map(row => row.map(element => element * 2));
  const completeTask = todos.map(element=> ({
    task: element.task,
    completed: "true",
    priority: element.priority
  }));
  //console.log(completeTask)
  
  /*
  🔹 Task 4: Combine Filters
  
  Step-by-Step:
  1. First, filter the todos to get only incomplete tasks.
  2. Then, sort the filtered results by priority using `sort()`.
  3. Use method chaining to perform both steps together.
  */
   
    // filter the incompleted task
  
    const incompleteTodos = todos.filter(todo => !todo.completed);
    // sort the filter results
    incompleteTodos.sort((a, b) => a.priority - b.priority);
   const sortedIncompleteTodos = todos.filter(todo => !todo.completed).sort((a, b) => a.priority - b.priority);
      

   //============================================
   //🧪 Console Test Your Work
  //===========================================
  
   console.log("Incomplete Tasks:", incompleteTasks);
   console.log("Sorted by Priority:", sortArray);
 console.log("All Tasks Completed:", completeTask);
   console.log("Sorted Incomplete Tasks:", sortedIncompleteTodos);
  