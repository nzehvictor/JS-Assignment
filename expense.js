let balancePos = document.querySelector("#balance");
let income = document.querySelector("#income");
let expense = document.querySelector("#expense");
let inputNum = document.querySelector("#inputNum");
let tableTwo = document.querySelector("#tableTwo");
let inputStr = document.querySelector("#inputStr");
let button = document.querySelector("button");
let tableRow, tableData1, tableData2;

let history = () => {
  tableRow = document.createElement("tr");
  tableData1 = document.createElement("td");
  tableData2 = document.createElement("td");
  tableData1.className = "example";
  tableData1.innerText = inputStr.value;
  tableData2.innerText = inputNum.value;
  tableRow.appendChild(tableData1);
  tableRow.appendChild(tableData2);
  tableTwo.appendChild(tableRow);
};

let colorDesignation = () => {
  // if (inputNum.value > 0){
  //     tableData2.className ="greenborder";
  // }else if(inputNum.value < 0){
  //     tableData2.className ="redBorder"
  // }
  /* Switch below*/
  //   switch (true) {
  //     case inputNum.value > 0:
  //       tableData2.className = "greenborder";
  //       break;
  //     case inputNum.value < 0:
  //       tableData2.className = "redBorder";
  //       break;
  //     default:
  //       break;
  //   }
  inputNum.value > 0 ? tableData2.className = "greenborder" : tableData2.className = "redBorder"
};

button.addEventListener("click", () => {
  history();
  colorDesignation();
  if (inputNum.value > 0) {
    balancePos.innerText = balancePos.innerText * 1 + Number(inputNum.value);
    income.innerText = income.innerText * 1 + Number(inputNum.value);
  } else if (inputNum.value < 0) {
    balancePos.innerText = balancePos.innerText * 1 + Number(inputNum.value);
    expense.innerText = expense.innerText * 1 + Number(inputNum.value * -1);
  }
});
