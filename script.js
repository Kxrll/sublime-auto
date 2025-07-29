// Données des véhicules
const vehicles = [
  // Camion Renault Expert - Vente
  {
    id: 1,
    brand: "Renault",
    model: "Expert",
    year: "",
    mileage: "",
    price: "",
    type: "vente",
    images: [
      "img/camion renau expert/im1.jpg",
      "img/camion renau expert/ce78d37a-0713-48e0-b5f2-2653011611d9.jpg",
      "img/camion renau expert/5295b539-fcdf-4650-9b39-278d7cb90a3a.jpg",
      "img/camion renau expert/4cb5cb91-fe8c-45f6-a268-9127e920b50d.jpg",
      "img/camion renau expert/0bc4c8d1-0d74-46c3-8fdb-db3deb9e04d2.jpg",
      "img/camion renau expert/4eae9ed6-5c06-4f24-bb14-2b70206944db.jpg",
      "img/camion renau expert/e0a7b43e-86e2-4b28-8cd4-1449b3e26424.jpg",
      "img/camion renau expert/e7f4121b-9953-4830-be4e-d491bd344da3.jpg"
    ],
    description: "Camion Renault Expert, voir toutes les photos pour plus de détails.",
    features: [],
    fuel: "",
    transmission: "",
    doors: "",
    power: ""
  },
  // Camion Jaune - Vente
  {
    id: 2,
    brand: "Camion",
    model: "Jaune",
    year: "",
    mileage: "",
    price: "",
    type: "vente",
    images: [
      "img/camion jaune/im1.jpg",
      "img/camion jaune/d3b346d2-7e3c-49bc-9b98-badd5e710849.jpg",
      "img/camion jaune/ceb0a836-bfc1-4b79-82cf-69f0311c5438.jpg",
      "img/camion jaune/465399be-5b71-47b1-b369-6c406e22e0e4.jpg",
      "img/camion jaune/445560bd-1eb0-4dfb-bcc9-e53cc93b136a.jpg",
      "img/camion jaune/817d8bf3-0668-483c-9725-aafd7982d178.jpg",
      "img/camion jaune/8c6305ef-730b-4e65-9e6c-b8f10c467621.jpg",
      "img/camion jaune/3b700226-c25f-4577-85d0-d983efa0a6f2.jpg",
      "img/camion jaune/38a7f26d-9db1-4d9f-927e-bb5065fd1385.jpg",
      "img/camion jaune/3f3b951d-27fa-4747-9fbe-af22e7917593.jpg",
      "img/camion jaune/d40199c9-f00a-4ef0-87f7-141c65bb0d0c.jpg",
      "img/camion jaune/e719ee2a-e7e6-418b-9920-a93feda14d2d.jpg"
    ],
    description: "Camion jaune, voir toutes les photos pour plus de détails.",
    features: [],
    fuel: "",
    transmission: "",
    doors: "",
    power: ""
  },
  // Camion FG - Vente
  {
    id: 3,
    brand: "Camion",
    model: "FG",
    year: "",
    mileage: "",
    price: "",
    type: "vente",
    images: [
      "img/camion fg/im1.jpg",
      "img/camion fg/f6937edc-6cbb-4315-a645-973a3f194d29.jpg",
      "img/camion fg/e56c5b66-35d0-4375-bdc5-03597650c592.jpg",
      "img/camion fg/1098b04d-c6eb-4afd-bde1-961dd4216564.jpg",
      "img/camion fg/508b44d3-4851-4649-a8f1-4541602bb87e.jpg",
      "img/camion fg/b35983e8-79be-48f0-8616-b67c9b6bce03.jpg",
      "img/camion fg/db6cb51b-49dc-4f69-b700-94e6577b0c7d.jpg",
      "img/camion fg/13df0702-c415-437e-92d0-001858bc0a82.jpg",
      "img/camion fg/9b9f2847-7e98-45b2-a6af-127235bf4191.jpg"
    ],
    description: "Camion FG, voir toutes les photos pour plus de détails.",
    features: [],
    fuel: "",
    transmission: "",
    doors: "",
    power: ""
  },
  // Renault Camion FQ - Vente
  {
    id: 4,
    brand: "Renault",
    model: "Camion FQ",
    year: "",
    mileage: "",
    price: "",
    type: "vente",
    images: [
      "img/renaut camion FQ/im1.jpg",
      "img/renaut camion FQ/6de7cf04-eaba-4b67-ba5e-0141a35f52b2.jpg",
      "img/renaut camion FQ/8830b1ed-42c1-4b9e-8570-34d6019875e6.jpg",
      "img/renaut camion FQ/89074649-a477-4ed8-aca9-2630af9af850.jpg",
      "img/renaut camion FQ/fcc222a5-5644-455f-ad25-1796f2ffbf0c.jpg"
    ],
    description: "Renault camion FQ, voir toutes les photos pour plus de détails.",
    features: [],
    fuel: "",
    transmission: "",
    doors: "",
    power: ""
  },
  // Renault Camion - Location
  {
    id: 5,
    brand: "Renault",
    model: "Camion",
    year: "",
    mileage: "",
    price: "",
    type: "location",
    images: [
      "img/renaut camion/im1.jpg",
      "img/renaut camion/31f03c51-99fb-4a07-9e4c-1a72f44ccd14.jpg",
      "img/renaut camion/655df76a-dbff-427b-9ac1-932cce6e8955.jpg",
      "img/renaut camion/77e28f5b-10d6-481b-b6d7-307a3a5247a4.jpg"
    ],
    description: "Renault camion, voir toutes les photos pour plus de détails.",
    features: [],
    fuel: "",
    transmission: "",
    doors: "",
    power: ""
  },
  // Picasso - Location
  {
    id: 6,
    brand: "Picasso",
    model: "",
    year: "",
    mileage: "",
    price: "",
    type: "location",
    images: [
      "img/picasso/im1.jpg",
      "img/picasso/567150f2-f7b3-4d39-bd36-db9a6f314153.jpg",
      "img/picasso/c7f065ec-7eba-4557-b014-b4cb54df1167.jpg",
      "img/picasso/cb4d675f-98a6-4eba-ad05-af065107b693.jpg"
    ],
    description: "Picasso, voir toutes les photos pour plus de détails.",
    features: [],
    fuel: "",
    transmission: "",
    doors: "",
    power: ""
  },
  // Opel - Location
  {
    id: 7,
    brand: "Opel",
    model: "",
    year: "",
    mileage: "",
    price: "",
    type: "location",
    images: [
      "img/opel/im1.jpg",
      "img/opel/3c048917-0cd9-4e94-b83d-86b419bc3472.jpg",
      "img/opel/5520abe6-5206-41d1-ab42-62bc2a0e700b.jpg",
      "img/opel/a33807be-7512-43d3-acc1-4a1e885297bb.jpg",
      "img/opel/e0acaaf4-ca58-42af-b8aa-db643700dd13.jpg"
    ],
    description: "Opel, voir toutes les photos pour plus de détails.",
    features: [],
    fuel: "",
    transmission: "",
    doors: "",
    power: ""
  },
  // Peugeot 308 - Vente
  {
    id: 8,
    brand: "Peugeot",
    model: "308",
    year: "",
    mileage: "",
    price: "",
    type: "vente",
    images: [
      "img/peugot 308/im1.jpg",
      "img/peugot 308/f101db1b-1f69-4d71-b424-34c2efca2905.jpg",
      "img/peugot 308/efd5b98d-d59e-491f-8cb1-b56f75544feb.jpg",
      "img/peugot 308/93144e7f-3c19-4caa-8ef9-d28d16ec36ae.jpg",
      "img/peugot 308/5533ac78-c7ba-4689-9156-a3ea407cd2df.jpg",
      "img/peugot 308/16f81965-9b4e-4f32-998a-27cd252e2f4f.jpg",
      "img/peugot 308/1dc9e37a-9618-40b3-aac3-fb0dc60ebba7.jpg"
    ],
    description: "Peugeot 308, voir toutes les photos pour plus de détails.",
    features: [],
    fuel: "",
    transmission: "",
    doors: "",
    power: ""
  }
];

// Variables globales
let currentImageIndex = 0;
let currentVehicle = null;
let currentFilter = 'all'; // Filtre par type (vente/location)
let currentBrandFilter = 'all-brands'; // Filtre par marque

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    
    // Charger les véhicules sur la page d'accueil
    if (document.getElementById('vehicles-grid')) {
        loadVehicles();
        initializeFilterButtons();
    }
    
    // Charger les détails du véhicule si nous sommes sur la page de détails
    if (document.getElementById('car-details-content')) {
        loadCarDetails();
    }
    
    // Initialiser le formulaire de contact
    if (document.getElementById('contact-form')) {
        initializeContactForm();
    }
    
    // Smooth scrolling pour les ancres
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
            link.addEventListener('click', function(e) {
                // Permettre la navigation normale
                const href = this.getAttribute('href');
                
                // Fermer le menu pour tous les liens
                navMenu.classList.remove('active');
                navToggle.querySelector('i').className = 'fas fa-bars';
                
                // Si c'est un lien vers la même page (ancre), faire défiler en douceur
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
                // Si c'est un lien vers une autre page, la navigation se fera normalement
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

// Initialiser les boutons de filtre
function initializeFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterType = this.getAttribute('data-filter');
            
            // Déterminer le type de filtre (type de transaction ou marque)
            if (filterType === 'all' || filterType === 'vente' || filterType === 'location') {
                // Filtre par type de transaction - désactiver tous les boutons de cette section
                const transactionFilterSection = this.closest('.filter-section');
                transactionFilterSection.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                this.classList.add('active');
                currentFilter = filterType;
            } else {
                // Filtre par marque - désactiver tous les boutons de cette section
                const brandFilterSection = this.closest('.filter-section');
                brandFilterSection.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                this.classList.add('active');
                currentBrandFilter = filterType;
            }
            
            // Recharger les véhicules avec les filtres
            loadVehicles();
        });
    });
}

// Charger les véhicules
function loadVehicles() {
    const vehiclesGrid = document.getElementById('vehicles-grid');
    if (!vehiclesGrid) return;
    
    vehiclesGrid.innerHTML = '';
    
    // Filtrer les véhicules selon les filtres actuels
    let filteredVehicles = vehicles;
    
    // Filtre par type de transaction
    if (currentFilter !== 'all') {
        filteredVehicles = filteredVehicles.filter(vehicle => vehicle.type === currentFilter);
    }
    
    // Filtre par marque
    if (currentBrandFilter !== 'all-brands') {
        filteredVehicles = filteredVehicles.filter(vehicle => 
            vehicle.brand.toLowerCase() === currentBrandFilter.toLowerCase()
        );
    }
    
    filteredVehicles.forEach(vehicle => {
        const vehicleCard = createVehicleCard(vehicle);
        vehiclesGrid.appendChild(vehicleCard);
    });
}

// Créer une carte de véhicule
function createVehicleCard(vehicle) {
    const card = document.createElement('div');
    card.className = 'vehicle-card fade-in';
    
    const typeLabel = vehicle.type === 'vente' ? 'Vente' : 'Location';
    const typeClass = vehicle.type === 'vente' ? 'vente' : 'location';
    // Faux prix si vide
    let fakePrice = vehicle.price;
    if (!fakePrice) {
        fakePrice = vehicle.type === 'vente' ? `${getRandomInt(8900, 29900).toLocaleString('fr-FR')} €` : `${getRandomInt(290, 990).toLocaleString('fr-FR')} €/mois`;
    }
    // Bouton action
    const actionBtn = vehicle.type === 'vente'
        ? '<button class="btn-primary">Acheter</button>'
        : '<button class="btn-primary">Louer</button>';
    
    // Utiliser l'image im1.jpg comme image principale (première image du tableau)
    const mainImage = vehicle.images[0];
    
    // Créer les boutons de navigation si il y a plusieurs images
    const navigationButtons = vehicle.images.length > 1 ? `
        <button class="vehicle-nav vehicle-prev" onclick="event.stopPropagation(); previousVehicleImage(${vehicle.id})">
            <i class="fas fa-chevron-left"></i>
        </button>
        <button class="vehicle-nav vehicle-next" onclick="event.stopPropagation(); nextVehicleImage(${vehicle.id})">
            <i class="fas fa-chevron-right"></i>
        </button>
    ` : '';
    
    card.innerHTML = `
        <div class="vehicle-image" data-vehicle-id="${vehicle.id}" data-current-image="0">
            <img src="${mainImage}" alt="${vehicle.brand} ${vehicle.model}" />
            <div class="vehicle-type ${typeClass}">${typeLabel}</div>
            <div class="vehicle-price">${fakePrice}</div>
            ${navigationButtons}
        </div>
        <div class="vehicle-info">
            <h3 class="vehicle-title">${vehicle.brand} ${vehicle.model}</h3>
            <div class="vehicle-specs">
                <span><i class="fas fa-calendar"></i> ${vehicle.year || 'N/A'}</span>
                <span><i class="fas fa-road"></i> ${vehicle.mileage || 'N/A'} km</span>
                <span><i class="fas fa-gas-pump"></i> ${vehicle.fuel || 'N/A'}</span>
            </div>
            <p class="vehicle-description">${vehicle.description}</p>
            ${actionBtn}
        </div>
    `;
    
    // Ajouter l'événement de clic pour voir les détails (sauf sur les boutons de navigation)
    card.addEventListener('click', (e) => {
        if (!e.target.closest('.vehicle-nav')) {
            viewVehicleDetails(vehicle.id);
        }
    });
    
    return card;
}

// Générer un prix aléatoire réaliste
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Voir les détails d'un véhicule
function viewVehicleDetails(vehicleId) {
    // Stocker l'ID du véhicule dans le localStorage pour la page de détails
    localStorage.setItem('selectedVehicleId', vehicleId);
    window.location.href = 'car-details.html';
}

// Charger les détails du véhicule
function loadCarDetails() {
    const vehicleId = localStorage.getItem('selectedVehicleId');
    if (!vehicleId) {
        // Rediriger vers l'accueil si aucun véhicule sélectionné
        window.location.href = 'index.html';
        return;
    }
    
    currentVehicle = vehicles.find(v => v.id == vehicleId);
    if (!currentVehicle) {
        window.location.href = 'index.html';
        return;
    }
    
    renderCarDetails();
}

// Fonction pour vérifier si une image existe
function checkImageExists(imageSrc) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = imageSrc;
    });
}

// Fonction pour filtrer les images existantes
async function filterValidImages(images) {
    const validImages = [];
    for (let i = 0; i < images.length; i++) {
        const exists = await checkImageExists(images[i]);
        if (exists) {
            validImages.push(images[i]);
        }
    }
    return validImages;
}

// Afficher les détails du véhicule
async function renderCarDetails() {
    const container = document.getElementById('car-details-content');
    if (!container || !currentVehicle) return;
    
    // Filtrer les images existantes
    const validImages = await filterValidImages(currentVehicle.images);
    
    // Si aucune image valide, utiliser une image par défaut
    if (validImages.length === 0) {
        validImages.push('public/logo.jpg');
    }
    
    // Mettre à jour les images du véhicule avec seulement les valides
    currentVehicle.images = validImages;
    
    container.innerHTML = `
        <div class="car-details-grid">
            <div class="car-gallery">
                <div class="gallery-main">
                    <img id="main-image" src="${validImages[0]}" alt="${currentVehicle.brand} ${currentVehicle.model}" />
                    ${validImages.length > 1 ? `
                        <button class="gallery-nav gallery-prev" onclick="previousImage()">
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        <button class="gallery-nav gallery-next" onclick="nextImage()">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    ` : ''}
                </div>
                ${validImages.length > 1 ? `
                    <div class="gallery-thumbnails">
                        ${validImages.map((img, index) => 
                            `<img src="${img}" alt="Photo ${index + 1}" class="thumbnail ${index === 0 ? 'active' : ''}" onclick="selectImage(${index})" />`
                        ).join('')}
                    </div>
                ` : ''}
            </div>
            
            <div class="car-info">
                <h1>${currentVehicle.brand} ${currentVehicle.model}</h1>
                <div class="car-price">${generatePriceForVehicle(currentVehicle)}</div>
                
                <div class="car-specs-grid">
                    <div class="spec-item">
                        <span class="spec-label">Année</span>
                        <span class="spec-value">${currentVehicle.year || 'N/A'}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Kilométrage</span>
                        <span class="spec-value">${currentVehicle.mileage || 'N/A'} km</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Carburant</span>
                        <span class="spec-value">${currentVehicle.fuel || 'N/A'}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Transmission</span>
                        <span class="spec-value">${currentVehicle.transmission || 'N/A'}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Portes</span>
                        <span class="spec-value">${currentVehicle.doors || 'N/A'}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Puissance</span>
                        <span class="spec-value">${currentVehicle.power || 'N/A'}</span>
                    </div>
                </div>
                
                <div class="car-description">
                    <h3>Description</h3>
                    <p>${currentVehicle.description}</p>
                    
                    ${currentVehicle.features && currentVehicle.features.length > 0 ? `
                        <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem;">Équipements</h4>
                        <ul style="list-style: none; padding: 0;">
                            ${currentVehicle.features.map(feature => 
                                `<li style="padding: 0.25rem 0; color: var(--text-light);"><i class="fas fa-check" style="color: var(--gold-accent); margin-right: 0.5rem;"></i>${feature}</li>`
                            ).join('')}
                        </ul>
                    ` : ''}
                </div>
                
                <div class="car-actions">
                    <a href="tel:+33123456789" class="btn-call">
                        <i class="fas fa-phone"></i> Appeler
                    </a>
                    <a href="contact.html" class="btn-primary">Demander des infos</a>
                </div>
            </div>
        </div>
    `;
    
    currentImageIndex = 0; // Commencer par la première image (index 0)
}

// Navigation de la galerie
function previousImage() {
    if (!currentVehicle) return;
    currentImageIndex = (currentImageIndex - 1 + currentVehicle.images.length) % currentVehicle.images.length;
    updateMainImage();
}

function nextImage() {
    if (!currentVehicle) return;
    currentImageIndex = (currentImageIndex + 1) % currentVehicle.images.length;
    updateMainImage();
}

function selectImage(index) {
    currentImageIndex = index;
    updateMainImage();
}

function updateMainImage() {
    const mainImage = document.getElementById('main-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    if (mainImage && currentVehicle) {
        mainImage.src = currentVehicle.images[currentImageIndex];
        
        // Mettre à jour les vignettes actives
        thumbnails.forEach((thumb, index) => {
            thumb.classList.toggle('active', index === currentImageIndex);
        });
    }
}

// Navigation des images dans les cartes de véhicules (page d'accueil)
function previousVehicleImage(vehicleId) {
    const vehicle = vehicles.find(v => v.id === vehicleId);
    if (!vehicle) return;
    
    const vehicleImageContainer = document.querySelector(`[data-vehicle-id="${vehicleId}"]`);
    if (!vehicleImageContainer) return;
    
    let currentImageIndex = parseInt(vehicleImageContainer.getAttribute('data-current-image'));
    currentImageIndex = (currentImageIndex - 1 + vehicle.images.length) % vehicle.images.length;
    
    updateVehicleCardImage(vehicleId, currentImageIndex);
}

function nextVehicleImage(vehicleId) {
    const vehicle = vehicles.find(v => v.id === vehicleId);
    if (!vehicle) return;
    
    const vehicleImageContainer = document.querySelector(`[data-vehicle-id="${vehicleId}"]`);
    if (!vehicleImageContainer) return;
    
    let currentImageIndex = parseInt(vehicleImageContainer.getAttribute('data-current-image'));
    currentImageIndex = (currentImageIndex + 1) % vehicle.images.length;
    
    updateVehicleCardImage(vehicleId, currentImageIndex);
}

function updateVehicleCardImage(vehicleId, imageIndex) {
    const vehicle = vehicles.find(v => v.id === vehicleId);
    if (!vehicle) return;
    
    const vehicleImageContainer = document.querySelector(`[data-vehicle-id="${vehicleId}"]`);
    if (!vehicleImageContainer) return;
    
    const imageElement = vehicleImageContainer.querySelector('img');
    if (imageElement) {
        imageElement.src = vehicle.images[imageIndex];
        vehicleImageContainer.setAttribute('data-current-image', imageIndex);
    }
}

// Formulaire de contact
function initializeContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Récupérer les données du formulaire
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Validation simple
        if (!data.name || !data.email || !data.subject || !data.message) {
            alert('Veuillez remplir tous les champs obligatoires.');
            return;
        }
        
        // Simuler l'envoi du formulaire
        showSuccessMessage();
        form.reset();
    });
}

function showSuccessMessage() {
    // Créer et afficher un message de succès
    const message = document.createElement('div');
    message.className = 'success-message';
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--gold-accent);
        color: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: var(--shadow-medium);
        z-index: 10000;
        text-align: center;
        max-width: 400px;
    `;
    message.innerHTML = `
        <i class="fas fa-check-circle" style="font-size: 2rem; margin-bottom: 1rem;"></i>
        <h3>Message envoyé avec succès !</h3>
        <p>Nous vous recontacterons dans les plus brefs délais.</p>
    `;
    
    document.body.appendChild(message);
    
    // Supprimer le message après 3 secondes
    setTimeout(() => {
        document.body.removeChild(message);
    }, 3000);
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

// Fonction pour générer un prix approprié selon le véhicule
function generatePriceForVehicle(vehicle) {
    // Si le véhicule a déjà un prix, l'utiliser
    if (vehicle.price && vehicle.price !== "") {
        return `${parseInt(vehicle.price).toLocaleString('fr-FR')} €`;
    }
    
    // Générer un prix selon le type et la marque
    let price;
    
    if (vehicle.type === 'vente') {
        // Prix de vente selon la marque et le modèle
        if (vehicle.brand === 'Renault') {
            if (vehicle.model === 'Expert') {
                price = getRandomInt(15000, 25000);
            } else if (vehicle.model === 'Camion FQ') {
                price = getRandomInt(12000, 20000);
            } else {
                price = getRandomInt(10000, 18000);
            }
        } else if (vehicle.brand === 'Peugeot') {
            if (vehicle.model === '308') {
                price = getRandomInt(12000, 20000);
            } else {
                price = getRandomInt(10000, 18000);
            }
        } else if (vehicle.brand === 'Camion') {
            if (vehicle.model === 'Jaune') {
                price = getRandomInt(18000, 28000);
            } else if (vehicle.model === 'FG') {
                price = getRandomInt(16000, 24000);
            } else {
                price = getRandomInt(14000, 22000);
            }
        } else {
            price = getRandomInt(8000, 15000);
        }
        return `${price.toLocaleString('fr-FR')} €`;
    } else {
        // Prix de location selon la marque et le modèle
        if (vehicle.brand === 'Renault') {
            if (vehicle.model === 'Camion') {
                price = getRandomInt(400, 600);
            } else {
                price = getRandomInt(300, 500);
            }
        } else if (vehicle.brand === 'Picasso') {
            price = getRandomInt(250, 400);
        } else if (vehicle.brand === 'Opel') {
            price = getRandomInt(200, 350);
        } else {
            price = getRandomInt(200, 400);
        }
        return `${price.toLocaleString('fr-FR')} €/mois`;
    }
}

// Utilitaires
function formatPrice(price) {
    return parseInt(price).toLocaleString('fr-FR');
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
    
    document.querySelectorAll('.vehicle-card, .feature, .contact-item').forEach(el => {
        observer.observe(el);
    });
}

// Initialiser l'observation au chargement
document.addEventListener('DOMContentLoaded', observeElements);