document.addEventListener('DOMContentLoaded', function() {
    // 1. Change text content dynamically
    const changeTextBtn = document.getElementById('change-text-btn');
    const planetInfo = document.getElementById('planet-info');
    
    const planetFacts = {
        mars: [
            "Mars is called the Red Planet because of its iron-rich soil.",
            "Mars has the largest volcano in the solar system - Olympus Mons.",
            "A day on Mars is 24.6 hours, very similar to Earth.",
            "Mars has two moons: Phobos and Deimos."
        ],
        earth: [
            "Earth is the only known planet with liquid water on its surface.",
            "Earth's atmosphere is 78% nitrogen and 21% oxygen.",
            "Our planet is about 4.5 billion years old.",
            "Earth isn't perfectly round - it's an oblate spheroid."
        ]
    };
    
    let showingMars = false;
    changeTextBtn.addEventListener('click', function() {
        showingMars = !showingMars;
        
        if (showingMars) {
            const marsFactsHTML = planetFacts.mars.map(fact => 
                `<p>• ${fact}</p>`
            ).join('');
            planetInfo.innerHTML = `<h3>Mars Facts</h3>${marsFactsHTML}`;
            changeTextBtn.textContent = 'Show Earth Facts';
        } else {
            const earthFactsHTML = planetFacts.earth.map(fact => 
                `<p>• ${fact}</p>`
            ).join('');
            planetInfo.innerHTML = `<h3>Earth Facts</h3>${earthFactsHTML}`;
            changeTextBtn.textContent = 'Show Mars Facts';
        }
    });

    // 2. Modify CSS styles via JavaScript
    const styleBtn = document.getElementById('style-btn');
    let spaceMode = false;
    
    styleBtn.addEventListener('click', function() {
        spaceMode = !spaceMode;
        
        if (spaceMode) {
            document.body.style.color = '#ffffff';
            document.body.style.backgroundColor = '#000033';
            document.querySelectorAll('.container').forEach(container => {
                container.style.backgroundColor = 'rgba(0, 0, 51, 0.9)';
                container.style.boxShadow = '0 0 15px #6bb9f0';
            });
            styleBtn.textContent = 'Normal Mode';
        } else {
            document.body.style.color = '#e0e0ff';
            document.body.style.backgroundColor = '#0a0a1a';
            document.querySelectorAll('.container').forEach(container => {
                container.style.backgroundColor = 'rgba(20, 20, 50, 0.9)';
                container.style.boxShadow = 'none';
            });
            styleBtn.textContent = 'Space Mode';
        }
    });

    // 3. Add or remove elements dynamically
    const addImageBtn = document.getElementById('add-image-btn');
    const removeImageBtn = document.getElementById('remove-image-btn');
    const imageContainer = document.getElementById('space-image-container');
    
    const spaceImages = [
        'https://images.unsplash.com/photo-1465101162946-4377e57745c3',
        'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986',
        'https://images.unsplash.com/photo-1501862700950-18382cd41497',
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa'
    ];
    
    addImageBtn.addEventListener('click', function() {
        if (imageContainer.children.length < 6) {
            const randomImage = spaceImages[Math.floor(Math.random() * spaceImages.length)];
            const img = document.createElement('img');
            img.src = randomImage;
            img.alt = 'Cosmic image';
            img.className = 'space-image';
            imageContainer.appendChild(img);
        } else {
            alert('Maximum of 6 images allowed!');
        }
    });
    
    removeImageBtn.addEventListener('click', function() {
        if (imageContainer.children.length > 2) {
            imageContainer.lastChild.remove();
        } else {
            alert('Need to keep at least 2 images!');
        }
    });

    // Bonus: Add space missions
    const missionsList = document.getElementById('missions-list');
    const addMissionBtn = document.getElementById('add-mission-btn');
    
    const spaceMissions = [
        "Hubble Space Telescope - Orbiting Observatory",
        "Curiosity Rover - Mars Exploration",
        "Cassini-Huygens - Saturn Mission",
        "James Webb Telescope - Infrared Astronomy",
        "International Space Station - Orbital Laboratory"
    ];
    
    addMissionBtn.addEventListener('click', function() {
        const randomMission = spaceMissions[Math.floor(Math.random() * spaceMissions.length)];
        const li = document.createElement('li');
        li.textContent = randomMission;
        missionsList.appendChild(li);
    });
});