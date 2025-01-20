import './App.css';
import Title from "./components/Title";
import Content from './components/Content';
import List from './components/List';
import Features from './components/Features';
import InputArea from './components/InputArea';
import { useEffect, useState } from 'react';

function App() {
  const [content, setContent] = useState(null);
  const [contentTitle, setContentTitle] = useState("Welcome");
  const [isFeatures, setIsFeatures] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [topics, setTopics] = useState([
    { "id": 1, "title": "HTML", "body": "HTML is ..." },
    { "id": 2, "title": "CSS", "body": "CSS is ..." },
    { "id": 3, "title": "JS", "body": "JS is ..." }
  ]);

  useEffect(() => { // content 출력
    if (selectedId) {
      const [selectedTopic] = topics.filter((topic) => {
        return topic["id"] === selectedId;
      });

      setContent(selectedTopic);
      setContentTitle(selectedTopic["title"]);
      setIsFeatures(false);
    }
  }, [selectedId]);



  const reset = () => {
    setContent(null);
    setSelectedId(null);
    setIsFeatures(false);
  }

  return (
    <div className="App">
      <Title title="REACT APP" reset={reset}></Title>
      <List dataSet={topics} setSelectedId={setSelectedId}></List>
      <h2>{contentTitle}</h2>
      {
        isFeatures ? 
        <InputArea></InputArea> :
        <Content content={content}></Content>
      }

      <Features 
        setIsFeatures={setIsFeatures} 
        selectedId={selectedId} 
        data={topics} setData={setTopics} 
        setContentTitle={setContentTitle}>
        </Features>
    </div>
  );
}

export default App;
