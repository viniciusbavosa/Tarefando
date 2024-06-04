import { openDB } from "../../../boilerplate/openDatabase.js";
export default function editTask() {
  const parentList = document.querySelector('.list');

  const options = { characterData: true, subtree: true };

  const observer = new MutationObserver((mutations) => {
  
   mutations.forEach((mutation) => {
      const id = `${mutation.target.parentElement.dataset.id}`;
      const updatedTaskTitle = `${mutation.target.textContent}`;
      const updatedTaskTitleFormated = updatedTaskTitle.trim();
      const request = openDB('TasksDatabase');

      request.onerror = () => {
        console.log('Erro ao editar tarefa' + request.error);
      };
      
      request.onsuccess = () => {
        const db = request.result;
        const transaction = db.transaction(["Tasks"], "readwrite");
        const objectStore = transaction.objectStore("Tasks");
        const taskRequest =  objectStore.get(id);
        
        taskRequest.onsuccess = () => {
          const task = taskRequest.result;
          if (task) {
            const newTitle = { 
              ...task, 
              body: {
                ...task.body,
                title: updatedTaskTitleFormated
              }
             };
            const requestUpdate = objectStore.put(newTitle);
          };
        };

        taskRequest.onerror = () => {
          console.log('Erro ao acessar objetos da loja' + taskRequest.error);
        };
      };
   });
  });

  observer.observe(parentList, options);
}
  