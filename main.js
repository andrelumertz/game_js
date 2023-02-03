const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")


const randomNumber = Math.round(Math.random() * 10); // inicia fazendo um numero randomico no reload da pg
let xAttempts = 1; //numero de tentativas

function handleTryClick(event) {
  event.preventDefault(); // nao faça o padrao

  const inputNumber = document.querySelector("#inputNumber"); //pegando o input
  
  // condicional se o input tiver valor == o do randomico fazer 
  if (Number(inputNumber.value) == randomNumber) { 
    document.querySelector(".screen1").classList.add("hide"); // sem a variavel
    screen2.classList.remove("hide"); // com a variavel 
    
    // pegar o .screen e h2 e escrever a mensagem com os dados do xAttempts
    document.querySelector(
      ".screen2 h2"
    ).innerText = `acertou em ${xAttempts} tentativas`;
  }
   
  inputNumber.value = "";
  xAttempts++;
}


//Evetos

const btnTry= document.querySelector("#btnTry");
const btnReset= document.querySelector("#btnReset");


btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", function() {
  screen1.classList.remove("hide");
  screen2.classList.add("hide");
  xAttempts = 1;
})