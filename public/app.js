BuildSite();

function BuildSite() {

    const background = document.body;
    background.className = 'bg-success'

    const face = document.createElement('div');
    face.setAttribute('id', 'siteface')
    face.className = 'container w-75';
    app.appendChild(face);

    const divNIC = document.createElement('div');
    divNIC.setAttribute('id', 'nameinfocontainer');
    divNIC.className = 'container-sm float-start mt-5 w-50 h-75'; 
    face.appendChild(divNIC);

    const divNameTitle = document.createElement('div');
    divNameTitle.setAttribute('id', 'nametitle');
    divNameTitle.className = 'bg-warning';
    divNIC.appendChild(divNameTitle);

    const nameTitle = document.createElement('h2');
    nameTitle.innerHTML = 'Casper Högström';
    nameTitle.className = 'p-2';
    divNameTitle.appendChild(nameTitle);

    const divInfo = document.createElement('div');
    divInfo.setAttribute('id', 'info');
    divInfo.innerText = 'Jag heter Casper Högström och är en 19-årig kille. ' +
    'Jag gick tekniklinjen på gymnasiet och går just nu ett fjärde år på gymnasiet för att spetsutbilda mig inom programering och mjukvarudesign. ' +
    'Den andra januari 2003 föddes jag och redan den dagen var jag en bajare inte för att jag hade något val, men jag tror att det är en av anledningarna till min stora kärlek för Hammarby. ' +
    'Bajen var inget jag valde utan bajen valde mig och det är något jag hoppas kunna föra vidare till mina egna barn någon dag. ' +
    'Färgtemat på denna webbsida har även den sina rötter i Hammarby med sina gröna, vita och gula färger';

    divInfo.className = 'bg-light p-3';
    divNIC.appendChild(divInfo);
    
    const divIntrests = document.createElement('div');
    divIntrests.setAttribute('id', 'intrestscontainer');
    divIntrests.className = 'container-sm float-end mt-5 w-50 h-50 '; 
    face.appendChild(divIntrests);

    const divIntrestsTitle = document.createElement('div');
    divIntrestsTitle.setAttribute('id', 'intreststitle');
    divIntrestsTitle.className = 'bg-warning';
    divIntrests.appendChild(divIntrestsTitle);

    const intrestsTitle = document.createElement('h2');
    intrestsTitle.innerHTML = 'Intressen';
    intrestsTitle.className = 'p-2';
    divIntrestsTitle.appendChild(intrestsTitle);

    const divIntrestsText = document.createElement('div');
    divIntrestsText.setAttribute('id', 'intreststitle');
    divIntrestsText.innerText = 'Intressen har jag ett par av men de jag har brunnit för starkast genom livet är fotbollen och dataspel, och som med många andra är dessa ' +
    'två intressen det jag hade ägnat mitt liv åt om jag fick välja. Livet fungerar tyvärr inte så och det finns andra saker som man måste göra. Lyckligt nog har dessa andra saker ' +
    'som t.ex skolan varit något jag inte finner allt för tråkigt.';

    divIntrestsText.className = 'bg-light p-3';
    divIntrests.appendChild(divIntrestsText);

    const img = document.createElement('img');
    img.setAttribute('src', 'Hammarby_logga_klack.jpg');
    img.className = 'w-100 mt-3'
    face.appendChild(img);

}

