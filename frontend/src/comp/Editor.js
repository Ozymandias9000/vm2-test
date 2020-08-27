import React, { useState } from "react"
import MonacoEditor from "react-monaco-editor"

const Editor = () => {
  const defaultValue = `module.exports = (page) => {
/** DO NOT CHANGE ABOVE THIS LINE */

    // Add your selector below
    console.log( page.getElementById('submit').outerHTML ) // "<button id="submit" type="submit">Submit</button>"
}
}`
  const [code, setCode] = useState(defaultValue)
  const [err, setErr] = useState("")

  function editorDidMount(editor, monaco) {
    editor.focus()
  }
  function onChange(newValue, e) {
    setCode(newValue)
  }

  const submit = async (e) => {
    e.preventDefault()

    await fetch("http://localhost:4000", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    }).catch((e) => console.log(e))
  }

  return (
    <>
      <MonacoEditor
        width="800"
        height="600"
        language="javascript"
        theme="vs-dark"
        value={code}
        options={{
          selectOnLineNumbers: true,
        }}
        onChange={onChange}
        editorDidMount={editorDidMount}
      />
      <button id="submit" type="submit" onClick={submit}>
        Submit
      </button>
      {err && <div dangerouslySetInnerHTML={{ __html: err }}></div>}
    </>
  )
}

export default Editor
