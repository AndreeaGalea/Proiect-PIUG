lista = [
    {
        id: 0,
        image: './poze_site/sfaturi/Rose.jpg',
        title: 'Trandafiri',
        descriere: 'Taie regulat florile uscate pentru a stimula creșterea. Udă trandafirii dimineața, la baza plantei, evitând umezirea frunzelor. Aplică îngrășământ special pentru trandafiri o dată pe lună.',
    },
    {
        id: 1,
        image: './poze_site/sfaturi/bujor.jpg',
        title: 'Bujori',
        descriere: 'Plantează-i într-un loc însorit și udă-i moderat. Evită mutarea lor frecventă, deoarece au nevoie de stabilitate. Înlătură florile ofilite pentru a încuraja dezvoltarea rădăcinilor.',
    },
    {
        id: 2,
        image: './poze_site/sfaturi/lalea.jpg',
        title: 'Lalele',
        descriere: 'Plantează bulbii toamna, într-un sol bine drenat. Udă-le regulat primăvara, dar evită excesul de apă. Lasă frunzele să se usuce natural după înflorire pentru a hrăni bulbii.',
    },
    {
        id: 3,
        image: './poze_site/sfaturi/garoafa.jpg',
        title: 'Garoafe',
        descriere: 'Preferă locurile însorite și solul nisipos, bine drenat. Udă-le moderat și îndepărtează florile trecute pentru a stimula o nouă înflorire.',
    },
    {
        id: 4,
        image: './poze_site/sfaturi/liliac.jpg',
        title: 'Liliac',
        descriere: 'Taie ramurile uscate după înflorire pentru a încuraja creșterea. Udă rar, dar profund, mai ales în perioadele secetoase. Aplică îngrășăminte organice primăvara.',
    },
    {
        id: 5,
        image: './poze_site/sfaturi/lacrimioare.jpg',
        title: 'Lăcrimioare',
        descriere: 'Preferă locurile semi-umbrite și solul umed. Udă-le constant, dar fără a crea băltiri. Tăierea frunzelor uscate menține planta sănătoasă.',
    },
    {
        id: 6,
        image: './poze_site/sfaturi/floarea_soarelui.jpg',
        title: 'Floarea soarelui',
        descriere: 'Necesită mult soare și sol bine drenat. Udă moderat, mai ales în perioadele de secetă. Fixează tulpinile înalte pentru a le proteja de vânt.',
    },
    {
        id: 7,
        image: './poze_site/sfaturi/orhidee.jpg',
        title: 'Orhidee',
        descriere: 'Așază-le într-un loc luminos, dar ferit de razele directe ale soarelui. Udă-le când substratul este uscat, preferabil prin imersie. Folosește îngrășământ special pentru orhidee lunar.',
    },
];

const categories = lista;

document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = categories.filter((item) => {
        return item.title.toLowerCase().includes(searchData);
    });
    displayItem(filteredData);
});

const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item) => {
        var { image, title, descriere } = item;
        return (
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div>
                <div class='bottom'>
                    <p>${title}</p>
                    <button class="button_pop_up" role="button">Sfaturi</button>
                    <div class="popup-container">
                        <div class="popup-box">
                            <h1>${title}</h1>
                            <p>${descriere}</p>
                            <button class="close-btn">Inapoi</button>
                        </div>
                    </div>
                </div>
            </div>`
        );
    }).join('');

    document.querySelectorAll('.button_pop_up').forEach((button, index) => {
        button.addEventListener('click', () => {
            const popupContainer = document.querySelectorAll('.popup-container')[index];
            popupContainer.classList.add('active');
            document.body.style.overflow = 'hidden'; 
        });
    });

    document.querySelectorAll('.close-btn').forEach((button, index) => {
        button.addEventListener('click', () => {
            const popupContainer = document.querySelectorAll('.popup-container')[index];
            popupContainer.classList.remove('active');
            document.body.style.overflow = 'auto'; 
        });
    });
};

displayItem(categories);
