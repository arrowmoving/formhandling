// script.js

// --- PASTE YOUR GOOGLE SCRIPT WEB APP URL HERE ---
const scriptURL = 'https://script.google.com/macros/s/AKfycbxdzb6-TOhm4rbLPcR40JcH6qdbCVVc9LomEwAfnrUmhZL1cwgvDhT8xn-s2Y2dlrVPGQ/exec';

// --- TRANSLATION DATA ---
const translations = {
    en: {
        navHome: "Home",
        navServices: "Services",
        navGuides: "Moving Guides",
        navContact: "Contact",
        navCallNow: "Call Now",
        heroTitle: "Professional Moving Services in Toronto & GTA",
        heroSubtitle: "Reliable, efficient, and affordable moving for your home or business.",
        formTitle: "Get a Free Estimate",
        formMovingDate: "Moving Date *",
        formMovingFrom: "Moving From (Pick up address) *",
        formMovingTo: "Moving To (Drop-off address) *",
        formServiceType: "Service Type *",
        formServiceResidential: "Residential Moving",
        formServiceLongDistance: "Long-Distance Moving",
        formServicePacking: "Packing Services",
        formServiceCommercial: "Commercial/Office Moving",
        formServiceSpecialty: "Specialty Item Moving",
        formServiceOther: "Other",
        formNext: "Next",
        formPrevious: "Previous",
        formFullName: "Full Name *",
        formEmail: "Email *",
        formPhone: "Phone Number *",
        formDetails: "Additional Details",
        formRequestEstimate: "Request Free Estimate",
        formSubmitting: "Submitting...",
        formSuccessMessage: "Thank you! We'll contact you within 24 hours with your free estimate.",
        formErrorMessage: "Oops! There was a problem submitting your form. Please try again.",
        servicesTitle: "Our Moving Services",
        service1Title: "Residential Moving",
        service1Desc: "Expert movers for seamless home and apartment relocations across the GTA. We handle everything with care.",
        service2Title: "Long-Distance Moving",
        service2Desc: "Reliable long-distance services for moves within Ontario and across Canada. We ensure a smooth transition.",
        service3Title: "Packing & Unpacking",
        service3Desc: "Stress-free packing and unpacking services using high-quality materials to secure your belongings.",
        service4Title: "Commercial Logistics",
        service4Desc: "Efficient and professional office and commercial relocation services with minimal disruption to your business operations.",
        service5Title: "Specialty Item Moving",
        service5Desc: "Safe and secure transport for your valuable and delicate items, including pianos, art, and antiques.",
        detailsBtn: "View Details",
        faqTitle: "Frequently Asked Questions",
        faq1Q: "How far in advance should I book my move?",
        faq1A: "We recommend booking your move at least 4-6 weeks in advance, especially during peak season (May-September) or at the end of the month. This ensures better availability of your preferred date and time.",
        faq2Q: "Are you licensed and insured?",
        faq2A: "Yes, Arrow Moving Van Lines is a fully licensed and insured moving company. We carry comprehensive liability and cargo insurance to protect your belongings throughout the moving process.",
        faq3Q: "What is included in the moving quote?",
        faq3A: "Our standard quotes include the moving truck, professional movers, equipment (dollies, blankets, straps), and basic liability insurance. Packing materials, specialty item handling, and additional insurance are available for an extra charge. We provide a detailed breakdown with every quote.",
        faq4Q: "How do you protect furniture and fragile items?",
        faq4A: "Our trained movers use high-quality moving blankets, plastic wrap, and specialized packing techniques to protect all your furniture. Fragile items like glassware and electronics are carefully packed in sturdy boxes with appropriate cushioning materials.",
        guidesTitle: "Helpful Moving Guides",
        guide1Title: "Ultimate Packing Guide",
        guide2Title: "Choosing a Mover",
        guide3Title: "Moving Day Checklist",
        guide4Title: "Moving with Pets",
        guide5Title: "Understanding Quotes",
        guide1Content: "Start early and pack room by room. Use sturdy boxes and label them clearly with contents and destination room. Pack heavy items in small boxes and light items in large ones. Use packing paper or bubble wrap for fragile items and don't leave empty spaces in boxes.",
        guide2Content: "Look for licensed and insured companies. Check reviews and ask for references. Get at least three in-home estimates to compare costs and services. A reputable mover will provide a detailed inventory and a clear, written estimate with no hidden fees.",
        guide3Content: "Confirm arrival time with your movers. Protect your floors and carpets. Pack a 'first night' box with essentials like toiletries, chargers, and basic tools. Do a final walkthrough of your old home to ensure nothing is left behind.",
        guide4Content: "Keep your pet in a quiet, secure room on moving day to reduce stress. Transport them in a comfortable carrier in your own vehicle. Once at the new home, set up a familiar space for them with their bed, toys, food, and water before letting them explore.",
        guide5Content: "A binding estimate guarantees the total cost based on the inventory. A non-binding estimate is a projection, and the final cost could change. Always get your quote in writing and understand what services are included (packing, materials, insurance, etc.).",
        footerContactTitle: "Contact Us",
        footerCopyright: "© 2025 Arrow Moving Van Lines. All Rights Reserved."
    },
    fr: {
        navHome: "Accueil",
        navServices: "Services",
        navGuides: "Guides de Déménagement",
        navContact: "Contact",
        navCallNow: "Appelez maintenant",
        heroTitle: "Services de Déménagement Professionnels à Toronto & GTA",
        heroSubtitle: "Déménagement fiable, efficace et abordable pour votre maison ou votre entreprise.",
        formTitle: "Obtenez une Estimation Gratuite",
        formMovingDate: "Date du déménagement *",
        formMovingFrom: "Adresse de départ *",
        formMovingTo: "Adresse d'arrivée *",
        formServiceType: "Type de service *",
        formServiceResidential: "Déménagement Résidentiel",
        formServiceLongDistance: "Déménagement Longue Distance",
        formServicePacking: "Services d'Emballage",
        formServiceCommercial: "Déménagement Commercial/Bureau",
        formServiceSpecialty: "Déménagement d'Articles Spéciaux",
        formServiceOther: "Autre",
        formNext: "Suivant",
        formPrevious: "Précédent",
        formFullName: "Nom complet *",
        formEmail: "Email *",
        formPhone: "Numéro de téléphone *",
        formDetails: "Détails supplémentaires",
        formRequestEstimate: "Demander une estimation gratuite",
        formSubmitting: "Envoi en cours...",
        formSuccessMessage: "Merci ! Nous vous contacterons dans les 24 heures avec votre estimation gratuite.",
        formErrorMessage: "Oups ! Un problème est survenu lors de l'envoi de votre formulaire. Veuillez réessayer.",
        servicesTitle: "Nos Services de Déménagement",
        service1Title: "Déménagement Résidentiel",
        service1Desc: "Déménageurs experts pour des relocalisations de maisons et d'appartements sans faille dans le Grand Toronto.",
        service2Title: "Déménagement Longue Distance",
        service2Desc: "Services fiables de longue distance pour des déménagements en Ontario et à travers le Canada.",
        service3Title: "Emballage et Déballage",
        service3Desc: "Services d'emballage et de déballage sans stress utilisant des matériaux de haute qualité.",
        service4Title: "Logistique Commerciale",
        service4Desc: "Services de relocalisation de bureaux et commerciaux efficaces et professionnels avec une perturbation minimale.",
        service5Title: "Déménagement d'Articles Spéciaux",
        service5Desc: "Transport sûr et sécurisé pour vos articles de valeur et délicats, y compris les pianos, l'art et les antiquités.",
        detailsBtn: "Voir les détails",
        faqTitle: "Foire Aux Questions",
        faq1Q: "Combien de temps à l'avance dois-je réserver mon déménagement ?",
        faq1A: "Nous recommandons de réserver votre déménagement au moins 4 à 6 semaines à l'avance, surtout pendant la haute saison (mai-septembre) ou à la fin du mois.",
        faq2Q: "Êtes-vous licencié et assuré ?",
        faq2A: "Oui, Arrow Moving Van Lines est une entreprise de déménagement entièrement licenciée et assurée.",
        faq3Q: "Qu'est-ce qui est inclus dans le devis de déménagement ?",
        faq3A: "Nos devis standards incluent le camion de déménagement, les déménageurs professionnels, l'équipement et l'assurance responsabilité de base.",
        faq4Q: "Comment protégez-vous les meubles et les objets fragiles ?",
        faq4A: "Nos déménageurs formés utilisent des couvertures de déménagement de haute qualité, du film plastique et des techniques d'emballage spécialisées.",
        guidesTitle: "Guides de Déménagement Utiles",
        guide1Title: "Guide d'Emballage Ultime",
        guide2Title: "Choisir un Déménageur",
        guide3Title: "Liste de Contrôle du Jour du Déménagement",
        guide4Title: "Déménager avec des Animaux",
        guide5Title: "Comprendre les Devis",
        guide1Content: "Commencez tôt et emballez pièce par pièce. Utilisez des boîtes solides et étiquetez-les clairement.",
        guide2Content: "Recherchez des entreprises licenciées et assurées. Consultez les avis et demandez des références.",
        guide3Content: "Confirmez l'heure d'arrivée avec vos déménageurs. Protégez vos sols. Préparez une boîte 'première nuit'.",
        guide4Content: "Gardez votre animal dans une pièce calme le jour du déménagement. Transportez-le dans une cage confortable.",
        guide5Content: "Une estimation contractuelle garantit le coût total. Obtenez toujours votre devis par écrit.",
        footerContactTitle: "Contactez-nous",
        footerCopyright: "© 2025 Arrow Moving Van Lines. Tous droits réservés."
    },
    es: {
        navHome: "Inicio",
        navServices: "Servicios",
        navGuides: "Guías de Mudanza",
        navContact: "Contacto",
        navCallNow: "Llama ahora",
        heroTitle: "Servicios de Mudanza Profesional en Toronto y GTA",
        heroSubtitle: "Mudanza confiable, eficiente y asequible para su hogar o negocio.",
        formTitle: "Obtenga un Presupuesto Gratuito",
        formMovingDate: "Fecha de la mudanza *",
        formMovingFrom: "Dirección de recogida *",
        formMovingTo: "Dirección de entrega *",
        formServiceType: "Tipo de servicio *",
        formServiceResidential: "Mudanza Residencial",
        formServiceLongDistance: "Mudanza de Larga Distancia",
        formServicePacking: "Servicios de Empaque",
        formServiceCommercial: "Mudanza Comercial/Oficina",
        formServiceSpecialty: "Mudanza de Artículos Especiales",
        formServiceOther: "Otro",
        formNext: "Siguiente",
        formPrevious: "Anterior",
        formFullName: "Nombre completo *",
        formEmail: "Correo electrónico *",
        formPhone: "Número de teléfono *",
        formDetails: "Detalles adicionales",
        formRequestEstimate: "Solicitar presupuesto gratuito",
        formSubmitting: "Enviando...",
        formSuccessMessage: "¡Gracias! Nos pondremos en contacto con usted en 24 horas con su presupuesto gratuito.",
        formErrorMessage: "¡Ups! Hubo un problema al enviar su formulario. Por favor, inténtelo de nuevo.",
        servicesTitle: "Nuestros Servicios de Mudanza",
        service1Title: "Mudanza Residencial",
        service1Desc: "Expertos en mudanzas para traslados de casas y apartamentos sin problemas en todo el GTA.",
        service2Title: "Mudanza de Larga Distancia",
        service2Desc: "Servicios confiables de larga distancia para mudanzas dentro de Ontario y en todo Canadá.",
        service3Title: "Empaque y Desempaque",
        service3Desc: "Servicios de empaque y desempaque sin estrés utilizando materiales de alta calidad.",
        service4Title: "Logística Comercial",
        service4Desc: "Servicios de reubicación de oficinas y comerciales eficientes y profesionales con una interrupción mínima.",
        service5Title: "Mudanza de Artículos Especiales",
        service5Desc: "Transporte seguro para sus artículos valiosos y delicados, incluyendo pianos, arte y antigüedades.",
        detailsBtn: "Ver detalles",
        faqTitle: "Preguntas Frecuentes",
        faq1Q: "¿Con cuánta antelación debo reservar mi mudanza?",
        faq1A: "Recomendamos reservar su mudanza con al menos 4-6 semanas de antelación, especialmente durante la temporada alta (mayo-septiembre).",
        faq2Q: "¿Tienen licencia y seguro?",
        faq2A: "Sí, Arrow Moving Van Lines es una empresa de mudanzas con licencia y seguro completos.",
        faq3Q: "¿Qué incluye el presupuesto de la mudanza?",
        faq3A: "Nuestros presupuestos estándar incluyen el camión de mudanzas, los transportistas profesionales, el equipo y el seguro de responsabilidad civil básico.",
        faq4Q: "¿Cómo protegen los muebles y los artículos frágiles?",
        faq4A: "Nuestros transportistas capacitados utilizan mantas de mudanza de alta calidad, envoltura de plástico y técnicas de embalaje especializadas.",
        guidesTitle: "Guías de Mudanza Útiles",
        guide1Title: "Guía Definitiva de Empaque",
        guide2Title: "Elegir una Empresa de Mudanzas",
        guide3Title: "Lista de Verificación del Día de la Mudanza",
        guide4Title: "Mudanza con Mascotas",
        guide5Title: "Entender los Presupuestos",
        guide1Content: "Comience temprano y empaque habitación por habitación. Use cajas resistentes y etiquételas claramente.",
        guide2Content: "Busque empresas con licencia y seguro. Revise las reseñas y pida referencias.",
        guide3Content: "Confirme la hora de llegada con su empresa de mudanzas. Proteja sus pisos. Empaque una caja de 'primera noche'.",
        guide4Content: "Mantenga a su mascota en una habitación tranquila el día de la mudanza. Transpórtela en un transportín cómodo.",
        guide5Content: "Un presupuesto vinculante garantiza el costo total. Siempre obtenga su presupuesto por escrito.",
        footerContactTitle: "Contáctenos",
        footerCopyright: "© 2025 Arrow Moving Van Lines. Todos los derechos reservados."
    },
    hi: {
        navHome: "होम",
        navServices: "सेवाएं",
        navGuides: "मूविंग गाइड",
        navContact: "संपर्क करें",
        navCallNow: "अभी कॉल करें",
        heroTitle: "टोरंटो और जीटीए में पेशेवर मूविंग सेवाएँ",
        heroSubtitle: "आपके घर या व्यवसाय के लिए विश्वसनीय, कुशल और सस्ती मूविंग।",
        formTitle: "एक मुफ्त अनुमान प्राप्त करें",
        formMovingDate: "मूविंग की तारीख *",
        formMovingFrom: "कहाँ से उठाना है (पता) *",
        formMovingTo: "कहाँ पहुँचाना है (पता) *",
        formServiceType: "सेवा का प्रकार *",
        formServiceResidential: "आवासीय मूविंग",
        formServiceLongDistance: "लंबी दूरी की मूविंग",
        formServicePacking: "पैकिंग सेवाएं",
        formServiceCommercial: "वाणिज्यिक/कार्यालय मूविंग",
        formServiceSpecialty: "विशेष आइटम मूविंग",
        formServiceOther: "अन्य",
        formNext: "अगला",
        formPrevious: "पिछला",
        formFullName: "पूरा नाम *",
        formEmail: "ईमेल *",
        formPhone: "फ़ोन नंबर *",
        formDetails: "अतिरिक्त विवरण",
        formRequestEstimate: "मुफ्त अनुमान का अनुरोध करें",
        formSubmitting: "जमा हो रहा है...",
        formSuccessMessage: "धन्यवाद! हम आपके मुफ्त अनुमान के साथ 24 घंटे के भीतर आपसे संपर्क करेंगे।",
        formErrorMessage: "ओह! आपका फ़ॉर्म जमा करने में कोई समस्या हुई। कृपया पुनः प्रयास करें।",
        servicesTitle: "हमारी मूविंग सेवाएँ",
        service1Title: "आवासीय मूविंग",
        service1Desc: "जीटीए में घर और अपार्टमेंट के स्थानांतरण के लिए विशेषज्ञ मूवर्स। हम हर चीज का ध्यान रखते हैं।",
        service2Title: "लंबी दूरी की मूवING",
        service2Desc: "ओंटारियो और पूरे कनाडा में चाल के लिए विश्वसनीय लंबी दूरी की सेवाएं।",
        service3Title: "पैकिंग और अनपैकिंग",
        service3Desc: "उच्च गुणवत्ता वाली सामग्री का उपयोग करके तनाव-मुक्त पैकिंग और अनपैकिंग सेवाएं।",
        service4Title: "वाणिज्यिक लॉजिस्टिक्स",
        service4Desc: "न्यूनतम व्यवधान के साथ कुशल और पेशेवर कार्यालय और वाणिज्यिक स्थानांतरण सेवाएं।",
        service5Title: "विशेष आइटम मूविंग",
        service5Desc: "पियानो, कला और प्राचीन वस्तुओं सहित आपके मूल्यवान और नाजुक सामानों के लिए सुरक्षित परिवहन।",
        detailsBtn: "विवरण देखें",
        faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
        faq1Q: "मुझे अपना मूव कितने समय पहले बुक करना चाहिए?",
        faq1A: "हम कम से कम 4-6 सप्ताह पहले अपना मूव बुक करने की सलाह देते हैं, खासकर पीक सीजन (मई-सितंबर) के दौरान।",
        faq2Q: "क्या आप लाइसेंस प्राप्त और बीमाकृत हैं?",
        faq2A: "हाँ, एरो मूविंग वैन लाइन्स एक पूरी तरह से लाइसेंस प्राप्त और बीमाकृत मूविंग कंपनी है।",
        faq3Q: "मूविंग कोट में क्या शामिल है?",
        faq3A: "हमारे मानक कोट में मूविंग ट्रक, पेशेवर मूवर्स, उपकरण, और बुनियादी देयता बीमा शामिल हैं।",
        faq4Q: "आप फर्नीचर और नाजुक वस्तुओं की सुरक्षा कैसे करते हैं?",
        faq4A: "हमारे प्रशिक्षित मूवर्स आपके सभी फर्नीचर की सुरक्षा के लिए उच्च-गुणवत्ता वाले मूविंग कंबल, प्लास्टिक रैप का उपयोग करते हैं।",
        guidesTitle: "उपयोगी मूविंग गाइड",
        guide1Title: "अंतिम पैकिंग गाइड",
        guide2Title: "एक मूवर कैसे चुनें",
        guide3Title: "मूविंग डे चेकलिस्ट",
        guide4Title: "पालतू जानवरों के साथ मूविंग",
        guide5Title: "कोटेशन को समझना",
        guide1Content: "जल्दी शुरू करें और कमरे के हिसाब से पैक करें। मजबूत बक्सों का उपयोग करें और उन पर स्पष्ट रूप से लेबल लगाएं।",
        guide2Content: "लाइसेंस प्राप्त और बीमाकृत कंपनियों की तलाश करें। समीक्षाएं देखें और संदर्भ मांगें।",
        guide3Content: "अपने मूवर्स के साथ आगमन के समय की पुष्टि करें। अपने फर्श को सुरक्षित रखें। एक 'पहली रात' का बॉक्स पैक करें।",
        guide4Content: "चलते-फिरते दिन अपने पालतू जानवर को एक शांत कमरे में रखें। उन्हें एक आरामदायक वाहक में ले जाएं।",
        guide5Content: "एक बाध्यकारी अनुमान कुल लागत की गारंटी देता है। हमेशा अपना उद्धरण लिखित में प्राप्त करें।",
        footerContactTitle: "संपर्क करें",
        footerCopyright: "© 2025 एरो मूविंग वैन लाइन्स। सर्वाधिकार सुरक्षित।"
    }
};

// --- GOOGLE MAPS AUTOCOMPLETE ---
function initMap() {
    const originInput = document.getElementById('origin');
    const destinationInput = document.getElementById('destination');
    const options = {
        componentRestrictions: { country: 'ca' }, // Restrict to Canada
        fields: ['formatted_address', 'geometry', 'name'],
        strictBounds: false,
    };
    new google.maps.places.Autocomplete(originInput, options);
    new google.maps.places.Autocomplete(destinationInput, options);
}

document.addEventListener('DOMContentLoaded', () => {

    // --- LANGUAGE SWITCHER LOGIC ---
    const languageSelector = document.getElementById('languageSelector');
    const setLanguage = (lang) => {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                 element.textContent = translations[lang][key];
            }
        });
    };

    languageSelector.addEventListener('change', (event) => {
        setLanguage(event.target.value);
    });
    setLanguage('en');

    // --- MULTI-STEP FORM LOGIC ---
    const estimateForm = document.getElementById('estimateForm');
    if (estimateForm) {
        const steps = Array.from(estimateForm.querySelectorAll('.form-step'));
        const nextBtns = estimateForm.querySelectorAll('.next-btn');
        const prevBtns = estimateForm.querySelectorAll('.prev-btn');
        const formStatus = document.getElementById('formStatus');
        let currentStep = 0;

        const showStep = (stepIndex) => {
            steps.forEach((step, index) => {
                step.classList.toggle('active', index === stepIndex);
            });
        };

        const validateStep = (stepIndex) => {
            const currentStepFields = steps[stepIndex].querySelectorAll('[required]');
            let isValid = true;
            currentStepFields.forEach(field => {
                if (!field.checkValidity()) {
                    field.reportValidity();
                    isValid = false;
                }
            });
            return isValid;
        };

        nextBtns.forEach(button => {
            button.addEventListener('click', () => {
                if (validateStep(currentStep)) {
                    currentStep++;
                    if (currentStep < steps.length) {
                        showStep(currentStep);
                    }
                }
            });
        });

        prevBtns.forEach(button => {
            button.addEventListener('click', () => {
                currentStep--;
                if (currentStep >= 0) {
                    showStep(currentStep);
                }
            });
        });

        // "Other" service type logic
        const serviceTypeRadios = document.querySelectorAll('input[name="Service Type"]');
        const otherServiceInput = document.getElementById('otherService');
        serviceTypeRadios.forEach(radio => {
            radio.addEventListener('change', () => {
                if (radio.value === 'Other' && radio.checked) {
                    otherServiceInput.style.display = 'block';
                    otherServiceInput.setAttribute('required', '');
                } else {
                    otherServiceInput.style.display = 'none';
                    otherServiceInput.removeAttribute('required');
                    otherServiceInput.value = ''; // Clear value when hidden
                }
            });
        });

        // Form Submission
        estimateForm.addEventListener('submit', e => {
            e.preventDefault();
            if (!validateStep(currentStep)) return;

            const submitBtn = estimateForm.querySelector('button[type="submit"]');
            const lang = document.documentElement.lang || 'en';
            submitBtn.disabled = true;
            submitBtn.textContent = translations[lang]['formSubmitting'] || 'Submitting...';
            
            fetch(scriptURL, { method: 'POST', body: new FormData(estimateForm) })
                .then(response => response.json())
                .then(data => {
                    if (data.result === 'success') {
                        estimateForm.style.display = 'none';
                        formStatus.textContent = translations[lang]['formSuccessMessage'] || "Thank you! We'll be in touch.";
                        formStatus.className = 'success';
                        formStatus.style.display = 'block';
                    } else {
                        throw new Error(data.error || 'Unknown error');
                    }
                })
                .catch(error => {
                    console.error('Error!', error.message);
                    formStatus.textContent = translations[lang]['formErrorMessage'] || "There was a problem. Please try again.";
                    formStatus.className = 'error';
                    formStatus.style.display = 'block';
                    submitBtn.disabled = false;
                    submitBtn.textContent = translations[lang]['formRequestEstimate'] || 'Request Free Estimate';
                });
        });
    }


    // --- GUIDE MODALS LOGIC ---
    document.querySelectorAll('[data-modal-target]').forEach(card => {
        card.addEventListener('click', () => {
            const modalId = card.getAttribute('data-modal-target');
            const modal = document.getElementById(modalId);
            if (modal) modal.classList.add('active');
        });
    });

    document.querySelectorAll('.modal-close-btn').forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            if (modal) modal.classList.remove('active');
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.classList.remove('active');
        }
    });

    // --- SERVICE DETAILS TOGGLE ---
    document.querySelectorAll('.details-button').forEach(button => {
        button.addEventListener('click', () => {
            button.previousElementSibling.classList.toggle('open');
        });
    });

    // --- ORIGINAL SCRIPT FUNCTIONALITY ---
    window.toggleMobileMenu = function() {
        document.getElementById('mobileNav').classList.toggle('active');
    }

    window.toggleFaq = function(element) {
        const answer = element.nextElementSibling;
        const symbol = element.querySelector('span:last-child');
        
        if (answer.classList.contains('active')) {
            answer.classList.remove('active');
            symbol.textContent = '+';
        } else {
            document.querySelectorAll('.faq-answer.active').forEach(openAnswer => {
                openAnswer.classList.remove('active');
                openAnswer.previousElementSibling.querySelector('span:last-child').textContent = '+';
            });
            answer.classList.add('active');
            symbol.textContent = '−';
        }
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const headerOffset = 70;
            const element = document.querySelector(this.getAttribute('href'));
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });

            const mobileNav = document.getElementById('mobileNav');
            if (mobileNav.classList.contains('active')) {
                mobileNav.classList.remove('active');
            }
        });
    });

    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        header.style.boxShadow = (window.scrollY > 50) ? '0 4px 6px rgba(0,0,0,0.1)' : '0 2px 4px rgba(0,0,0,0.1)';
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `fadeInUp 0.6s ease forwards`;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.service-card, .guide-card, .faq-item').forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });

    const today = new Date().toISOString().split('T')[0];
    document.getElementById('date').setAttribute('min', today);
});