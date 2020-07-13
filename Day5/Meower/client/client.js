const API_URL = 'http://192.168.99.100:3000/meows';

const loading = document.querySelector('.loading');
loading.style.display = 'none';

const form = document.querySelector('form');
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const content = formData.get('content');

    const meow = {
        name,
        content
    };

    loading.style.display = '';
    form.style.display = 'none';

    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(meow),
        headers: {
            'content-type': 'application/json'
        }
    });
});