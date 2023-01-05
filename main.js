// selectors variables

const button = document.getElementById('button');

const body = document.getElementById('body');

const text = document.querySelector('h1');

const equal = document.getElementById('equal');

const test = document.getElementById('test');

//colors 

const colors = ['#315659', '#2978A0', '#BCAB79', '#C6E0FF', '#FF1B1C', '#F17300', '#44AF69', 'black', '#FFD166', 'white'];

const action = ['acción', 'action', 'azione', '下手', 'कार्रवाई करें', 'اتخذ إجراء', 'принять меры', '行動を起こす', 'ação', 'handeln'];

const change = ['changer', 'cambia', 'cambia', '改變', 'परिवर्तन', 'تغيير', 'менять', '変える', 'mudar', 'Veränderung'];

// random num generator

const x = () => {
    return Math.floor(Math.random() * colors.length);    
}

// change function

function alwaysChange() {
    let numA = x();
    let numB = x();
    let numC = x();

    if ( numA != numB && numA != numC && numC != numB ) {
        body.style.backgroundColor = colors[numA];
        text.style.color = colors[numB];
        equal.style.color = colors[numC];
    } else {
        alwaysChange();
    };
        
    text.innerHTML = change[x()];
    button.innerHTML = action[x()];
}


button.onclick = alwaysChange;

