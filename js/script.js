


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
        name: 'Phil Mangione',
        image: 'img1.jpg',
        date: '06/25/2021',
        text:'Placeat libero ipsa nobis ipsum quibusdam qua harum ut.Distinctio minima iust.Ad ad maiores et sint voluptate reusandae architetcto.Et nihli uallam aut alias.',
        image:'img1.1.jpg',
        like: 80,
    },

    {
        idpost: 2,
        name:'Sofia Perlari',
        image: 'img2.jpg',
        date:'09/03/2021',
        text:'Placeat libero ipsa nobis ipsum quibusdam qua harum ut.Distinctio minima iust.Ad ad maiores et sint voluptate reusandae architetcto.Et nihli uallam aut alias.',
        image: 'img1.2.jpg',
        like: 120,
    }
];

//MILESTONE 2
// Per ogni elemento dell' array socialPost popolo il tamplate e stampo in pagina
const post = document.querySelector('.post');
for(let i = 0; i < socialPosts.length; i++) {
    const thisSocialPost = socialPosts[i];
    console.log(thisSocialPost);
    
    const newPostTemplate = `
     <div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="img/" alt="${thisSocialPost.name}">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${thisSocialPost.name}</div>
                <div class="post-meta__time">${thisSocialPost.date}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${thisSocialPost.text}</div>
    <div class="post__image">
        <img src="img/${thisSocialPost.image}" alt="${thisSocialPost.name}">
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
                Piace a <b id="like-counter-1" class="js-likes-counter">${thisSocialPost.like}</b> persone
            </div>
        </div> 
    </div>            
</div>
`;

post.innerHTML =+ newPostTemplate;
}