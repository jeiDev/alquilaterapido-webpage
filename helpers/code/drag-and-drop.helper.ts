function DragAndDrop({container, keyId = "", itemBackParent = 1}){
    this.container = container
    this.keyId = keyId
    this.itemBackParent = itemBackParent
}

DragAndDrop.prototype.update = function(){}

DragAndDrop.prototype.backParent = function(el){
    let parent = el;
    for (let i = 0; i < this.itemBackParent; i++) {
       if(parent && parent.parentNode) parent = parent.parentNode
       if(this.itemBackParent == (i+1)) return parent;
    }
}

DragAndDrop.prototype.onDrop = function(e: DragEvent){
    e.dataTransfer.clearData()
    const id = `${e.dataTransfer.getData('text')}`.replace(this.keyId, "")
    const nodes = Array.prototype.slice.call(this.container.children)

    let from = +id
    let to = nodes.indexOf(this.backParent(e.target))
        to = to === -1 ? nodes.length - 1 : to

    this.update({
        move: {
            [from]: to,
            [to]: from
        }
    })
}

DragAndDrop.prototype.onDragStart = function(e: DragEvent){
    const target: any = e.target
    e.dataTransfer.setData('text', target.id)
}

DragAndDrop.prototype.onDragOver = function(e: DragEvent){
    e.preventDefault()
}



export default DragAndDrop