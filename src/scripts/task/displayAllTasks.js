import { createTaskElement } from "../dynamicContent/dynamicHTML.js";
import { deleteTask } from "./deleteTask.js";
import displaySVG from "./displaySVG.js";

export function displayAllTasks() {

  // Store all tasks
  const inputCollection = [];
  // Stores each tasks ID
  let id;

  // Iterates through localStorage, retrieves its key-value pairs and outputs them to an array 
  for (let i = 0; i < localStorage.length; i++) {
    id = localStorage.key(i);
    const value = localStorage.getItem(id);
    const valueFormated = JSON.parse(value);
    inputCollection.push({ id, value: valueFormated});
  };
  
   // Iterates through an array and retrieves its values using destructuring
   for (let { id, value } of inputCollection) {
    createTaskElement(value, id);
  };

  deleteTask();

};