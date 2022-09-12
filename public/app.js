BuildSite();

function BuildSite() {

    const bodybg = document.getElementById('body');
    bodybg.className = 'bg-success';

    const divNIC = document.createElement('div');
    divNIC.setAttribute('id', 'nameinfocontainer');
    app.appendChild(divNIC);

    const divName = document.createElement('div');
    divName.setAttribute('id', 'name');
    divNIC.appendChild(divName);


}

