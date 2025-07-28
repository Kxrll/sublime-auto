// Données des véhicules vendus
const soldVehicles = [
    {
        id: 1,
        brand: "Renault",
        model: "Camion",
        year: "2018",
        mileage: "125 000",
        price: "Vendu",
        type: "vendus",
        images: [
            "img/renaut camion/im1.jpg",
            "img/renaut camion/655df76a-dbff-427b-9ac1-932cce6e8955.jpg",
            "img/renaut camion/77e28f5b-10d6-481b-b6d7-307a3a5247a4.jpg",
            "img/renaut camion/31f03c51-99fb-4a07-9e4c-1a72f44ccd14.jpg"
        ],
        description: "Renault camion vendu avec succès. Véhicule en excellent état.",
        features: ["Véhicule contrôlé", "Entretien à jour", "Vendu rapidement"],
        fuel: "Diesel",
        transmission: "Manuelle",
        doors: "2",
        power: "110 ch"
    }
];

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    loadSoldVehicles();
    initializeSmoothScrolling();
});

// Navigation mobile
function initializeNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Changer l'icône
            const icon = navToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
        
        // Fermer le menu lors du clic sur un lien
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.querySelector('i').className = 'fas fa-bars';
            });
        });
        
        // Fermer le menu avec la touche Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.querySelector('i').className = 'fas fa-bars';
            }
        });
    }
}

// Charger les véhicules vendus
function loadSoldVehicles() {
    const vehiclesGrid = document.getElementById('sold-vehicles-grid');
    if (!vehiclesGrid) return;
    
    vehiclesGrid.innerHTML = '';
    
    soldVehicles.forEach(vehicle => {
        const vehicleCard = createSoldVehicleCard(vehicle);
        vehiclesGrid.appendChild(vehicleCard);
    });
}

// Créer une carte de véhicule vendu
function createSoldVehicleCard(vehicle) {
    const card = document.createElement('div');
    card.className = 'vehicle-card fade-in sold-vehicle';
    
    // Utiliser l'image im1.jpg comme image principale
    const mainImage = vehicle.images[0];
    
    card.innerHTML = `
        <div class="vehicle-image">
            <img src="${mainImage}" alt="${vehicle.brand} ${vehicle.model}" />
            <div class="vehicle-type vendus">Vendu</div>
            <div class="vehicle-price sold-price">${vehicle.price}</div>
        </div>
        <div class="vehicle-info">
            <h3 class="vehicle-title">${vehicle.brand} ${vehicle.model}</h3>
            <div class="vehicle-specs">
                <span><i class="fas fa-calendar"></i> ${vehicle.year}</span>
                <span><i class="fas fa-road"></i> ${vehicle.mileage} km</span>
                <span><i class="fas fa-gas-pump"></i> ${vehicle.fuel}</span>
            </div>
            <p class="vehicle-description">${vehicle.description}</p>
            <div class="sold-badge">
                <i class="fas fa-check-circle"></i> Vendu avec succès
            </div>
            <div class="vehicle-thumbnails">
                ${vehicle.images.map((img, index) => 
                    `<img src="${img}" alt="Photo ${index + 1}" class="vehicle-thumbnail" />`
                ).join('')}
            </div>
        </div>
    `;
    
    return card;
}

// Smooth scrolling
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Animation au scroll
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.vehicle-card').forEach(el => {
        observer.observe(el);
    });
}

// Initialiser l'observation au chargement
document.addEventListener('DOMContentLoaded', observeElements); 