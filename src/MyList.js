import {useState} from "react";
import './App.css';
import ListItem from "./ListItem";

function MyList({theList}) {

  const [toDoItemArr, setToDoItemArr] = useState([...theList]);

  const [newItem, setNewItem] = useState("");
  
  const todoItems = toDoItemArr.map((item, index) => 
      <ListItem doThis={item} key={index} />
  );

  const onClickClear = () => {
    console.log("Clearing the list...!");
    return setToDoItemArr([]);
  };

  const onChangeNewItem = (event) => {
    console.log("OnChange newItem...");
    setNewItem(event.target.value);
  };

  const onClickAdd = (event) => {
    event.preventDefault();
    console.log("Clicked Add");
    if (newItem) {
      setToDoItemArr([...toDoItemArr, newItem]);
      setNewItem("");
    } else {
      console.log("Nothing to add");
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Things I should stop procrastinating:</h1>
        <ul>
            {todoItems}
        </ul>
        <br />
        <button onClick={onClickClear}>All Done!</button>
        <form>
          <input 
            type="text"
            placeholder="Add Item Here"
            value={newItem} 
            onChange={onChangeNewItem} />
          &nbsp;
          <button onClick={onClickAdd}>Add</button>
        </form>
      </header>
    </div>
  );
}

export default MyList;
