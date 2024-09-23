
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
    cardDonationAmountValue.innerText = newCardDonationAmount;

    // Updating the totalBalance amount
    const newTotalBalance= totalAmount - donationAmount;
    // console.log(newTotalBalance);
    totalBalance.innerText = newTotalBalance;

    // Clear the input field after donation
    inputDonetionAmount.value = '';


}
