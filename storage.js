const btn = document.getElementById('btn');
const savedColor = localStorage.getItem('backgroundColor');

if(savedColor){
    document.body.style.backgroundColor = savedColor;
}

function getRandom(){
    const r = Math.floor(Math.random() * 256);
     const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r}, ${g}, ${b})`;
};


btn.addEventListener('click', () =>{
    const newColor= getRandom();
    document.body.style.backgroundColor = newColor;
    localStorage.setItem('backgroundColor', newColor);
});