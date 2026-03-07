const App = () => {
let random = Math.random();
let getal1 = Math.floor(Math.random()*10);
let getal2 = Math.floor(Math.random()*10);
function Add(a:number,b:number){
    return a+b
}
function Multiplie(a:number,b:number){
    return a*b
}
return (
<>
<h1>Labo 1: Expressies</h1>
<p>Random: {random}</p>
<p>Getal 1: {getal1}</p>
<p>Getal 2: {getal2}</p>
{random<0.5?<p>{getal1} + {getal2}: {Add(getal1,getal2)}</p>:<p>{getal1} * {getal2}: {Multiplie(getal1,getal2)}</p>}
</>
);
}

export default App;