import Container from './components/List/Container'
import List from './components/List/List'
import mockData from './mock-data'

const App = () => {
  return (
    <Container title="My List"> 
      <List data={mockData}/>
    </Container>
    )    
}

export default App;
