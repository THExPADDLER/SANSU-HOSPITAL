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
  {name:"Dr. Amit Sharma", spec:"General Medicine", exp:"12 years", qual:"MBBS, MD Medicine", fee:"Rs. 600", rating:"4.8", img:"https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=500&q=75", opd:{days:"Mon-Sat", slots:["09:00 AM - 10:30 AM","10:30 AM - 12:00 PM","12:00 PM - 01:00 PM"]}, video:{days:"Tue, Thu", slots:["06:00 PM - 06:30 PM","06:30 PM - 07:00 PM"]}},
  {name:"Dr. Priya Verma", spec:"Cardiology", exp:"10 years", qual:"MBBS, MD, DM Cardiology", fee:"Rs. 900", rating:"4.9", img:"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&q=75", opd:{days:"Mon, Wed, Fri", slots:["11:00 AM - 12:00 PM","12:00 PM - 01:00 PM","02:00 PM - 03:00 PM"]}, video:{days:"Sat", slots:["05:00 PM - 05:30 PM","05:30 PM - 06:00 PM"]}},
  {name:"Dr. Rajesh Mehta", spec:"Orthopedics", exp:"15 years", qual:"MBBS, MS Orthopedics", fee:"Rs. 750", rating:"4.7", img:"https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=75", opd:{days:"Mon-Sat", slots:["10:00 AM - 11:30 AM","11:30 AM - 01:00 PM","01:00 PM - 02:00 PM"]}, video:{days:"Not available", slots:[]}},
  {name:"Dr. Neha Singh", spec:"Gynecology", exp:"9 years", qual:"MBBS, MS Obs & Gyn", fee:"Rs. 700", rating:"4.8", img:"https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=500&q=75", opd:{days:"Mon-Sat", slots:["12:00 PM - 01:00 PM","01:00 PM - 02:30 PM","02:30 PM - 04:00 PM"]}, video:{days:"Mon, Wed", slots:["07:00 PM - 07:30 PM"]}},
  {name:"Dr. Arjun Nair", spec:"Neurology", exp:"11 years", qual:"MBBS, MD, DM Neurology", fee:"Rs. 950", rating:"4.8", img:"https://images.unsplash.com/photo-1587560699334-bea93391dcef?auto=format&fit=crop&w=500&q=75", opd:{days:"Tue-Sat", slots:["04:00 PM - 05:00 PM","05:00 PM - 06:30 PM","06:30 PM - 08:00 PM"]}, video:{days:"Fri", slots:["08:15 PM - 08:45 PM"]}},
  {name:"Dr. Kavita Rao", spec:"Pediatrics", exp:"8 years", qual:"MBBS, MD Pediatrics", fee:"Rs. 550", rating:"4.9", img:"https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=500&q=75", opd:{days:"Mon-Sat", slots:["09:30 AM - 11:00 AM","11:00 AM - 12:30 PM","12:30 PM - 01:30 PM"]}, video:{days:"Tue, Thu, Sat", slots:["04:30 PM - 05:00 PM","05:00 PM - 05:30 PM"]}},
  {name:"Dr. Sameer Khan", spec:"Gastroenterology", exp:"13 years", qual:"MBBS, MD, DM Gastro", fee:"Rs. 850", rating:"4.7", img:"https://images.unsplash.com/photo-1637059824899-a441006a6875?auto=format&fit=crop&w=500&q=75", opd:{days:"Mon-Fri", slots:["02:00 PM - 03:30 PM","03:30 PM - 05:00 PM","05:00 PM - 06:00 PM"]}, video:{days:"Not available", slots:[]}},
  {name:"Dr. Rohan Patel", spec:"Nephrology", exp:"10 years", qual:"MBBS, MD, DM Nephrology", fee:"Rs. 850", rating:"4.8", img:"https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=500&q=75", opd:{days:"Tue-Sun", slots:["10:00 AM - 11:00 AM","11:00 AM - 12:00 PM","12:00 PM - 01:00 PM"]}, video:{days:"Wed, Sun", slots:["06:00 PM - 06:30 PM"]}}
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
const appointmentStoreKey = "veloraAppointments";
const defaultAppointments = [
  {id:"VEL-1001", patient:"Riya Sharma", phone:"+91 XXXXX XXXXX", email:"riya@example.com", department:"Cardiology", doctor:"Dr. Priya Verma", type:"Video Consultation", date:"Tomorrow", slot:"11:30 AM", symptoms:"Follow-up consultation", status:"Confirmed", payment:"Paid"},
  {id:"VEL-1002", patient:"Aarav Mishra", phone:"+91 XXXXX XXXXX", email:"aarav@example.com", department:"General Medicine", doctor:"Dr. Amit Sharma", type:"Hospital Visit", date:"Friday", slot:"09:00 AM", symptoms:"Fever and weakness", status:"Pending", payment:"Pending"}
];

const iconTag = name => `<i data-lucide="${name.replace(/[A-Z]/g, (m, i) => i ? '-' + m.toLowerCase() : m.toLowerCase())}"></i>`;

function loadAppointments() {
  try {
    const stored = JSON.parse(localStorage.getItem(appointmentStoreKey) || "null");
    return Array.isArray(stored) && stored.length ? stored : defaultAppointments;
  } catch {
    return defaultAppointments;
  }
}

function saveAppointments(appointments) {
  localStorage.setItem(appointmentStoreKey, JSON.stringify(appointments));
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  })[char]);
}

function addAppointment(appointment) {
  const appointments = loadAppointments();
  appointments.unshift(appointment);
  saveAppointments(appointments);
  renderDashboardAppointments();
}

function badgeClass(value) {
  if (value === "Confirmed") return "green";
  if (value === "Paid") return "blue";
  if (value === "Failed" || value === "Cancelled") return "amber";
  return "amber";
}

function tableButtonForAppointment(appointment) {
  if (appointment.type === "Video Consultation" && appointment.payment === "Paid") return "Join video";
  if (appointment.payment !== "Paid") return "Pay fee";
  return "View invoice";
}

function renderDashboardAppointments() {
  const appointments = loadAppointments();
  const patientBody = document.querySelector("#patientAppointmentsBody");
  const doctorBody = document.querySelector("#doctorAppointmentsBody");
  const adminBody = document.querySelector("#adminAppointmentsBody");

  if (patientBody) {
    patientBody.innerHTML = appointments.map(appointment => `
      <tr><td>${escapeHtml(appointment.doctor)}</td><td>${escapeHtml(appointment.date)}, ${escapeHtml(appointment.slot)}</td><td><span class="badge ${badgeClass(appointment.status)}">${escapeHtml(appointment.status)}</span></td><td><span class="badge ${badgeClass(appointment.payment)}">${escapeHtml(appointment.payment)}</span></td><td><button>${escapeHtml(tableButtonForAppointment(appointment))}</button></td></tr>
    `).join("");
  }

  if (doctorBody) {
    doctorBody.innerHTML = appointments.slice(0, 8).map(appointment => `
      <tr><td>${escapeHtml(appointment.patient)}</td><td>${escapeHtml(appointment.slot)}</td><td>${escapeHtml(appointment.type)}</td><td><span class="badge ${badgeClass(appointment.status)}">${escapeHtml(appointment.status)}</span></td><td><button>${appointment.status === "Pending" ? "Accept" : "Open case"}</button></td></tr>
    `).join("");
  }

  if (adminBody) {
    adminBody.innerHTML = appointments.map(appointment => `
      <tr><td>${escapeHtml(appointment.id)}</td><td>${escapeHtml(appointment.patient)}</td><td>${escapeHtml(appointment.department)}</td><td>${escapeHtml(appointment.doctor)}</td><td>${escapeHtml(appointment.type)}</td><td><span class="badge ${badgeClass(appointment.status)}">${escapeHtml(appointment.status)}</span></td><td><span class="badge ${badgeClass(appointment.payment)}">${escapeHtml(appointment.payment)}</span></td></tr>
    `).join("");
  }
}

function fillSelects() {
  const depSelect = document.querySelector("#departmentSelect");
  const docSelect = document.querySelector("#doctorSelect");
  const videoDoctor = document.querySelector("#videoDoctor");
  departments.forEach(([name]) => depSelect?.append(new Option(name, name)));
  populateDoctorSelect();
  doctors.filter(doctor => doctor.video.slots.length).forEach(doctor => {
    videoDoctor?.append(new Option(`${doctor.name} - ${doctor.spec} (${doctor.video.days})`, doctor.name));
  });
  depSelect?.addEventListener("change", populateDoctorSelect);
  wireAppointmentAvailability();
}

function getDoctorsForSelectedDepartment() {
  const selectedDepartment = document.querySelector("#departmentSelect")?.value;
  const filteredDoctors = doctors.filter(doctor => doctor.spec === selectedDepartment);
  return filteredDoctors.length ? filteredDoctors : [];
}

function populateDoctorSelect() {
  const docSelect = document.querySelector("#doctorSelect");
  if (!docSelect) return;
  const filteredDoctors = getDoctorsForSelectedDepartment();
  docSelect.innerHTML = "";
  if (!filteredDoctors.length) {
    docSelect.append(new Option("No doctor configured for this department", ""));
    docSelect.disabled = true;
  } else {
    docSelect.disabled = false;
    filteredDoctors.forEach(doctor => docSelect.append(new Option(`${doctor.name} - ${doctor.spec}`, doctor.name)));
  }
  docSelect.dispatchEvent(new Event("change", { bubbles: true }));
}

function getSelectedDoctor() {
  const selectedName = document.querySelector("#doctorSelect")?.value;
  return doctors.find(doctor => doctor.name === selectedName) || null;
}

function setOptions(select, options, emptyLabel) {
  if (!select) return;
  select.innerHTML = "";
  if (!options.length) {
    select.append(new Option(emptyLabel, ""));
    select.disabled = true;
    return;
  }
  select.disabled = false;
  options.forEach(option => select.append(new Option(option, option)));
}

function wireAppointmentAvailability() {
  const docSelect = document.querySelector("#doctorSelect");
  const typeSelect = document.querySelector('select[name="type"]');
  const slotSelect = document.querySelector('select[name="slot"]');
  const availabilityNote = document.querySelector("#availabilityNote");
  const submitButton = document.querySelector('#appointmentForm button[type="submit"]');
  if (!docSelect || !typeSelect || !slotSelect) return;

  const updateSlots = () => {
    const doctor = getSelectedDoctor();
    if (!doctor) {
      setOptions(slotSelect, [], "No doctor configured for this department");
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.classList.add("disabled");
      }
      if (availabilityNote) {
        availabilityNote.textContent = "No doctor is currently configured for the selected department. Please choose another department.";
        availabilityNote.classList.add("warning");
      }
      return;
    }
    const mode = typeSelect.value === "Video Consultation" ? "video" : "opd";
    const schedule = doctor[mode];
    setOptions(slotSelect, schedule.slots, "No slots available for this doctor");
    if (submitButton) {
      submitButton.disabled = !schedule.slots.length;
      submitButton.classList.toggle("disabled", !schedule.slots.length);
    }
    if (availabilityNote) {
      const label = mode === "video" ? "Video consultation" : "Hospital visit";
      availabilityNote.textContent = schedule.slots.length
        ? `${label}: ${schedule.days} | ${schedule.slots.join(", ")}`
        : `${label}: not available for ${doctor.name}. Please choose hospital visit or another doctor.`;
      availabilityNote.classList.toggle("warning", !schedule.slots.length);
    }
  };

  docSelect.addEventListener("change", updateSlots);
  typeSelect.addEventListener("change", updateSlots);
  updateSlots();
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
  grid.innerHTML = doctors.map(doctor => `
    <article class="doctor-card reveal">
      <img loading="lazy" src="${doctor.img}" alt="${doctor.name}">
      <h3>${doctor.name}</h3>
      <p><strong>${doctor.spec}</strong><br>${doctor.exp} experience<br>${doctor.qual}</p>
      <p class="fee">${doctor.fee}</p>
      <div class="availability-grid">
        <span><strong>Hospital visit</strong>${doctor.opd.days}<small>${doctor.opd.slots.join(" | ")}</small></span>
        <span class="${doctor.video.slots.length ? "" : "muted"}"><strong>Video consult</strong>${doctor.video.days}<small>${doctor.video.slots.length ? doctor.video.slots.join(" | ") : "Doctor has not enabled video consultation"}</small></span>
      </div>
      <div class="meta"><span class="rating">Star ${doctor.rating}</span><span>${doctor.video.slots.length ? "Video available" : "OPD only"}</span></div>
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
      if (form.id === "appointmentForm") {
        const data = new FormData(form);
        const payment = payBtn?.textContent.includes("Paid") ? "Paid" : "Pending";
        addAppointment({
          id: `VEL-${Date.now().toString().slice(-6)}`,
          patient: data.get("name") || "New Patient",
          phone: data.get("phone") || "",
          email: data.get("email") || "",
          department: data.get("department") || "",
          doctor: data.get("doctor") || "",
          type: data.get("type") || "Hospital Visit",
          date: data.get("date") || "Preferred date pending",
          slot: data.get("slot") || "Slot pending",
          symptoms: data.get("symptoms") || "",
          status: "Pending",
          payment
        });
      }
      const msg = form.querySelector(".success-msg");
      msg?.classList.add("show");
      form.scrollIntoView({behavior:"smooth", block:"center"});
    });
  });
}

function wireScheduleEditor() {
  document.querySelectorAll("[data-scroll-target]").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelector(button.dataset.scrollTarget)?.scrollIntoView({behavior:"smooth", block:"start"});
    });
  });

  const form = document.querySelector("#doctorScheduleForm");
  const publish = document.querySelector("#publishSchedule");
  if (!form) return;

  const showScheduleSaved = text => {
    const msg = form.querySelector(".success-msg");
    if (!msg) return;
    msg.textContent = text;
    msg.classList.add("show");
  };

  form.addEventListener("submit", event => {
    event.preventDefault();
    showScheduleSaved("Availability saved. Patients will only see your published OPD and video slots.");
  });

  publish?.addEventListener("click", () => {
    showScheduleSaved("Slots published. The booking form will now use these availability windows.");
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
  renderDashboardAppointments();
  wireForms();
  wireScheduleEditor();
  wirePortal();
  wireHeader();
  wireCareOverview();
  revealOnScroll();
  initHospitalScene().catch(error => console.warn("3D scene unavailable", error));
  if (window.lucide) lucide.createIcons();
});

