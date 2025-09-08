// --- Helpers state ---
const $ = (id) => document.getElementById(id);
const state = {
  equipe: [],
  engins: [],
  livraisons: [],
  travaux: [],
  photos: [],
};

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

function addEquipe(
  data = { id: uid(), societe: "", effectif: "", heures: "", corps: "" }
) {
  state.equipe.push(data);
  renderList(
    "equipe_list",
    state.equipe,
    (item, idx) => `
<div class="card">
<div class="row" style="justify-content:space-between">
<div class="title">Équipe ${idx + 1}</div>
<button class="btn danger" onclick="removeItem(state.equipe,'${
      item.id
    }')">🗑️ Supprimer</button>
</div>
<div class="grid cols-2">
<div><label>Société</label><input data-k="societe" data-id="${
      item.id
    }" value="${escapeHtml(
      item.societe
    )}" oninput="bindChange(event,'equipe')"></div>
<div><label>Corps d'état</label><input data-k="corps" data-id="${
      item.id
    }" value="${escapeHtml(
      item.corps
    )}" oninput="bindChange(event,'equipe')"></div>
<div><label>Effectif</label><input type="number" inputmode="numeric" data-k="effectif" data-id="${
      item.id
    }" value="${item.effectif}" oninput="bindChange(event,'equipe')"></div>
<div><label>Heures (ex: 8h)</label><input data-k="heures" data-id="${
      item.id
    }" value="${escapeHtml(
      item.heures
    )}" oninput="bindChange(event,'equipe')"></div>
</div>
</div>`
  );
}
function addEngin(
  data = {
    id: uid(),
    type: "",
    immat: "",
    heures: "",
    operateur: "",
    etat: "OK",
    carburant: "",
  }
) {
  state.engins.push(data);
  renderList(
    "engins_list",
    state.engins,
    (item) => `
<div class="card">
<div class="row" style="justify-content:space-between">
<div class="title">${item.type || "Engin"}</div>
<button class="btn danger" onclick="removeItem(state.engins,'${
      item.id
    }')">🗑️</button>
</div>
<div class="grid cols-3">
<div><label>Type</label><input data-k="type" data-id="${
      item.id
    }" value="${escapeHtml(
      item.type
    )}" oninput="bindChange(event,'engins')"></div>
<div><label>Immatriculation</label><input data-k="immat" data-id="${
      item.id
    }" value="${escapeHtml(
      item.immat
    )}" oninput="bindChange(event,'engins')"></div>
<div><label>Heures compteur</label><input data-k="heures" data-id="${
      item.id
    }" value="${escapeHtml(
      item.heures
    )}" oninput="bindChange(event,'engins')"></div>
<div><label>Opérateur</label><input data-k="operateur" data-id="${
      item.id
    }" value="${escapeHtml(
      item.operateur
    )}" oninput="bindChange(event,'engins')"></div>
<div><label>État</label><input data-k="etat" data-id="${
      item.id
    }" value="${escapeHtml(
      item.etat
    )}" oninput="bindChange(event,'engins')"></div>
<div><label>Carburant (L)</label><input type="number" inputmode="numeric" data-k="carburant" data-id="${
      item.id
    }" value="${item.carburant}" oninput="bindChange(event,'engins')"></div>
</div>
</div>`
  );
}
function addLivraison(
  data = {
    id: uid(),
    fournisseur: "",
    bon: "",
    materiaux: "",
    quantite: "",
    obs: "",
  }
) {
  state.livraisons.push(data);
  renderList(
    "livraisons_list",
    state.livraisons,
    (item) => `
<div class="card">
<div class="row" style="justify-content:space-between"><div class="title">Livraison</div>
<button class="btn danger" onclick="removeItem(state.livraisons,'${
      item.id
    }')">🗑️</button>
</div>
<div class="grid cols-3">
<div><label>Fournisseur</label><input data-k="fournisseur" data-id="${
      item.id
    }" value="${escapeHtml(
      item.fournisseur
    )}" oninput="bindChange(event,'livraisons')"></div>
<div><label>Bon de livraison</label><input data-k="bon" data-id="${
      item.id
    }" value="${escapeHtml(
      item.bon
    )}" oninput="bindChange(event,'livraisons')"></div>
<div><label>Matériaux</label><input data-k="materiaux" data-id="${
      item.id
    }" value="${escapeHtml(
      item.materiaux
    )}" oninput="bindChange(event,'livraisons')"></div>
<div><label>Quantité</label><input data-k="quantite" data-id="${
      item.id
    }" value="${escapeHtml(
      item.quantite
    )}" oninput="bindChange(event,'livraisons')"></div>
<div style="grid-column:1/-1"><label>Observations</label><input data-k="obs" data-id="${
      item.id
    }" value="${escapeHtml(
      item.obs
    )}" oninput="bindChange(event,'livraisons')"></div>
</div>
</div>`
  );
}
function addTravaux(
  data = {
    id: uid(),
    zone: "",
    description: "",
    metrage: "",
    unite: "m²",
    avancement: "",
  }
) {
  state.travaux.push(data);
  renderList(
    "travaux_list",
    state.travaux,
    (item) => `
<div class="card">
<div class="row" style="justify-content:space-between"><div class="title">Zone ${
      escapeHtml(item.zone) || ""
    }</div>
<button class="btn danger" onclick="removeItem(state.travaux,'${
      item.id
    }')">🗑️</button>
</div>
<div class="grid cols-3">
<div><label>Zone</label><input data-k="zone" data-id="${
      item.id
    }" value="${escapeHtml(
      item.zone
    )}" oninput="bindChange(event,'travaux')"></div>
<div style="grid-column:1/-1"><label>Description</label><textarea data-k="description" data-id="${
      item.id
    }" oninput="bindChange(event,'travaux')">${escapeHtml(
      item.description
    )}</textarea></div>
<div><label>Métré</label><input data-k="metrage" data-id="${
      item.id
    }" value="${escapeHtml(
      item.metrage
    )}" oninput="bindChange(event,'travaux')"></div>
<div><label>Unité</label>
<select data-k="unite" data-id="${
      item.id
    }" onchange="bindChange(event,'travaux')">
${["m", "m²", "m³", "u", "kg", "h"]
  .map((u) => `<option ${item.unite === u ? "selected" : ""}>${u}</option>`)
  .join("")}
</select>
</div>
<div><label>% Avancement</label><input type="number" inputmode="numeric" min="0" max="100" data-k="avancement" data-id="${
      item.id
    }" value="${item.avancement}" oninput="bindChange(event,'travaux')"></div>
</div>
</div>`
  );
}
function renderList(containerId, arr, tpl) {
  const el = $(containerId);
  el.innerHTML = arr.length
    ? arr.map((item, i) => tpl(item, i)).join("")
    : `<div class="empty">Aucun élément pour l'instant.</div>`;
}

function removeItem(arr, id) {
  const idx = arr.findIndex((x) => x.id === id);
  if (idx > -1) {
    arr.splice(idx, 1);
  }
  rerenderAll();
}

function bindChange(e, key) {
  const id = e.target.getAttribute("data-id");
  const k = e.target.getAttribute("data-k");
  const arr = state[key];
  const item = arr.find((x) => x.id === id);
  if (!item) return;
  item[k] = e.target.value;
}
// --- Photos handling ---
$("photos").addEventListener("change", async (e) => {
  const files = [...e.target.files];
  for (const f of files) {
    const dataUrl = await fileToDataURL(f);
    state.photos.push({ id: uid(), name: f.name, dataUrl });
  }
  renderPhotos();
  e.target.value = ""; // reset
});

function renderPhotos() {
  const c = $("photos_preview");
  c.innerHTML = state.photos
    .map(
      (
        p
      ) => `<div style="display:flex;flex-direction:column;gap:6px;align-items:center">
<img class="preview-img" src="${p.dataUrl}" alt="photo"/>
<button class="btn danger" onclick="removeItem(state.photos,'${p.id}')">Supprimer</button>
</div>`
    )
    .join("");
}

function fileToDataURL(file) {
  return new Promise((res) => {
    const r = new FileReader();
    r.onload = () => res(r.result);
    r.readAsDataURL(file);
  });
}
// --- Signatures ---
setupSignature("sig_cdc");
setupSignature("sig_moe");
function setupSignature(id) {
  const canvas = $(id);
  const ctx = canvas.getContext("2d");
  let drawing = false,
    last = null;
  function setSize() {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    ctx.strokeStyle = "#e5e7eb";
    ctx.lineWidth = 2;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
  }
  setSize();
  addEventListener("resize", setSize);
  const pos = (e) => {
    const rect = canvas.getBoundingClientRect();
    const t = e.touches ? e.touches[0] : e;
    return { x: t.clientX - rect.left, y: t.clientY - rect.top };
  };
  const start = (e) => {
    drawing = true;
    last = pos(e);
  };
  const move = (e) => {
    if (!drawing) return;
    const p = pos(e);
    ctx.beginPath();
    ctx.moveTo(last.x, last.y);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    last = p;
  };
  const end = () => {
    drawing = false;
  };
  canvas.addEventListener("mousedown", start);
  canvas.addEventListener("mousemove", move);
  addEventListener("mouseup", end);
  canvas.addEventListener("touchstart", start, { passive: true });
  canvas.addEventListener("touchmove", move, { passive: true });
  addEventListener("touchend", end);
}
function clearSign() {
  ["sig_cdc", "sig_moe"].forEach((id) => {
    const c = $(id);
    c.getContext("2d").clearRect(0, 0, c.width, c.height);
  });
}
// --- Draft persistence (local only) ---
function collect() {
  return {
    entete: {
      chantier_nom: $("chantier_nom").value,
      chantier_ref: $("chantier_ref").value,
      date: $("date").value,
      adresse: $("adresse").value,
      moa: $("moa").value,
      cdt: $("cdt").value,
      cdc: $("cdc").value,
      meteo: $("meteo").value,
      temp: $("temp").value,
    },
    equipe: state.equipe,
    engins: state.engins,
    livraisons: state.livraisons,
    travaux: state.travaux,
    observations: $("observations").value,
    securite: {
      briefing: $("briefing").value,
      ppsps: $("ppsps").value,
      incidents: $("incidents").value,
      nc: $("nc").value,
      ac: $("ac").value,
    },
    photos: state.photos,
    signatures: {
      cdc: $("sig_cdc").toDataURL("image/png"),
      moe: $("sig_moe").toDataURL("image/png"),
    },
  };
}
function fill(data) {
  if (!data) return;
  const E = data.entete || {};
  $("chantier_nom").value = E.chantier_nom || "";
  $("chantier_ref").value = E.chantier_ref || "";
  $("date").value = E.date || "";
  $("adresse").value = E.adresse || "";
  $("moa").value = E.moa || "";
  $("cdt").value = E.cdt || "";
  $("cdc").value = E.cdc || "";
  $("meteo").value = E.meteo || "Ensoleillé";
  $("temp").value = E.temp || "";
  state.equipe = data.equipe || [];
  state.engins = data.engins || [];
  state.livraisons = data.livraisons || [];
  state.travaux = data.travaux || [];
  $("observations").value = data.observations || "";
  const S = data.securite || {};
  $("briefing").value = S.briefing || "Oui";
  $("ppsps").value = S.ppsps || "Oui";
  $("incidents").value = S.incidents || "";
  $("nc").value = S.nc || "";
  $("ac").value = S.ac || "";
  state.photos = data.photos || [];
  renderPhotos();
  rerenderAll();
}
function rerenderAll() {
  renderList(
    "equipe_list",
    state.equipe,
    (item, idx) => `
<div class="card">
<div class="row" style="justify-content:space-between">
<div class="title">Équipe ${idx + 1}</div>
<button class="btn danger" onclick="removeItem(state.equipe,'${
      item.id
    }')">🗑️ Supprimer</button>
</div>
<div class="grid cols-2">
<div><label>Société</label><input data-k="societe" data-id="${
      item.id
    }" value="${escapeHtml(
      item.societe
    )}" oninput="bindChange(event,'equipe')"></div>
<div><label>Corps d'état</label><input data-k="corps" data-id="${
      item.id
    }" value="${escapeHtml(
      item.corps
    )}" oninput="bindChange(event,'equipe')"></div>
<div><label>Effectif</label><input type="number" inputmode="numeric" data-k="effectif" data-id="${
      item.id
    }" value="${item.effectif}" oninput="bindChange(event,'equipe')"></div>
<div><label>Heures (ex: 8h)</label><input data-k="heures" data-id="${
      item.id
    }" value="${escapeHtml(
      item.heures
    )}" oninput="bindChange(event,'equipe')"></div>
</div>
</div>`
  );
  renderList(
    "engins_list",
    state.engins,
    (item) => `
<div class="card">
<div class="row" style="justify-content:space-between">
<div class="title">${item.type || "Engin"}</div>
<button class="btn danger" onclick="removeItem(state.engins,'${
      item.id
    }')">🗑️</button>
</div>
<div class="grid cols-3">
<div><label>Type</label><input data-k="type" data-id="${
      item.id
    }" value="${escapeHtml(
      item.type
    )}" oninput="bindChange(event,'engins')"></div>
<div><label>Immatriculation</label><input data-k="immat" data-id="${
      item.id
    }" value="${escapeHtml(
      item.immat
    )}" oninput="bindChange(event,'engins')"></div>
<div><label>Heures compteur</label><input data-k="heures" data-id="${
      item.id
    }" value="${escapeHtml(
      item.heures
    )}" oninput="bindChange(event,'engins')"></div>
<div><label>Opérateur</label><input data-k="operateur" data-id="${
      item.id
    }" value="${escapeHtml(
      item.operateur
    )}" oninput="bindChange(event,'engins')"></div>
<div><label>État</label><input data-k="etat" data-id="${
      item.id
    }" value="${escapeHtml(
      item.etat
    )}" oninput="bindChange(event,'engins')"></div>
<div><label>Carburant (L)</label><input type="number" inputmode="numeric" data-k="carburant" data-id="${
      item.id
    }" value="${item.carburant}" oninput="bindChange(event,'engins')"></div>
</div>
</div>`
  );
  renderList(
    "livraisons_list",
    state.livraisons,
    (item) => `
<div class="card">
<div class="row" style="justify-content:space-between"><div class="title">Livraison</div>
<button class="btn danger" onclick="removeItem(state.livraisons,'${
      item.id
    }')">🗑️</button>
</div>
<div class="grid cols-3">
<div><label>Fournisseur</label><input data-k="fournisseur" data-id="${
      item.id
    }" value="${escapeHtml(
      item.fournisseur
    )}" oninput="bindChange(event,'livraisons')"></div>
<div><label>Bon de livraison</label><input data-k="bon" data-id="${
      item.id
    }" value="${escapeHtml(
      item.bon
    )}" oninput="bindChange(event,'livraisons')"></div>
<div><label>Matériaux</label><input data-k="materiaux" data-id="${
      item.id
    }" value="${escapeHtml(
      item.materiaux
    )}" oninput="bindChange(event,'livraisons')"></div>
<div><label>Quantité</label><input data-k="quantite" data-id="${
      item.id
    }" value="${escapeHtml(
      item.quantite
    )}" oninput="bindChange(event,'livraisons')"></div>
<div style="grid-column:1/-1"><label>Observations</label><input data-k="obs" data-id="${
      item.id
    }" value="${escapeHtml(
      item.obs
    )}" oninput="bindChange(event,'livraisons')"></div>
</div>
</div>`
  );
  renderList(
    "travaux_list",
    state.travaux,
    (item) => `
<div class="card">
<div class="row" style="justify-content:space-between"><div class="title">Zone ${
      escapeHtml(item.zone) || ""
    }</div>
<button class="btn danger" onclick="removeItem(state.travaux,'${
      item.id
    }')">🗑️</button>
</div>
<div class="grid cols-3">
<div><label>Zone</label><input data-k="zone" data-id="${
      item.id
    }" value="${escapeHtml(
      item.zone
    )}" oninput="bindChange(event,'travaux')"></div>
<div style="grid-column:1/-1"><label>Description</label><textarea data-k="description" data-id="${
      item.id
    }" oninput="bindChange(event,'travaux')">${escapeHtml(
      item.description
    )}</textarea></div>
<div><label>Métré</label><input data-k="metrage" data-id="${
      item.id
    }" value="${escapeHtml(
      item.metrage
    )}" oninput="bindChange(event,'travaux')"></div>
<div><label>Unité</label>
<select data-k="unite" data-id="${
      item.id
    }" onchange="bindChange(event,'travaux')">
${["m", "m²", "m³", "u", "kg", "h"]
  .map((u) => `<option ${item.unite === u ? "selected" : ""}>${u}</option>`)
  .join("")}
</select>
</div>
<div><label>% Avancement</label><input type="number" inputmode="numeric" min="0" max="100" data-k="avancement" data-id="${
      item.id
    }" value="${item.avancement}" oninput="bindChange(event,'travaux')"></div>
</div>
</div>`
  );
  renderPhotos();
}
function saveDraft() {
  const data = collect();
  localStorage.setItem("rapport_brouillon", JSON.stringify(data));
  alert("Brouillon enregistré sur l'appareil ✅");
}
function loadDraft() {
  const raw = localStorage.getItem("rapport_brouillon");
  if (!raw) return alert("Aucun brouillon trouvé");
  try {
    fill(JSON.parse(raw));
    alert("Brouillon chargé ✅");
  } catch {
    alert("Impossible de charger le brouillon");
  }
}
function newReport() {
  if (confirm("Effacer le formulaire pour un nouveau rapport ?"))
    location.reload();
}
// --- PDF Generation ---
async function exportPDF(options = { share: false }) {
  const { jsPDF } = window.jspdf;
  const data = collect();
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const W = doc.internal.pageSize.getWidth();
  const margin = 32;
  let y = margin;
  const addTitle = (t) => {
    doc.setFontSize(14);
    doc.setTextColor(20);
    doc.text(t, margin, y);
    y += 10;
  };
  const addKVP = (pairs) => {
    doc.setFontSize(10);
    doc.setTextColor(60);
    pairs.forEach(([k, v], i) => {
      doc.text(`${k}: ${v || ""}`, margin, y + 14 * i);
    });
    y += 14 * pairs.length + 6;
  };
}
// Header
doc.setFont("helvetica", "bold");
doc.setFontSize(18);
doc.text("Rapport de Chantier", margin, y);
y += 20;
doc.setFont("helvetica", "normal");
addKVP([
  ["Chantier", data.entete.chantier_nom],
  ["Référence", data.entete.chantier_ref],
  ["Date", data.entete.date],
  ["Adresse", data.entete.adresse],
  ["MOA", data.entete.moa],
  ["CDT", data.entete.cdt],
  ["Chef de chantier", data.entete.cdc],
  [
    "Météo",
    `${data.entete.meteo} ${
      data.entete.temp ? "(" + data.entete.temp + "°C)" : ""
    }`,
  ],
]);
// Tables
if (data.equipe.length) {
  addTitle("Équipe & Effectifs");
  doc.autoTable({
    startY: y,
    head: [["Société", "Corps d'état", "Effectif", "Heures"]],
    body: data.equipe.map((e) => [e.societe, e.corps, e.effectif, e.heures]),
    styles: { fontSize: 9 },
    theme: "grid",
    margin: { left: margin, right: margin },
  });
  y = doc.lastAutoTable.finalY + 10;
}

if (data.engins.length) {
  addTitle("Matériel / Engins");
  doc.autoTable({
    startY: y,
    head: [["Type", "Immat", "Heures", "Opérateur", "État", "Carburant"]],
    body: data.engins.map((e) => [
      e.type,
      e.immat,
      e.heures,
      e.operateur,
      e.etat,
      e.carburant,
    ]),
    styles: { fontSize: 9 },
    theme: "grid",
    margin: { left: margin, right: margin },
  });
  y = doc.lastAutoTable.finalY + 10;
}

if (data.livraisons.length) {
  addTitle("Livraisons");
  doc.autoTable({
    startY: y,
    head: [["Fournisseur", "BL", "Matériaux", "Qté", "Obs"]],
    body: data.livraisons.map((l) => [
      l.fournisseur,
      l.bon,
      l.materiaux,
      l.quantite,
      l.obs,
    ]),
    styles: { fontSize: 9 },
    theme: "grid",
    margin: { left: margin, right: margin },
  });
  y = doc.lastAutoTable.finalY + 10;
}
if (data.travaux.length) {
  addTitle("Travaux réalisés");
  doc.autoTable({
    startY: y,
    head: [["Zone", "Description", "Métré", "Unité", "%"]],
    body: data.travaux.map((t) => [
      t.zone,
      t.description,
      t.metrage,
      t.unite,
      t.avancement,
    ]),
    styles: { fontSize: 9 },
    theme: "grid",
    margin: { left: margin, right: margin },
    columnStyles: { 1: { cellWidth: 260 } },
  });
  y = doc.lastAutoTable.finalY + 10;
}

if (data.observations) {
  addTitle("Observations / Décisions");
  doc.setFontSize(10);
  doc.setTextColor(40);
  const split = doc.splitTextToSize(data.observations, W - margin * 2);
  doc.text(split, margin, y);
  y += split.length * 12 + 10;
}
// Sécurité
addTitle("Sécurité & Qualité");
addKVP([
  ["Briefing sécurité", data.securite.briefing],
  ["PPSPS", data.securite.ppsps],
  ["Incidents", data.securite.incidents],
  ["Non‑conformités", data.securite.nc],
  ["Actions correctives", data.securite.ac],
]);

// Photos (scaled)
for (let i = 0; i < data.photos.length; i++) {
  const img = data.photos[i];
  const imgW = 160,
    imgH = 120; // thumbnails
  if (y + imgH + 40 > doc.internal.pageSize.getHeight()) {
    doc.addPage();
    y = margin;
  }
  if (i % 3 === 0) {
    addTitle(i === 0 ? "Photos" : "Photos (suite)");
  }
  const x = margin + (i % 3) * (imgW + 10);
  doc.addImage(img.dataUrl, "JPEG", x, y, imgW, imgH);
  if (i % 3 === 2) y += imgH + 10;
}
y += 20;
// Signatures
addTitle("Signatures");
const sigW = 200,
  sigH = 80;
const c1 = $("sig_cdc").toDataURL("image/png");
const c2 = $("sig_moe").toDataURL("image/png");
doc.setFontSize(10);
doc.setTextColor(60);
doc.text("Chef de chantier", margin, y - 6);
if (c1) doc.addImage(c1, "PNG", margin, y, sigW, sigH);
doc.text("MOE/MOA", margin + sigW + 60, y - 6);
if (c2) doc.addImage(c2, "PNG", margin + sigW + 60, y, sigW, sigH);

const blob = doc.output("blob");
const fileName = `Rapport_${(
  data.entete.chantier_ref ||
  data.entete.chantier_nom ||
  "chantier"
).replace(/\s+/g, "_")}_${data.entete.date || ""}.pdf`;

if (options.share && navigator.share) {
  const file = new File([blob], fileName, { type: "application/pdf" });
  try {
    await navigator.share({ title: "Rapport de chantier", files: [file] });
  } catch (err) {
    console.warn(err);
  }
  return;
}
// Download
const url = URL.createObjectURL(blob);
const a = document.createElement("a");
a.href = url;
a.download = fileName;
a.click();
setTimeout(() => URL.revokeObjectURL(url), 1000);

async function sharePDF() {
  if (navigator.share) {
    await exportPDF({ share: true });
  } else {
    // Fallback: open email with mailto (sans pièce jointe)
    const data = collect();
    const subject = encodeURIComponent(
      `Rapport ${data.entete.chantier_nom} - ${data.entete.date}`
    );
    const body = encodeURIComponent(
      "Bonjour,\n\nVeuillez trouver ci-joint le rapport de chantier. (Si la pièce jointe ne s'ajoute pas automatiquement, exportez le PDF et joignez-le manuellement)\n\nCordialement"
    );
    location.href = `mailto:?subject=${subject}&body=${body}`;
  }
}
function escapeHtml(s = "") {
  return s.replace(
    /[&<>"']/g,
    (m) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[
        m
      ])
  );
}

// init
addEquipe();
addEngin();
addLivraison();
addTravaux();
// Pre-fill date today
(function () {
  const d = new Date();
  const iso = d.toISOString().slice(0, 10);
  $("date").value = iso;
})();
