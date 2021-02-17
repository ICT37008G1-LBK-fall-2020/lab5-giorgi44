

let pc_s, latop_s, desktop_s;
pc_s = document.getElementById('pc-container');

latop_s = pc_s.children[0];
desktop_s = pc_s.children[1];


let question = prompt('risi yidva gsurt?'+'\nmiutitet siityva "laptop" ან "desktop".', '');

if(question == 'laptop')
{
    latop_s.style.backgroundColor = "green";
}

if(question == 'desktop')
{
    desktop_s.style.backgroundColor = "blue";
}