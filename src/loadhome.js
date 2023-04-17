const loadHome = () => {
    const mainImage = document.createElement('img');
    mainImage.src = "../images/landing_image.jpg";

    const title = document.createElement('h1');
    title.textContent = 'A Unique experience';

    const titleText = document.createElement('h2');
    titleText.textContent = 'You have to try it';

    content.appendChild(mainImage);
    content.appendChild(title);
    content.appendChild(titleText); 
}

export default loadHome