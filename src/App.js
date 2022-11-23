import { useState } from 'react';

function getRandomAnimal(){
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)];
}

function App() {

    const handleClick = () => {

    };

    return (
        <div>
            <button onClick={handleClick}>Add animal</button>
            
        </div>
    );
}

export default App;