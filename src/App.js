import { render } from "@testing-library/react";
import React, {Component} from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newNote:"",
      list:[]
    }
  }
  updateInput(key, value) {
    this.setState({
      [key]: value
    })
  }
  addNote() {
    const newNote={
      id: 1 + Math.random(),
      value: this.state.newNote.slice()
    };
    const list = [...this.state.list];
    list.push(newNote);
    this.setState({
      list,
      newNote:""
    });

  };
    deleteNote(id){
      const list = [...this.state.list];
      const updatedList = list.filter(note => note.id !== id);
      this.setState({list: updatedList});
  }

render() {
  return (
    <div className="App" class="container">
      <div class="article">
        <p class="header">Note</p>
        <input type="text"
          placeholder="Note text"
          value={this.state.newNote}
          onChange={e => this.updateInput("newNote", e.target.value)}
         class="main-text-input"
        />
      
        <button
         onClick={() => this.addNote()}
         class="btn-primary"
        >
          Add note
        </button>
        <h2>Latest notes</h2>
        <ul>
          {this.state.list.map(note =>{
            return(
              <li key={note.id}
              class="li-el">
                <div class="note-section">
                <div class="note-content">{note.value}</div>
                <button
                 onClick={() => this.deleteNote(note.id)}
                 class="btn"
                >
                  Delete note
                </button>
                </div>
              </li>
          )
        })}
      </ul>
      </div>
    </div>
  );
}
} 

export default App;
