const nameInput = document.querySelector('#input-name');
const ratingInput = document.querySelector('#input-rating');
const confirmBtn = document.querySelector('#button-confirm');
const courseList = document.querySelector('#course-list');
const totalExpensesOutput = document.querySelector('#total-expenses');
const alertCtrl = document.querySelector('ion-alert-controller');

const clear = () =>{
    ratingInput.value = '';
    nameInput.value = '';
}

confirmBtn.addEventListener('click', () =>{
    const enteredName = nameInput.value;
    const enteredRating = ratingInput.value;
    if(enteredName.trim().length <=0 || enteredRating <1 || enteredRating>5 || enteredRating.trim().length <=0 ){
        alertCtrl.create({message:"Please enter valid Course Name and Rating!",header:"Invalid inputs",
    buttons:['Okay ']}).then(alertElement =>{
        alertElement.present();
    });
        return;
    }
    const newItem = document.createElement("ion-item");
    newItem.innerHTML = `<strong>${enteredName}:</strong>&nbsp${enteredRating}/5`;
    courseList.appendChild(newItem);
    clear();
})