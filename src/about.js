
export default function loadAbout() {
    const content = document.getElementById('content');
    content.textContent = '';
    const header = document.createElement('h2');
    header.textContent = 'About Hikari';
    const para1 = document.createElement('p');
    para1.textContent = 'Welcome to ';
    const strong = document.createElement('strong');
    strong.textContent = 'Hikari';
    para1.appendChild(strong);
    const textNode = document.createTextNode(' a place where warm light and good food come together. Our name means “light” in Japanese, symbolizing the comfort and brightness we aim to bring to every meal.');
    para1.appendChild(textNode);
    const para2 = document.createElement('p');
    para2.textContent = 'Founded by friends who believe that simple flavors and a relaxed atmosphere make for the best dining experiences. Whether you’re joining us for lunch, dinner, or just a cup of tea, we hope you feel right at home.';
    content.append(header, para1, para2);
}