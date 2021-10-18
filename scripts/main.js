
const card = document.getElementsByClassName('Cards')[0];
// Company Data

const Companies = [
    {
        name:"Apple",
        logo:'assets/Your Logo Here - 320x100.png',
        type: "Company",
        founded: 2021,
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing.',
        links: {
            web: '',
            fb: '',
            ld:'',
            tw: '',
        }
        
    },
    {
        name:"Apple",
        logo:'assets/Your Logo Here - 320x100.png',
        type: "Company",
        founded: 2021,
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing.',
        links: {
            web: '',
            fb: '',
            ld:'',
            tw: '',
        }
        
    },
    
];



const cardList =  Companies.map((company) => {
    return(
       `
       <div class="card-items">
        <h2>${company.name}</h2>
        <img src="${company.logo}" alt="">
        <div class="info">
            <h4>${company.type}</h4>
            <h4>${company.founded}</h4>
            <p>${company.desc}</p>
            <div class="links">
                    <ul>
                        <li><a href="http://" target="_blank" >Website</a></li>
                        <li><a href="http://" target="_blank" >LinkdIn</a></li>
                        <li><a href="http://" target="_blank" >Facebook</a></li>
                        <li><a href="http://" target="_blank" >Github</a></li>
                    </ul>
            </div>
        </div>
       </div>
       `
    )
}).join('')

card.innerHTML = cardList;