const url = 'https://dog.ceo/api/breeds/image/random';

randomDog.addEventListener('click', function () {
    fetch(url)
        .then(res => res.json())
        .then(res => {
            dogImg.setAttribute('src', res.message);
            dogImg.style.width = '600px';
        })
        .catch(err => console.log('err'))
})