


// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
// Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
//- foto autore,
// - data in formato americano (mm-gg-yyyy),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.
// Non è necessario creare date casuali
// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
 //Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
// Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// BONUS
// 1. Formattare le date in formato italiano (gg/mm/aaaa)
// 2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
// 3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.

 

// MILESTONE 1
// Creo l' Array di ogegtti che rappresentano ciascun post

let socialPosts = [

    {
        idpost: 1,
        name: 'Franco Esposito',
        imageProfile: 'https://unsplash.it/600/300?image=171',
        date: '06/25/2021',
        text:'Placeat libero ipsa nobis ipsum quibusdam qua harum ut.Distinctio minima iust.Ad ad maiores et sint voluptate reusandae architetcto.Et nihli uallam aut alias.',
        image:'https://i.picsum.photos/id/100/600/300.jpg?hmac=p9e3SNrtRq-rxECA36kiO8zTjqYlRLytPHZIJWn8YGs',
        like: 999,
    },

    {
        idpost: 2,
        name:'Sofia rossi',
        imageProfile: 'https://unsplash.it/600/300?image=171',
        date:'11/03/2021',
        text:'Placeat libero ipsa nobis ipsum quibusdam qua harum ut.Distinctio minima iust.Ad ad maiores et sint voluptate reusandae architetcto.Et nihli uallam aut alias.',
        image: 'https://i.picsum.photos/id/100/600/300.jpg?hmac=p9e3SNrtRq-rxECA36kiO8zTjqYlRLytPHZIJWn8YGs',
        like: 150,
    },

    {
        idpost: 3,
        name:'Luca Pallo',
        imageProfile: 'https://unsplash.it/600/300?image=171',
        date:'13/03/2021',
        text:'Placeat libero ipsa nobis ipsum quibusdam qua harum ut.Distinctio minima iust.Ad ad maiores et sint voluptate reusandae architetcto.Et nihli uallam aut alias.',
        image: 'https://i.picsum.photos/id/100/600/300.jpg?hmac=p9e3SNrtRq-rxECA36kiO8zTjqYlRLytPHZIJWn8YGs',
        like: 220,

    },

    {
        idpost: 4,
        name:'Pico Salo',
        imageProfile: 'https://unsplash.it/600/300?image=171',
        date:'09/06/2021',
        text:'Placeat libero ipsa nobis ipsum quibusdam qua harum ut.Distinctio minima iust.Ad ad maiores et sint voluptate reusandae architetcto.Et nihli uallam aut alias.',
        image: 'https://i.picsum.photos/id/100/600/300.jpg?hmac=p9e3SNrtRq-rxECA36kiO8zTjqYlRLytPHZIJWn8YGs',
        like: 300,
    },

    {
        idpost: 5,
        name:'Pacco Tasso',
        imageProfile: 'https://unsplash.it/600/300?image=171',
        date:'10/05/2021',
        text:'Placeat libero ipsa nobis ipsum quibusdam qua harum ut.Distinctio minima iust.Ad ad maiores et sint voluptate reusandae architetcto.Et nihli uallam aut alias.',
        image: null,
        like: 1000,
    }
];
// Invoco la funzione 
 function drawAllPosts(socialPosts)

// Event Listeners

// Seleziono gli elementi del DOM con le seguenti classi
let allLikeBtn = document.querySelectorAll('.js-like-button');
const allLikeCounter = document.querySelectorAll('.js-likes-counter');

for(let i = 0; i < allLikeBtn.length; i++);
 const thisFavouriteBtn = allLikeBtn[i];
 thisFavouriteBtn.addEventListener('click', function(event) {
    // Evito il comportamento di default del browser
    event.preventDefault();

    //Incremento il like solo se l' elemento su cui ho cliccato non ha gia classe clicked
    if(!this.classList.contains('clicked')) {
        //Aggiungo all' elemento cliccato la classe 'clicked'
        this.classList.add('clicked');
        //Prendo l' elemento html di testo che ha il numero relativo a questo btn
        const relatedNumberText= allLikeCounter[i];
        // Prendo il numero dentro relateNumberText
        let relatedNumber = parseInt(relatedNumberText.innerHTML);
        console.log(relatedNumber);
        // Incremento di 1
        relatedNumber++;
        // Scrivo il numero incrementato dentro relateNumberText
        relatedNumberText.innerHTML = relatedNumber;
    }
 }); 


//MILESTONE 2
// Per ogni elemento dell' array socialPost popolo il tamplate e stampo in pagina
const post = document.querySelector('.post');
for(let i = 0; i < socialPosts.length; i++) {
    const thisSocialPost = socialPosts[i];
    console.log(thisSocialPost);
 // Destrutturazione
 const {name,imageProfile,date,text,image,like} = thisSocialPost;   
    
    const newPostTemplate = `
     <div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="img/${imageProfile}" alt="${name}">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${name}</div>
                <div class="post-meta__time">${date}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${text}</div>
    <div class="post__image">
        ${image === null ? `<span>no picture</span>` : `<img src="${image}" alt="${name}">`}
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#" data-postid="1">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-1" class="js-likes-counter">${like}</b> persone
            </div>
        </div> 
    </div>            
</div>
`;
// Concateno i post 
post.innerHTML =+ newPostTemplate;
}
