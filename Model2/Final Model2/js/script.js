// Dữ liệu mẫu với URL hình ảnh và mô tả
const photoData = {
    "Bơ": {
        "images": ["bo.jpg", "bo.jpg", "bo.jpg"],
        "description": "Collection of high resolution fruit photoshoots",
        "date": "May 8",
        "thumbnail": "bo.jpg"
    },
    "Đào": {
        "images": ["dao.jpg", "dao.jpg", "dao.jpg"],
        "description": "Collection of high resolution fruit photoshoots",
        "date": "May 8",
        "thumbnail": "dao.jpg"
    },
    "Mận": {
        "images": ["man.jpg", "man.jpg", "man.jpg"],
        "description": "Collection of high resolution fruit photoshoots",
        "date": "May 8",
        "thumbnail": "man.jpg"
    },
    "Ổi": {
        "images": ["oi.jpg", "oi.jpg", "oi.jpg"],
        "description": "Second photoshoots of figs moved here. Use this folder.",
        "date": "May 8",
        "thumbnail": "oi.jpg"
    },
    "Xoài": {
        "images": ["xoai.jpg", "xoai.jpg", "xoai.jpg"],
        "description": "Collection of high resolution fruit photoshoots",
        "date": "May 7",
        "thumbnail": "xoai.jpg"
    },
    "Táo": {
        "images": ["tao.jpg", "tao.jpg", "tao.jpg"],
        "description": "Collection of high resolution fruit photoshoots",
        "date": "May 7",
        "thumbnail": "tao.jpg"
    }
};

// Lưu dữ liệu vào Local Storage
localStorage.setItem('photoData', JSON.stringify(photoData));

// Lấy dữ liệu từ Local Storage
const storedPhotoData = JSON.parse(localStorage.getItem('photoData'));

// Tạo danh sách bên trái
const photoList = document.getElementById('photo-list');
for (const category in storedPhotoData) {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.onclick = () => displayPhotos(category);

    const img = document.createElement('img');
    img.src = `img/${storedPhotoData[category].thumbnail}`;
    listItem.appendChild(img);

    const textContainer = document.createElement('div');
    textContainer.className = 'text-container';

    const title = document.createElement('div');
    title.className = 'title';
    title.textContent = category;
    textContainer.appendChild(title);

    const description = document.createElement('div');
    description.className = 'description';
    description.textContent = storedPhotoData[category].description;
    textContainer.appendChild(description);

    listItem.appendChild(textContainer);

    const date = document.createElement('div');
    date.className = 'date';
    date.textContent = storedPhotoData[category].date;
    listItem.appendChild(date);

    photoList.appendChild(listItem);
}

// Hiển thị hình ảnh bên phải
function displayPhotos(category) {
    const photoDisplay = document.getElementById('photo-display');
    photoDisplay.innerHTML = '';
    const photos = storedPhotoData[category].images;
    photos.forEach(photo => {
        const img = document.createElement('img');
        img.src = `img/${photo}`;
        img.className = 'col-md-4';
        photoDisplay.appendChild(img);
    });
}


document.getElementById('toggle-list').addEventListener('click', function() {
    const photoListContainer = document.getElementById('photo-list-container');
    photoListContainer.classList.toggle('show');
});