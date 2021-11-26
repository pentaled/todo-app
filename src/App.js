import Container from './components/List/Container'
import LIst from './components/List/Listitem'

const App = () => {
  return (
    <Container title="My List"> 
      <LIst subtitle="Buy Milk">
      <i class="fas fa-trash"></i>
      <i class="fas fa-pen"></i>
      <i class="fas fa-check-circle"></i>
      </LIst>
      <LIst subtitle="Plan weekend outing">
       <i class="fas fa-trash"></i>
       <i class="fas fa-pen"></i>
       <i class="fas fa-check-circle"></i>
      </LIst>
      <LIst subtitle="Publish Friday blog post">
       <i class="fas fa-trash"></i>
       <i class="fas fa-pen"></i>
       <i class="fas fa-check-circle"></i>
      </LIst>
      <LIst subtitle="Run 3 miles">
       <i class="fas fa-trash"></i>
       <i class="fas fa-pen"></i>
       <i class="fas fa-check-circle"></i>
      </LIst>
      <LIst subtitle="Wash clothes">
       <i class="fas fa-trash"></i>
       <i class="fas fa-pen"></i>
       <i class="fas fa-check-circle"></i>
      </LIst>
    </Container>
    )    
}

export default App;
