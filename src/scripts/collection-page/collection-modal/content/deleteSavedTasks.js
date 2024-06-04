import { openDB } from "../../../../boilerplate/openDatabase.js";

export default function deleteTaskInFolder(folderID) {
  const deleteBttn = document.querySelectorAll('.task-inside-folder-delete-bttn');
  const svgCheckMark = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="position: absolute; right:25px;" class="feather feather-check stroke-black"><polyline points="20 6 9 17 4 12"/></svg>'

  const deleteAnimationHandler = function(button) {
    button.style.backgroundColor="#F3F3F3";
    button.insertAdjacentHTML("afterend", svgCheckMark);
    const parentElement = button.closest('.task-inside-folder-item');
    
    const taskContent = button.previousElementSibling;
    taskContent.style.textDecoration = 'line-through';
    
    parentElement.style.backgroundColor ='#92929280';
    parentElement.classList.add('animate__animated', 'animate__fadeOut')
    setTimeout(() => {
      parentElement.remove();
    }, 1000);
    deleteTaskFromTasksInFolderDB(button.dataset.id);
    deleteTaskFromTasksDB(button.dataset.id)
  };

  const deleteTaskFromTasksInFolderDB = function(taskID) {
    
    const requestTaskInFolderDB = openDB('TasksInFoldersDB', 2);

    requestTaskInFolderDB.onerror = (event) => {
      console.log("An error occurred with IndexedDB", event);
    };
    
    requestTaskInFolderDB.onsuccess = () => {
      const db = requestTaskInFolderDB.result;
      const transaction = db.transaction('TasksInFolder', 'readwrite');
      const objectStore = transaction.objectStore('TasksInFolder')
      const getRequest = objectStore.get(folderID);
      
      getRequest.onsuccess = (event) => {
        const tasksData = event.target.result;
        if (tasksData && tasksData.taskID) {
          const updatedTaskIDsArray = tasksData.taskID.filter((id) => id !== taskID);
          tasksData.taskID = updatedTaskIDsArray;
          const updateRequest = objectStore.put(tasksData);

          updateRequest.onerror = (event) => {
            console.error('Erro ao atualizar o banco de dados', event);
          };
        };
      };
    };
  };

  const deleteTaskFromTasksDB = function(taskID) {
    const requestTasksDB = openDB('TasksDatabase');
    requestTasksDB.onerror = (event) => {
      console.log("An error occurred with IndexedDB", event);
    };
    
    requestTasksDB.onsuccess = () => {
      const db = requestTasksDB.result
      .transaction('Tasks', 'readwrite')
      .objectStore('Tasks')
      .delete(taskID)
    };
  };

  deleteBttn.forEach((button) => {
    button.removeEventListener('click', () => deleteAnimationHandler(button));
    button.addEventListener('click', () => deleteAnimationHandler(button));
  });
}