const body = document.body;
const fileInput = document.getElementById('fileInput');

// Handle file selection
fileInput.addEventListener('change', event => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            setBackground(e.target.result);
        }
        reader.readAsDataURL(file);
    }
});

// Handle image paste
pasteInput.addEventListener('paste', event => {
    const items = event.clipboardData.items;
    for (let item of items) {
        // Image in clipboard
        if (item.type.startsWith('image/')) {
            const file = item.getAsFile();
            const reader = new FileReader();
            reader.onload = function(e) {
                setBackground(e.target.result);
            }
            reader.readAsDataURL(file);
        }
        // URL in clipboard
        if (item.type.startsWith('text/plain')) {
            item.getAsString(url => {
                if (isValidImageUrl(url)) {
                    setBackground(url);
                } else {
                    alert("Pasted text is not a valid image URL.");
                }
            });
        }
    }
});

// Function to set background
function setBackground(imageSrc) {
    body.style.backgroundImage = `url(${imageSrc})`;
    body.style.backgroundRepeat = 'repeat';
}

// Function to check if a URL points to an image
function isValidImageUrl(url) {
    return(url.match(/\.(jpeg|jpg|gif|png|webp)$/) != null);
}

// Adjust tiling based on slider value
function adjustTiling(tiles) {
    body.style.backgroundSize = `${1000 / tiles}% auto`;
}

// Update tiling when slider value changes
tileSlider.addEventListener('input', event => {
    adjustTiling(event.target.value);
});