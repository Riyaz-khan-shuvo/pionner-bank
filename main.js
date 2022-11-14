const loginBtn = document.getElementById('login')

loginBtn.addEventListener('click', function () {
    const loginArea = document.getElementById('login-area')
    const transactionArea = document.getElementById('transaction-area')
    loginArea.style.display = 'none'
    transactionArea.style.display = 'block'
})


const depositBtn = document.getElementById('addDeposit')
depositBtn.addEventListener('click', function () {
    const depositValue = document.getElementById('depositAmount')
    const currentDeposit = document.getElementById('currentDeposit');
    const depositAmount = depositValue.value;
    const totalDeposit = parseInt(currentDeposit.innerText) + parseInt(depositAmount);
    const currentBalance = document.getElementById("currentBalance")
    const totalCurrentBalance = parseInt(depositAmount) + parseInt(currentBalance.innerText)
    console.log(totalDeposit);
    currentDeposit.innerText = totalDeposit;
    currentBalance.innerText = totalCurrentBalance;
})

const withdrawBtn = document.getElementById('addWithdraw')
withdrawBtn.addEventListener('click', function () {
    const withdrawValue = document.getElementById('withdrawAmount')
    const currentWithdraw = document.getElementById('currentWithdraw');
    const withdrawAmount = withdrawValue.value;
    const totalDeposit = parseInt(currentWithdraw.innerText) + parseInt(withdrawAmount);
    const currentBalance = document.getElementById("currentBalance")
    const totalCurrentBalance = parseInt(currentBalance.innerText) - parseInt(withdrawAmount)
    console.log(totalDeposit);
    currentWithdraw.innerText = totalDeposit;
    currentBalance.innerText = totalCurrentBalance;
})

