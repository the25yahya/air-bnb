import './App.css';
import title from '../src/imgs/airbnb 1.png'
import hands from '../src/imgs/image 28.png'
import women from '../src/imgs/image 30.png'
import chemini from '../src/imgs/image 26.png'
import eggs from '../src/imgs/image 27.png'
import guitar from '../src/imgs/image 29.png'
import mic from '../src/imgs/image 22.png'
import swimmer from '../src/imgs/image 23.png'
import yoga from '../src/imgs/image 25.png'
import singer from '../src/imgs/image 24.png'
import katie from '../src/imgs/image 12.png'
import star from '../src/imgs/Star 1.png'
import wedding from '../src/imgs/wedding-photography 1.png'
import bike from '../src/imgs/mountain-bike 1.png'
function Nav(){
  return(
    <nav>
      <img
        src={title}
      />
    </nav>
  )
}
function Div1(){
return(
  <div className='div1'>
  <img
    src={hands}
  />
</div>
)
}
function Div2() {
  return(
    <div className='div2'>
      <img
        src={women}
      />
      <img
        src={chemini}
      />
    </div>
  )
}
function Div3(){
  return(
    <div className='div3'>
    <img
      src={eggs}
    />
    <img
      src={guitar}
    />
  </div>
  )
}
function Div4(){
  return(
    <div className='div4'>
    <img
      src={mic}
    />
    <img
      src={swimmer}
    />
  </div>
  )
}
function Div5(){
  return(
    <div className='div5'>
    <img
      src={yoga}
    />
    <img
      src={singer}
    />
  </div>
  )
}
function Main(){
  return(
    <main>
      <Div1/>
      <Div2/>
      <Div3/>
      <Div4/>
      <Div5/>
    </main>
  )
}
function Intro(){
return(
  <div className='intro'>
  <h1>
    Online Experiences
  </h1>
  <p>
    join unique interactive activities led by one-of-a-kind hosts-all without leaving home
  </p>
</div>
)
}

function Card (props){
  return(
    <div className='cards'>
          <div className='card1'>
       <div className='div1-card'>
         <p>{props.state}</p>
         <img
          src={props.img}
         />
       </div>
       <div className='div2-card'>
          <img
            src={star}
          />
          <p id='rating'>{props.rating}</p>
          <p>(6)</p>
          <p id='con'>{props.con}</p>
       </div>
       <div className='div3-card'>
        <p id='card-title'>{props.title}</p>
        <p><span id='price'>{props.price}</span>/person</p>
       </div>
    </div>
    </div>
  )
}
function Body(){
  return(
<div className='card-container'>
<Card
    state = 'sold out'
    img = {katie}
    rating = '5.0'
    con = 'usa'
    title = 'life lessons with katie zafferes'
    price = 'from 136$'
    />
    <Card
          state = 'online'
    img = {wedding}
    rating = '5.0'
    con = 'usa'
    title = 'learn wedding photography'
    price = 'from 125$'
    />
        <Card
    state = 'online'
    img = {bike}
    rating = '3.0'
    con = 'usa'
    title = 'groupe mountain biking'
    price = 'from 150$'
    />
</div>

  )
}

function App() {
  return(
    <div className='container'>
       <Nav/>
       <Main/>
       <Intro/>
       <Body/>
    </div>
  )
}

export default App;
