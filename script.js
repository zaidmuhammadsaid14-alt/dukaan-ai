// Get Started Button Action
document.getElementById('getStartedBtn').addEventListener('click', function() {
    alert('Dukaan AI Dashboard loading... Welcome aboard!');
});

// Free Trial Form Submission
document.getElementById('trialForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Page reload hone se rokta hai
    
    const email = document.getElementById('emailInput').value;
    const msg = document.getElementById('responseMessage');
    
    msg.textContent = `Shukriya! ${email} par confirmation link bhej diya gaya hai.`;
    msg.classList.remove('hidden');
    
    document.getElementById('emailInput').value = '';
});
