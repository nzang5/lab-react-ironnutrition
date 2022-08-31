import { useState } from 'react';


function AddFoodForm(props){

    const [ name, setName ] = useState('');
    const [ image, setImage ] = useState('');
    const [ calories, setCalories ] = useState(0);
    const [ servings, setServings ] = useState(0);

    const handleNameInput = (e) => setName(e.target.value);
    const handleImageInput = (e) => setImage(e.target.value);
    const handleCaloriesInput = (e) => setCalories(e.target.value);
    const handleServingsInput = (e) => setServings(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFood = { name, image, calories, servings };
        

     
    }
 
    return (
        <form onSubmit={handleSubmit}>
            <div>Add Food Entry</div>

            <label>Name</label>
            <input value={props.name} type='text' onChange={handleNameInput}/>

            <label>Image</label>
            <input value={props.image} type='text' onChange={handleImageInput}/>

            <label>Calories</label>
            <input value={props.calories} type='number' onChange={handleCaloriesInput}/>

            <label>Servings</label>
            <input value={props.servings} type='number' onChange={handleServingsInput}/>

            <button type='submit'>Create</button>
        </form>
    )
}

export default AddFoodForm; 