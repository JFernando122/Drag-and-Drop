class SortableDragZone{
   constructor(wrapper,numberOfElements){
       this.wrapper = wrapper
       this.wrapper.classList.add('sortable-drag-wrapper')
       this.initialContainer = document.createElement('div')
       this.initialContainer.classList.add('drag-container','initial-container')
       this.sortedContainer = document.createElement('div')
       this.sortedContainer.classList.add('drag-container',"sorted-container")
       this.wrapper.append(this.initialContainer,this.sortedContainer)
       this.elements = this.createElements(numberOfElements)
       this.initializeDragElements()
    }
    
    createElements(n){
        const numbers = this.shuffle([...Array(n).keys()])
        return numbers.map(number =>{
            const dragItem = document.createElement('div')
            dragItem.draggable = "true"
            dragItem.classList.add('draggable', 'drag-item')
            dragItem.textContent = number + 1
            this.initialContainer.appendChild(dragItem)
            return dragItem
        })    
    }

    initializeDragElements(){
        const dragItems = this.initialContainer.querySelectorAll('.draggable')
        const containers = [this.initialContainer, this.sortedContainer]

        dragItems.forEach(dragItem =>{
            dragItem.addEventListener('dragstart', ()=>{
                dragItem.classList.add('dragging')
            })
            dragItem.addEventListener('dragend', () =>{
                dragItem.classList.remove('dragging')
                this.checkOrder()
            })
        })
    
        containers.forEach((container)=>{
            container.addEventListener('dragover', e =>{
                if(!this.wrapper.querySelector('.dragging'))
                return
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
    }
    
    disableAllDragElements(){
        this.disableDragElements(this.initialContainer)
        this.disableDragElements(this.sortedContainer)
    }

    disableDragElements(container){
        const dragItems = container.querySelectorAll('.draggable')
        dragItems.forEach(dragItem =>{
            dragItem.removeAttribute('draggable')
            dragItem.classList.remove('draggable')
        })
    }
    
    getDragAfterElement(container,y){
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
    
    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
    }
    
    checkOrder(){
        if(this.initialContainer.querySelectorAll('.draggable').length !== 0)
            return
        const items = this.sortedContainer.querySelectorAll('.draggable')
        let i = 1
        while(i < items.length && items[i-1].textContent - items[i].textContent <= 0){
            i++
        }
        if(i == items.length){
            this.victoryScreen()
        }
    }
    
    victoryScreen(){
        this.initialContainer.innerHTML = '<div class="victory-message"><p>Congratulations!!</p> <br> You have done it!</div>'
        this.initialContainer.classList.add('initial-container-done')
        this.disableAllDragElements()
    }
}
