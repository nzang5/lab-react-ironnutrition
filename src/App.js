import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import { Row, Divider, Button } from 'antd';
import AddFoodForm from './components/AddFoodForm';


function App() {

 
  




  return (
    <div className="App">

{<AddFoodForm/>}
      <Button> Hide Form / Add New Food </Button>

     

      <div>Food List</div>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
      {foods.map(food => <FoodBox  name={food.name} image={food.image} calories={food.calories} servings={food.servings}/>)}
      </Row>
    </div>
  );
}

export default App;





