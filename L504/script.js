

let phones = document.getElementById('phone-container');
let phoneModels = phones.getElementsByClassName('model');
                //phones.querySelectorAll('.model');

for(let i=0; i<phoneModels.length; i++)
{
    console.log(phoneModels[i].textContent);
    alert(phoneModels[i].textContent);
}