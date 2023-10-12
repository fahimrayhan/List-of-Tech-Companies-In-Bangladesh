
const card = document.getElementsByClassName('Cards')[0];

const cardList = Companies.map((company) => {
    return(
       `
       <div class="card-items">
            <h2>${company.company_name}</h2>
            
                <div class="info">
                    
                    <div class="type-date">
                        <h4>Tech Stack:</h4>
                        <p>${company.company_techstack}</p>
                        
                    </div>
                    <h4>Address: </h4>
                    <p class="desc">${company.company_address}</p>
                    
                    <div class="links">
                            <ul>
                                <li><a href="${company.company_website}" target="_blank" ><i class="fas fa-globe icon"></i></a></li>
                                <li><a href="#" target="_blank" ><i class="fab fa-linkedin icon"></i></a></li>
                                <li><a href="#" target="_blank" ><i class="fab fa-facebook icon"></i></a></li>
                            </ul>
                    </div>
                    
                </div>
       </div>
       `
    )
}).join('');

card.innerHTML = cardList;

{/* <li><a href="${company.links.tw}" target="_blank" ><i class="fab fa-github-square icon"></i></a></li> */}