
const donationBtn = document.getElementById('donation-btn');
const historyBtn = document.getElementById('history-btn');
// console.log(donationBtn, historyBtn)
const donationSection = document.getElementById('donation-section');
const historySection = document.getElementById('history-container');
console.log(donationSection, historySection);
const my_modal= document.getElementById('my_modal');
// console.log(my_modal, historySection);

// History button show and Donate button Hide
historyBtn.addEventListener('click', function(){
    donationSection.classList.add('hidden');
    historySection.classList.remove('hidden');
    historyBtn.classList.add('bg-lime-400', 'text-black');
    donationBtn.classList.remove('bg-lime-400', 'text-black');
    donationBtn.classList.add('text-gray-500');    
})

// Donate button show and History button Hide
donationBtn.addEventListener('click',function(){
    donationSection.classList.remove('hidden');
    historySection.classList.add('hidden');
    donationBtn.classList.add('bg-lime-400', 'text-black');
    historyBtn.classList.remove('bg-lime-400', 'text-black');
    donationBtn.classList.remove('text-gray-500');
})


// Card Handle
function handleDonateBtn(cardId){
    const totalBalance = document.getElementById('total-amount');
    const cardDonationAmountValue = document.getElementById(cardId + '-amount');
    const inputDonetionAmount = document.getElementById(cardId + '-donation-amount');
    console.log(totalBalance, cardDonationAmountValue, inputDonetionAmount);

    // Convert Number (totalBalance)
    const  totalAmount = parseFloat(totalBalance.innerText);
    // console.log(totalAmount);

    // Convert Number (inputDonationAmount)
    const donationAmount = parseFloat(inputDonetionAmount.value);
    // console.log(donationAmount);

    // Convard Number (cardDonationamount)
    const cardDonationAmount = parseFloat(cardDonationAmountValue.innerText);
    console.log(cardDonationAmount);

    // Validation check
    if(isNaN(donationAmount) || donationAmount <= 0 || donationAmount > totalAmount){
        alert('Please Enter A Valid Amount!');
        return;
    }

    // Updating the donation amount
    const newCardDonationAmount = cardDonationAmount + donationAmount;
    // console.log(newCardDonationAmount);
    cardDonationAmountValue.innerText = newCardDonationAmount.toFixed(2);

    // Updating the totalBalance amount
    const newTotalBalance= totalAmount - donationAmount;
    // console.log(newTotalBalance);
    totalBalance.innerText = newTotalBalance.toFixed(2);

    // Clear the input field after donation
    inputDonetionAmount.value = '';

    // Show Successful Message
    my_modal.showModal();

    // Information added by history tap
    const donationTitle = document.getElementById(cardId + '-donate-title').innerText;
    historySection.innerHTML += `
    <div class ="border rounded-xl mx-4 p-5 shadow-inner mb-5">
        <h3 class = "text-xl font-semibold mb-2">${donationAmount.toFixed(2)} Taka is ${donationTitle}</h3>
        <p class = "text-gray-500"> Date: ${new Date()}</p>
    </div>`;
}
