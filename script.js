const departments = [
  ["General Medicine","Stethoscope","Primary care, fever, diabetes, hypertension and complete medical evaluation.",6,"https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=70"],
  ["General Surgery","Scissors","Safe surgical care, laparoscopic procedures and post-operative support.",4,"https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600&q=70"],
  ["Orthopedics","Bone","Bone, joint, fracture, arthritis and sports injury care.",5,"https://images.unsplash.com/photo-1584473457409-ae5c91d7d8f7?auto=format&fit=crop&w=600&q=70"],
  ["Cardiology","HeartPulse","Heart checkups, ECG, echo, hypertension and cardiac consultations.",3,"https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&w=600&q=70"],
  ["Neurology","Brain","Stroke, headache, epilepsy, nerve and movement disorder care.",3,"https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=600&q=70"],
  ["Neurosurgery","Activity","Brain and spine surgical consultation with critical care support.",2,"https://images.unsplash.com/photo-1588776814546-1ffcf47267a9?auto=format&fit=crop&w=600&q=70"],
  ["Gastroenterology","Soup","Digestive, liver, acidity, endoscopy and abdominal care.",3,"https://images.unsplash.com/photo-1588776813677-77aaf5595b83?auto=format&fit=crop&w=600&q=70"],
  ["Nephrology","Droplets","Kidney, dialysis guidance, hypertension and renal care.",2,"https://images.unsplash.com/photo-1588776814291-3933f1e36072?auto=format&fit=crop&w=600&q=70"],
  ["Pediatrics","Baby","Child health, vaccination, growth and pediatric emergency care.",4,"https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=600&q=70"],
  ["Gynecology","Heart","Womenâ€™s health, pregnancy care, fertility guidance and delivery support.",4,"https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=70"],
  ["Dermatology","Sparkles","Skin, hair, allergy, acne and cosmetic dermatology services.",2,"https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=70"],
  ["ENT","Ear","Ear, nose, throat, sinus, hearing and voice care.",2,"https://images.unsplash.com/photo-1588776813677-77aaf5595b83?auto=format&fit=crop&w=600&q=70"],
  ["Urology","ShieldPlus","Urinary, prostate, stone and male health consultations.",2,"https://images.unsplash.com/photo-1588776814546-1ffcf47267a9?auto=format&fit=crop&w=600&q=70"],
  ["Pulmonology","Wind","Asthma, COPD, breathing disorders and lung care.",2,"https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=600&q=70"],
  ["Dentistry","BadgePlus","Dental checkups, cleaning, root canal and oral care.",2,"https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=600&q=70"],
  ["Radiology","ScanLine","X-ray, ultrasound, CT coordination and imaging reports.",3,"https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=70"],
  ["Physiotherapy","Dumbbell","Rehabilitation, pain management and post-surgery recovery.",3,"https://images.unsplash.com/photo-1571019613914-85f342c6a11e?auto=format&fit=crop&w=600&q=70"],
  ["Emergency Medicine","Siren","24/7 emergency stabilization and critical care triage.",5,"https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=70"]
];

const doctors = [
  ["Dr. Amit Sharma","General Medicine","12 years","MBBS, MD Medicine","Rs. 600","Mon-Sat","09:00 AM - 01:00 PM","4.8","https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=500&q=75"],
  ["Dr. Priya Verma","Cardiology","10 years","MBBS, MD, DM Cardiology","Rs. 900","Mon-Fri","11:00 AM - 03:00 PM","4.9","https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&q=75"],
  ["Dr. Rajesh Mehta","Orthopedics","15 years","MBBS, MS Orthopedics","Rs. 750","Mon-Sat","10:00 AM - 02:00 PM","4.7","https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=75"],
  ["Dr. Neha Singh","Gynecology","9 years","MBBS, MS Obs & Gyn","Rs. 700","Mon-Sat","12:00 PM - 04:00 PM","4.8","https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=500&q=75"],
  ["Dr. Arjun Nair","Neurology","11 years","MBBS, MD, DM Neurology","Rs. 950","Tue-Sat","04:00 PM - 08:00 PM","4.8","https://images.unsplash.com/photo-1587560699334-bea93391dcef?auto=format&fit=crop&w=500&q=75"],
  ["Dr. Kavita Rao","Pediatrics","8 years","MBBS, MD Pediatrics","Rs. 550","Mon-Sat","09:30 AM - 01:30 PM","4.9","https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=500&q=75"],
  ["Dr. Sameer Khan","Gastroenterology","13 years","MBBS, MD, DM Gastro","Rs. 850","Mon-Fri","02:00 PM - 06:00 PM","4.7","https://images.unsplash.com/photo-1637059824899-a441006a6875?auto=format&fit=crop&w=500&q=75"],
  ["Dr. Rohan Patel","Nephrology","10 years","MBBS, MD, DM Nephrology","Rs. 850","Tue-Sun","10:00 AM - 01:00 PM","4.8","https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=500&q=75"]
];

const services = [
  ["24/7 Emergency Care","Siren"],["ICU","HeartPulse"],["Operation Theatre","Scissors"],["Ambulance","Ambulance"],
  ["Pharmacy","Pill"],["Lab Tests","FlaskConical"],["Radiology","ScanLine"],["Health Checkups","ClipboardCheck"],
  ["Video Consultation","Video"],["Online Reports","FileCheck"],["Cashless Facility","CreditCard"],["Patient Support","Headphones"]
];

const careTour = [
  ["#home","Care Beyond Boundaries","A premium connected-care front door for emergency, OPD, diagnostics, pharmacy and virtual consultation.","Velora Care Desk","Clinical access, service coordination and support in one place"],
  ["#appointment","Appointment Desk","Patient details, doctor selection, visit type, report upload and booking payment are kept clear and efficient.","Booking Coordination","Doctor slots, payment status and requests stay aligned"],
  ["#departments","Clinical Departments","Eighteen specialties are organized for quick scanning, clear decisions and direct booking.","Specialty Network","Patients move to the right clinical team without friction"],
  ["#doctors","Doctor Discovery","Doctor cards show fee, experience, schedule, rating and consultation action without visual clutter.","Doctor Finder","Specialists are ready for hospital visits or video consults"],
  ["#video","Virtual OPD","Patients select a doctor, pay the consultation fee and receive a meeting link from their portal.","Virtual Consultation","Remote care is connected to records and follow-up"],
  ["#ambulance","Emergency Dispatch","Pickup, drop, emergency type, condition and timing are captured for response coordination.","Emergency Desk","Ambulance requests route to the rapid response desk"],
  ["#lab","Diagnostics","Tests, prescription upload, collection address and online payment are grouped into a clean booking flow.","Diagnostics Flow","Lab bookings connect to patient reports"],
  ["#pharmacy","Pharmacy Orders","Prescription upload, medicine quantity, delivery address, payment and tracking stay practical.","Medicine Delivery","Orders move from verification to delivery tracking"],
  ["#packages","Health Packages","Preventive checkups are presented with straightforward pricing and booking actions.","Wellness Plans","Health checkups connect lab, consult and reports"],
  ["#contact","Contact & Support","Support, emergency phone, email, map placeholder and enquiry form remain easy to reach.","Support Desk","Patients can reach Velora from every care path"],
  ["#terms","Privacy Foundation","Production deployment requires secure authentication, encrypted data, audit logs and compliance.","Secure Foundation","Privacy and payment safety are part of real operations"]
];

const tourCardMap = [0, 0, 2, 2, 2, 0, 3, 4, 3, 5, 5];

const iconTag = name => `<i data-lucide="${name.replace(/[A-Z]/g, (m, i) => i ? '-' + m.toLowerCase() : m.toLowerCase())}"></i>`;

function fillSelects() {
  const depSelect = document.querySelector("#departmentSelect");
  const docSelect = document.querySelector("#doctorSelect");
  const videoDoctor = document.querySelector("#videoDoctor");
  departments.forEach(([name]) => depSelect?.append(new Option(name, name)));
  doctors.forEach(([name, spec]) => {
    docSelect?.append(new Option(`${name} - ${spec}`, name));
    videoDoctor?.append(new Option(`${name} - ${spec}`, name));
  });
}

function renderDepartments() {
  const grid = document.querySelector("#departmentGrid");
  if (!grid) return;
  grid.innerHTML = departments.map(([name, icon, desc, count, img]) => `
    <article class="department-card reveal">
      <img loading="lazy" src="${img}" alt="${name} department at Velora Hospitals">
      <div>
        ${iconTag(icon)}
        <h3>${name}</h3>
        <p>${desc}</p>
        <div class="meta"><span>${count} doctors</span><span>Bhopal OPD</span></div>
        <a class="card-link" href="#appointment">Book Appointment</a>
      </div>
    </article>
  `).join("");
}

function renderDoctors() {
  const grid = document.querySelector("#doctorGrid");
  if (!grid) return;
  grid.innerHTML = doctors.map(([name, spec, exp, qual, fee, days, slot, rating, img]) => `
    <article class="doctor-card reveal">
      <img loading="lazy" src="${img}" alt="${name}">
      <h3>${name}</h3>
      <p><strong>${spec}</strong><br>${exp} experience<br>${qual}</p>
      <p class="fee">${fee}</p>
      <div class="meta"><span>${days}</span><span>${slot}</span></div>
      <div class="meta"><span class="rating">Star ${rating}</span><span>Verified</span></div>
      <a class="btn secondary" href="#appointment">Book Appointment</a>
    </article>
  `).join("");
}

function renderServices() {
  const grid = document.querySelector("#serviceGrid");
  if (!grid) return;
  grid.innerHTML = services.map(([name, icon]) => `<article class="reveal">${iconTag(icon)}<span>${name}</span></article>`).join("");
}

function wireForms() {
  const payBtn = document.querySelector("#payBtn");
  payBtn?.addEventListener("click", () => {
    payBtn.innerHTML = `${iconTag("CheckCircle")} Paid - Rs. 199`;
    payBtn.classList.remove("secondary");
    payBtn.classList.add("primary");
    if (window.lucide) lucide.createIcons();
  });
  document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", event => {
      event.preventDefault();
      const msg = form.querySelector(".success-msg");
      msg?.classList.add("show");
      form.scrollIntoView({behavior:"smooth", block:"center"});
    });
  });
}

function wirePortal() {
  document.querySelectorAll(".portal aside button").forEach(button => {
    button.addEventListener("click", () => {
      const portal = button.closest(".portal");
      portal.querySelectorAll("aside button").forEach(item => item.classList.remove("active"));
      portal.querySelectorAll(".portal-panel").forEach(panel => panel.classList.remove("active"));
      button.classList.add("active");
      portal.querySelector(`#${button.dataset.panel}`)?.classList.add("active");
    });
  });
}

function wireHeader() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  toggle?.addEventListener("click", () => nav?.classList.toggle("open"));
  nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));
}

function wireCareOverview() {
  const title = document.querySelector("#tourTitle");
  const text = document.querySelector("#tourText");
  const floatingTitle = document.querySelector("#floatingTitle");
  const floatingText = document.querySelector("#floatingText");
  const meter = document.querySelector("#tourMeter");
  const overviewCards = [...document.querySelectorAll(".overview-card")];
  if (!title || !text || !meter) return;

  let index = 0;
  const updateTour = () => {
    const [selector, heading, description, floatHeading, floatDescription] = careTour[index];
    title.textContent = heading;
    text.textContent = description;
    floatingTitle.textContent = floatHeading;
    floatingText.textContent = floatDescription;
    meter.style.width = `${((index + 1) / careTour.length) * 100}%`;
    document.querySelectorAll(".tour-highlight").forEach(item => item.classList.remove("tour-highlight"));
    const section = document.querySelector(selector);
    section?.classList.add("tour-highlight");
    overviewCards.forEach((card, cardIndex) => card.classList.toggle("active", cardIndex === tourCardMap[index]));
    window.veloraSceneState = { index, heading };
  };

  updateTour();
  setTimeout(() => {
    setInterval(() => {
      index = (index + 1) % careTour.length;
      updateTour();
    }, 5200);
  }, 2400);
}

async function initHospitalScene() {
  const canvas = document.querySelector("#hospitalScene");
  if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const THREE = await import("https://unpkg.com/three@0.165.0/build/three.module.js");
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(7.2, 5.4, 9.2);
  camera.lookAt(0, 1, 0);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const group = new THREE.Group();
  scene.add(group);

  const ambient = new THREE.AmbientLight(0xffffff, 1.45);
  scene.add(ambient);
  const key = new THREE.DirectionalLight(0xffffff, 2.1);
  key.position.set(5, 8, 6);
  key.castShadow = true;
  scene.add(key);
  const cherryLight = new THREE.PointLight(0xb01835, 3.2, 18);
  cherryLight.position.set(-4, 3, 3);
  scene.add(cherryLight);
  const maroonLight = new THREE.PointLight(0x7b1028, 2.8, 18);
  maroonLight.position.set(4, 2.5, -2);
  scene.add(maroonLight);

  const baseMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.48, metalness: 0.08 });
  const blueMat = new THREE.MeshStandardMaterial({ color: 0xb01835, roughness: 0.35, metalness: 0.12 });
  const navyMat = new THREE.MeshStandardMaterial({ color: 0x5b0f1f, roughness: 0.42, metalness: 0.08 });
  const greenMat = new THREE.MeshStandardMaterial({ color: 0x8f1730, emissive: 0x5b0f1f, emissiveIntensity: 0.18 });
  const glassMat = new THREE.MeshStandardMaterial({ color: 0xffe9ee, transparent: true, opacity: 0.58, roughness: 0.18, metalness: 0.18 });

  const addBox = (w, h, d, x, y, z, mat) => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
    return mesh;
  };

  addBox(5.2, 2.8, 3.4, 0, 1.4, 0, baseMat);
  addBox(2.3, 4.8, 2.7, -1.7, 2.4, -0.15, baseMat);
  addBox(2.2, 3.8, 2.6, 1.75, 1.9, -0.08, baseMat);
  addBox(1.25, 1.35, 3.75, 0, 0.7, 0.1, navyMat);
  addBox(4.7, 0.26, 3.85, 0, 2.95, 0.03, blueMat);

  for (let x = -2.2; x <= 2.21; x += 1.1) {
    for (let y = 1.2; y <= 3.55; y += 0.85) {
      addBox(0.34, 0.32, 0.08, x, y, 1.73, glassMat);
    }
  }

  const crossBar = addBox(1.35, 0.32, 0.1, 0, 4.15, 1.78, greenMat);
  const crossStem = addBox(0.32, 1.35, 0.1, 0, 4.15, 1.79, greenMat);
  crossBar.name = "cross";
  crossStem.name = "cross";

  const floor = new THREE.Mesh(
    new THREE.CylinderGeometry(5.8, 6.8, 0.18, 72),
    new THREE.MeshStandardMaterial({ color: 0xfff1f3, roughness: 0.7 })
  );
  floor.position.y = -0.12;
  floor.receiveShadow = true;
  group.add(floor);

  const nodeGroup = new THREE.Group();
  group.add(nodeGroup);
  const nodeMat = new THREE.MeshStandardMaterial({ color: 0xb01835, emissive: 0xb01835, emissiveIntensity: 0.45 });
  const nodeGeo = new THREE.SphereGeometry(0.13, 24, 24);
  const nodes = [];
  for (let i = 0; i < 14; i++) {
    const angle = (i / 14) * Math.PI * 2;
    const node = new THREE.Mesh(nodeGeo, nodeMat);
    node.position.set(Math.cos(angle) * 4.8, 1.2 + Math.sin(i * 1.7) * 0.6, Math.sin(angle) * 4.2);
    node.castShadow = true;
    nodeGroup.add(node);
    nodes.push(node);
  }

  const particlePositions = new Float32Array(240 * 3);
  for (let i = 0; i < 240; i++) {
    particlePositions[i * 3] = (Math.random() - 0.5) * 12;
    particlePositions[i * 3 + 1] = Math.random() * 6.8;
    particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }
  const particleGeo = new THREE.BufferGeometry();
  particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
  const particles = new THREE.Points(
    particleGeo,
    new THREE.PointsMaterial({ color: 0xb01835, size: 0.045, transparent: true, opacity: 0.42 })
  );
  scene.add(particles);

  const rings = [];
  for (let i = 0; i < 3; i++) {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(3.5 + i * 0.55, 0.012, 8, 140),
      new THREE.MeshBasicMaterial({ color: i === 1 ? 0x8f1730 : 0xb01835, transparent: true, opacity: 0.34 })
    );
    ring.rotation.x = Math.PI / 2.22;
    ring.position.y = 1 + i * 0.55;
    group.add(ring);
    rings.push(ring);
  }

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    renderer.setSize(rect.width, rect.height, false);
    camera.aspect = rect.width / Math.max(rect.height, 1);
    camera.updateProjectionMatrix();
  };
  resize();
  window.addEventListener("resize", resize);

  const clock = new THREE.Clock();
  const animate = () => {
    const t = clock.getElapsedTime();
    const tourIndex = window.veloraSceneState?.index || 0;
    group.rotation.y = Math.sin(t * 0.3) * 0.18 + tourIndex * 0.015;
    group.rotation.x = Math.sin(t * 0.22) * 0.045;
    nodeGroup.rotation.y = t * 0.55;
    particles.rotation.y = -t * 0.055;
    cherryLight.intensity = 2.4 + Math.sin(t * 2.2) * 0.8;
    maroonLight.intensity = 2.2 + Math.cos(t * 1.8) * 0.8;
    nodes.forEach((node, i) => {
      node.scale.setScalar(1 + Math.sin(t * 3 + i) * 0.35);
    });
    rings.forEach((ring, i) => {
      ring.rotation.z = t * (0.24 + i * 0.08);
      ring.scale.setScalar(1 + Math.sin(t * 1.4 + i) * 0.025);
    });
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };
  animate();
}

function revealOnScroll() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:.12});
  document.querySelectorAll(".reveal").forEach(item => observer.observe(item));
}

document.addEventListener("DOMContentLoaded", () => {
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  window.scrollTo(0, 0);
  renderDepartments();
  renderDoctors();
  renderServices();
  fillSelects();
  wireForms();
  wirePortal();
  wireHeader();
  wireCareOverview();
  revealOnScroll();
  initHospitalScene().catch(error => console.warn("3D scene unavailable", error));
  if (window.lucide) lucide.createIcons();
});

