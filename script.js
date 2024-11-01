fetch('https://whatyearisit-backend-one-phi.vercel.app/year')
    .then(result => result.json())
    .then(data => {
        console.log();
        document.querySelector('#year').textContent = data.year;
    })
    .catch(error => console.error(error));