
const card = document.getElementsByClassName('Cards')[0];

const cardList = Companies.map((company) => {
    return(
       `
       <div class="card-items">
            <h2>${company.name}</h2>
            <img src="${company.logo}" alt="">
                <div class="info">
                    
                    <div class="type-date">
                        <h4>Type:</h4>
                        <p>${company.type}</p>
                        <h4>Founded: </h4>
                        <p>${company.founded}</p>
                    </div>
                    
                    <p class="desc">${company.desc}</p>
                    
                    <div class="links">
                            <ul>
                                <li><a href="${company.links.web}" target="_blank" ><i class="fas fa-globe icon"></i></a></li>
                                <li><a href="${company.links.ld}" target="_blank" ><i class="fab fa-linkedin icon"></i></a></li>
                                <li><a href="${company.links.fb}" target="_blank" ><i class="fab fa-facebook icon"></i></a></li>
                            </ul>
                    </div>
                    
                </div>
       </div>
       `
    )
}).join('');

card.innerHTML = cardList;

{/* <li><a href="${company.links.tw}" target="_blank" ><i class="fab fa-github-square icon"></i></a></li> */}