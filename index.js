document.addEventListener('DOMContentLoaded', () => {
    const elementsToSave = [
        'name', 'title', 'email', 'phone', 'location',
        'job-title-1', 'job-company-1', 'job-dates-1', 'job-description-1',
        'job-title-2', 'job-company-2', 'job-dates-2', 'job-description-2',
        'degree-1', 'institution-1', 'education-dates-1',
        'skills-list', 'interests-text'
    ];

    // Load saved content from localStorage
    elementsToSave.forEach(id => {
        const element = document.getElementById(id);
        const savedContent = localStorage.getItem(id);
        if (savedContent) {
            element.innerHTML = savedContent;
        }

        // Save content to localStorage on blur (when user stops editing)
        element.addEventListener('blur', () => {
            localStorage.setItem(id, element.innerHTML);
        });
    });

    // Upload Image Handler
    document.getElementById('uploadButton').addEventListener('click', function() {
        document.getElementById('fileInput').click();
    });

    document.getElementById('fileInput').addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.className = 'profile-pic';
                const imagePreview = document.getElementById('imagePreview');
                imagePreview.innerHTML = ''; // Clear previous preview
                imagePreview.appendChild(img);

                // Save the image data to localStorage
                localStorage.setItem('profileImage', e.target.result);
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please upload a valid image file.');
        }
    });

    // Load saved image from localStorage
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
        const img = document.createElement('img');
        img.src = savedImage;
        img.className = 'profile-pic';
        const imagePreview = document.getElementById('imagePreview');
        imagePreview.innerHTML = ''; // Clear previous preview
        imagePreview.appendChild(img);
    }
});
