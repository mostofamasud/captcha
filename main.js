document.addEventListener('DOMContentLoaded', () => {
    const imagesContainer = document.getElementById('images-container');
    const verifyButton = document.getElementById('verify-button');
    const resultText = document.getElementById('captcha-result');

    const images = [
        { src: '/images/random-1.jpeg', isTrump: false },
        { src: '/images/random-2.jpeg', isTrump: false },
        { src: '/images/random-3.jpeg', isTrump: false },
        { src: '/images/random-4.jpeg', isTrump: false },
        { src: '/images/trump-1.jpeg', isTrump: true },
        { src: '/images/random-7.jpeg', isTrump: false },
        { src: '/images/random-6.jpeg', isTrump: false },
        { src: '/images/random-5.jpeg', isTrump: false },
        { src: '/images/random-8.jpeg', isTrump: false }
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
