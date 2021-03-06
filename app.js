const dragItems = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.drag-container')
dragItems.forEach(dragItem =>{
    dragItem.addEventListener('dragstart', ()=>{
        dragItem.classList.add('dragging')
    })
    dragItem.addEventListener('dragend', () =>{
        dragItem.classList.remove('dragging')
    })
})
containers.forEach((container)=>{
    container.addEventListener('dragover', e =>{
        e.preventDefault()
        const afterElement = this.getDragAfterElement(container,e.clientY)
        const draggable = document.querySelector('.dragging')
        if (!afterElement)
            container.appendChild(draggable)
        else{
            container.insertBefore(draggable,afterElement)
        }
    })
})
     
function getDragAfterElement(container,y){
         const draggableItems = [...container.querySelectorAll('.draggable:not(.dragging)')]
         return draggableItems.reduce((closest,draggableItem)=>{
             const box = draggableItem.getBoundingClientRect()
             const offset = y - box.top - box.height / 2
             if(offset < 0 && offset > closest.offset)
                 return {
                     offset,
                     element: draggableItem
                 }
             else 
                 return closest
         },{
             offset: Number.NEGATIVE_INFINITY
         }).element
     }

     