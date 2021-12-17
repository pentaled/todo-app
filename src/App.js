import React, { useState, useEffect } from 'react';
import { Container, List } from './components/List'
import mockData from './mock-data'

// react hook - state hook or effect hook

const App = () => {
  const [dataList, setDataList] = useState([]);
  // react cycle - componenetDidMount
  useEffect(() => {
    const filtered = mockData.filter(item => item.status === "NEW")
    setDataList(filtered)
  }, []) //array is not empty, componentDidUpdate

  return (
    <Container title="My List">
      <List data={dataList} />
    </Container>
  )
}

export default App;

