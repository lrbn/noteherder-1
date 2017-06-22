import React, { Component } from 'react'

import './NoteForm.css'

class NoteForm extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id) {
      const newId = nextProps.match.params.id

      if (newId !== this.props.currentNote.id) {
        const note = nextProps.notes[newId]
        if (note) {
          this.props.setCurrentNote(note)
        }
      }
    } else if (this.props.currentNote.id) {
      this.props.resetCurrentNote()
    }
  }

  handleChanges = (ev) => {
    const note = {...this.props.currentNote}
    note[ev.target.name] = ev.target.value
    this.props.saveNote(note)
  }

  handleRemove = (ev) => {
    this.props.removeNote(this.props.currentNote)
  }

  boldText = (ev) => {
    console.log("Bolded")
  }

  underlineText = (ev) => {
    console.log("Underlined")
  }

  italicizeText = (ev) => {
    console.log("Italicized")
  }

  // showSelectionInsideTextarea() {
    
  //   var textComponent = document.getElementById('textarea')
  //   var selectedText;
  //   if (document.selection !== undefined) {
  //     textComponent.focus();
  //     var sel = document.selection.createRange();
  //     selectedText = sel.text;
  //   } else if (textComponent.selectionStart !== undefined) {
  //     var startPos = textComponent.selectionStart
  //     var endPos = textComponent.selectionEnd
  //     selectedText = textComponent.value.substring(startPos, endPos)
  //   }
  //   // alert("You selected " + selectedText)
    
  // }

  render() {
    return (
      <div className="NoteForm">
        <form>
          <p>
            <input
              type="text"
              name="title"
              placeholder="Title your note"
              onChange={this.handleChanges}
              value={this.props.currentNote.title}
            />
          </p>
          <p>
            <span>
              <button onClick={this.boldText} className="bold fa fa-bold" type="button"></button>
              <button onClick={this.underlineText} className="underline fa fa-underline" type="button"></button>
              <button onClick={this.italicizeText} className="italic fa fa-italic" type="button"></button>
            </span>
            <textarea
              name="body"
              id="textarea"
              placeholder="Just start typing..."
              onChange={this.handleChanges}
              value={this.props.currentNote.body}
            ></textarea>
          </p>
          <button
            type="button"
            onClick={this.handleRemove}
          >
            <i className="fa fa-trash-o"></i>
          </button>
        </form>
      </div>
    )
  }
}

export default NoteForm