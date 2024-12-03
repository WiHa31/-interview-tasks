export const getScheduleItemClassName = (index: number) => {
    let resultClassName = ''
    const target = document.getElementById(`ideal` + index);
    const currentNode = document.getElementById(`respond` + index);

    console.log(target)
    console.log(currentNode)

    if (target && currentNode ) {

        console.log(target.innerHTML)
        console.log(currentNode.innerHTML)
        if (target.innerHTML === currentNode.innerHTML) {
            resultClassName = 'active'
        }
    }

    return resultClassName
}