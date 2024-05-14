import { createTaskElement } from "../dynamic-content/dynamicHTML.js";
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
    
    if (id.length > 36) {
      continue;
    }
    const value = localStorage.getItem(id);
    const valueFormated = JSON.parse(value);

    const timestamps = localStorage.getItem(`${id}-created-date`);
    const timestampsFormated = JSON.parse(timestamps); 
    inputCollection.push({ id, valueFormated, timestampsFormated });
  };
  
   // Iterates through an array and retrieves its values using destructuring
   for (let { id, valueFormated, timestampsFormated } of inputCollection) {
    createTaskElement(valueFormated, id, timestampsFormated);
  };

  deleteTask();
};