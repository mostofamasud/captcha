document.addEventListener('DOMContentLoaded', () => {
    const imagesContainer = document.getElementById('images-container');
    const verifyButton = document.getElementById('verify-button');
    const resultText = document.getElementById('captcha-result');

    const images = [
        { src: 'https://i.ibb.co/P4mkXXR/random-1.jpg', isTrump: false },
        { src: 'https://i.ibb.co/xGx5fFj/random-2.jpg', isTrump: false },
        { src: 'https://i.ibb.co/2KqkmMz/random-3.jpg', isTrump: false },
        { src: 'https://i.ibb.co/LpJhRSr/random-4.jpg', isTrump: false },
        { src: 'https://i.ibb.co/L02XhBr/trump-1.jpg', isTrump: true },
        { src: 'https://i.ibb.co/zX6kKys/random-7.jpg', isTrump: false },
        { src: 'https://i.ibb.co/Vpbt3d7/random-6.jpg', isTrump: false },
        { src: 'https://i.ibb.co/YTWmLFy/random-5.jpg', isTrump: false },
        { src: 'https://i.ibb.co/bsP8TNJ/random-8.jpg', isTrump: false }
    ];

    images.forEach((image, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.dataset.isTrump = image.isTrump;
        // imgElement.style.margin = "10px";
        imgElement.style.width = "130px";
        imgElement.style.height = "130px";
        imgElement.addEventListener('click', () => {
            imgElement.classList.toggle('selected');
        });
        imagesContainer.appendChild(imgElement);
        
    });

    verifyButton.addEventListener('click', () => {
        const selectedImages = document.querySelectorAll('#images-container img.selected');
        let correctSelections = true;

        selectedImages.forEach(img => {
            if (img.dataset.isTrump === 'false') {
                correctSelections = false;
            }
        });

        const allTrumpImages = Array.from(document.querySelectorAll('#images-container img'))
            .filter(img => img.dataset.isTrump === 'true');

        if (correctSelections && selectedImages.length === allTrumpImages.length) {
            resultText.textContent = 'CAPTCHA passed!';
            resultText.style.color = 'green';
            alert("Congratulations! You are human!")
            window.location.href = 'successful.html';
        } else {
            resultText.textContent = 'CAPTCHA failed. Try again.';
            resultText.style.color = 'red';
            window.location.reload();
        }
    });
});
