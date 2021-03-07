const wrappers = document.querySelectorAll('.drag-wrapper')

wrappers.forEach(wrapper => new SortableDragZone(wrapper,5))

