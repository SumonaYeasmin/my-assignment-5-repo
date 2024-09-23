
const donationBtn = document.getElementById('donation-btn');
const historyBtn = document.getElementById('history-btn');
const donationSection = document.getElementById('donation-section');
const historySection = document.getElementById('history-section');

historyBtn.addEventListener('click', function(event){
    event.preventDefault();
    // console.log('click')
    donationSection.classList.add('hidden');
    historySection.classList.remove('hidden');
    
})

donationBtn.addEventListener('click',function(event){
    event.preventDefault();
    // console.log('click');
    donationSection.classList.remove('hidden');
    historySection.classList.add('hidden');
})
