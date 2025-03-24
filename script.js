document.addEventListener('DOMContentLoaded', function() {
    const myDiv = document.getElementById('myDiv');
    
    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to DOM homework';
    
    heading.classList.add('highlight');
    
    const paragraph = document.createElement('p');
    paragraph.textContent = 'This is your first DOM homework assignment';
    
    const list = document.createElement('ul');
    
    const listItems = [
        'First list item',
        'Second list item',
        'Third list item'
    ];
    
    listItems.forEach(function(text) {
        const li = document.createElement('li');
        li.textContent = text;
        list.appendChild(li);
    });
    
    myDiv.appendChild(heading);
    myDiv.appendChild(paragraph);
    myDiv.appendChild(list);
    
    let newItemCounter = 1;
    
    const addButton = document.getElementById('addButton');
    addButton.addEventListener('click', function() {
        const newItem = document.createElement('li');
        newItem.textContent = `New List Item ${newItemCounter}`;
        
        newItem.style.color = getRandomColor();
        
        list.appendChild(newItem);
        
        newItemCounter++;
    });
    
    myDiv.addEventListener('click', function() {
        myDiv.style.backgroundColor = getRandomColor();
    });
    
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});