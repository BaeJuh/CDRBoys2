import Header from "./components/header";
import Nav from "./components/nav";
import Article from "./components/article";
import Create from "./components/create";
import Update from "./components/update";
import { useState } from "react";

const App = () => {
  const [mode, setMode] = useState("Welcome");
  const [id, setId] = useState(null);
  const [newId, setNewId] = useState(4);
  const [topics, setTopics] = useState([
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "CSS", body: "CSS is ..." },
    { id: 3, title: "JS", body: "JavaScript is ..." }
  ]);

  let content = null;

  switch (mode) {
    case "Read":
      if (id !== null) {
        const [{ title, body }] = topics.filter((topic) => {
          return topic.id === id;
        });

        content = <Article title={title} body={body}></Article>;
      }
      break;
    case "Create":
      content = <Create onCreate={(title, body) => {
        const newTopic = { id: newId, title: title, body: body };
        setTopics([...topics, newTopic]);
        setMode("Read");
        setId(newId);
        setNewId(newId + 1);
      }}></Create>;
      break;
    case "Update":
      const [{ title, body }] = topics.filter((topic) => {
        return topic.id === id;
      });

      content = <Update title={title} body={body} onUpdate={(title, body) => {
        const updateTopic = topics.map((topic) => {
          if (topic.id === id) {
            return { id: id, title: title, body: body };
          } else {
            return topic;
          }
        });
        setTopics(updateTopic);
        setMode("Read");
      }
      }></Update>
      break;
    case "Delete":
      const deletedTopic = topics.filter((topic) => {
        return topic.id !== id;
      });

      setTopics(deletedTopic);
      setId(null);
      setMode("Welcome");
      break;
    default:
      content = "Hello Web";
  }
  return (
    <div className="App">
      <Header title="REACT" onChangeMode={() => {
        setMode("Welcome");
        setId(null)
      }}></Header>
      <Nav topics={topics} onChangeMode={(id) => {
        setMode("Read");
        setId(id);
      }}></Nav>
      <Article title={mode} body={content}></Article>
      <ul>
        <li>
          <a href="/create" onClick={(e) => {
            e.preventDefault();
            setMode("Create");
          }}>Create</a>
        </li>
        {id ? <li>
          <a href="/update" onClick={(e) => {
            e.preventDefault();
            setMode("Update");
          }}>Update</a>
        </li> : null}
        {id ? <li>
          <a href="/delete" onClick={(e) => {
            e.preventDefault();
            setMode("Delete");
          }}>Delete</a>
        </li> : null}
      </ul>
    </div>
  );
}

export default App;
