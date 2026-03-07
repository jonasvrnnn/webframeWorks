const App = () => {
  function randomNumber(max:number){
    return Math.floor(Math.random()*max)
  }
  const slot1 = randomNumber(5);
  const slot2 = randomNumber(5);
  const slot3 = randomNumber(5);
  let win = false;
  if(slot1 === slot2 && slot2 === slot3){
    win = true;
    }
    else{
      win = false;
    }
return (
<>
</>
);
}

export default App;