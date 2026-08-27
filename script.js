let progreso = 0;
let barra = document.getElementById("progreso");
let loader = document.getElementById("loader");

let intervalo = setInterval(() => {
  progreso += 5;
  barra.style.width = progreso + "%";

  if (progreso >= 100) {
    clearInterval(intervalo);
    loader.style.opacity = "0"; // fade out
    setTimeout(() => {
      loader.style.display = "none";
      document.body.classList.add("loaded"); // activa el contenido
    }, 1000);
  }
}, 100);


const imagenesArte = [
  { src: "https://i.imgur.com/XbMOmgN.png", tags: ["backgrounds"] },
  { src: "https://i.imgur.com/hFxHBLO.jpeg", tags: ["backgrounds"] },
  { src: "https://i.imgur.com/fPnbnZh.png", tags: ["backgrounds"] },
  { src: "https://i.imgur.com/fcwMY6e.png", tags: ["Props y assets"] },
  { src: "https://i.imgur.com/pE6BJqh.png", tags: ["backgrounds"] },
  { src: "https://i.imgur.com/rP7uwjh.png", tags: ["personajes"] },
  { src: "https://i.imgur.com/D48xntv.png", tags: ["personajes"] },
  { src: "https://i.imgur.com/cZZNskV.png", tags: ["personajes"] },
];

const imagenesIG = [
  { src: "imagenes/F1.png", tags: ["backgrounds"] },
  { src: "imagenes/F2.png", tags: ["backgrounds"] },
  { src: "imagenes/F3.png", tags: ["backgrounds"] },
  { src: "imagenes/F4.png", tags: ["backgrounds"] },
    { src: "imagenes/A1.png", tags: ["Props y assets"] },
];

const imagenesChuchunco = [
  { src: "https://i.imgur.com/2k3X3dH.jpeg", tags: ["backgrounds"] },
  { src: "https://i.imgur.com/vcZw3OF.png", tags: ["backgrounds"] },
  { src: "https://i.imgur.com/7Wnybl9.jpeg", tags: ["backgrounds"] },
  { src: "https://i.imgur.com/Bpaz0O5.jpeg", tags: ["backgrounds"] },
  { src: "https://i.imgur.com/3WMsKG2.png", tags: ["backgrounds"] },
  { src: "https://i.imgur.com/wuasMGL.png", tags: ["backgrounds"] },
  { src: "https://i.imgur.com/BnndWjG.png", tags: ["Props y assets"] },
  { src: "https://i.imgur.com/a9FNjPU.png", tags: ["Props y assets"] },
  { src: "https://i.imgur.com/Y3jvQ6m.png", tags: ["Personajes"] },
  { src: "https://i.imgur.com/wNd2rLY.png", tags: ["Personajes"] },
  { src: "https://i.imgur.com/j88Ob8h.png", tags: ["Personajes"] },
  { src: "https://i.imgur.com/wZiFZnq.png", tags: ["Personajes"] },
  { src: "https://i.imgur.com/FC7EvLY.png", tags: ["Effects"] },
];

const imagenesElacuerdo = [
 { src: "https://files.catbox.moe/18mcm1.png",tags: ["props y assets"] },
{ src: "https://files.catbox.moe/gn7fld.png",tags: ["props y assets"] },
{ src: "https://files.catbox.moe/wyy0tv.png",tags: ["props y assets"] },
 { src: "https://files.catbox.moe/zpvhe4.png",tags: ["props y assets"] },
   { src: "https://files.catbox.moe/zpvhe4.png",tags: ["props y assets"] },
];

const imagenesInvasion = [
{ src: "https://i.imgur.com/YkLZdJY.png",tags: ["Effects"] },
{ src: "https://i.imgur.com/NZj5C3x.png",tags: ["Personajes"] },
{ src: "https://i.imgur.com/8nhvTUw.png",tags: ["Personajes"] },
{ src: "https://i.imgur.com/4uuoV4N.png",tags: ["Personajes"] },
{ src: "https://i.imgur.com/6AgoqBN.png",tags: ["Personajes"] },
{ src: "https://i.imgur.com/XkIxp0m.png",tags: ["props y assets"] },
{ src: "https://i.imgur.com/uKJATKd.png",tags: ["props y assets"] },
{ src: "https://i.imgur.com/h2sPKzt.png",tags: ["props y assets"] },
 { src: "https://i.imgur.com/XHW1zbj.png",tags: ["Personajes"] },
];

const imagenesmaya = [
  { src: "https://files.catbox.moe/qyc0hm.jpg",tags: ["modelado"] },
  { src: "https://files.catbox.moe/859ir7.png",tags: ["modelado"] },
    { src: "https://files.catbox.moe/g8lunj.jpg",tags: ["modelado"] },
];

const imagenesilust = [
{ src: "https://files.catbox.moe/jl05ls.png",tags: ["ilust"] },
  { src: "https://files.catbox.moe/7kcxq4.png",tags: ["ilust"] },
  { src: "https://files.catbox.moe/761w4r.png",tags: ["ilust"] },
{ src: "https://i.imgur.com/PZkyVWi.jpeg",tags: ["ilust"] },
  { src: "https://i.imgur.com/kTcfpAz.png",tags: ["ilust"] },
  { src: "https://i.imgur.com/jmepfi4.png",tags: ["ilust"] },
  { src: "https://i.imgur.com/y2Oq9WK.png",tags: ["ilust"] },
   { src: "https://i.imgur.com/xTCk4jM.png",tags: ["ilust"] },
  { src: "https://i.imgur.com/lymbZng.png",tags: ["ilust"] },
  { src: "https://i.imgur.com/cd6tFvW.png",tags: ["ilust"] }
  ];

const videosAnimatic = [
{url: "https://www.youtube.com/embed/uK6zvGBM_qA",
  tags: ["animatic"],
  type: "video"},
{url: "https://www.youtube.com/embed/c9HyQm5clO4",
  tags: ["animatic"],
  type: "video"},
  {url: "https://www.youtube.com/embed/uMxT-Sdd5Vw",
  tags: ["animatic"],
  type: "video"}
];


const galleryArte = document.getElementById('gallery-arte');
const galleryIG = document.getElementById('gallery-IG');
const galleryChuchunco = document.getElementById('gallery-chuchunco');
const galleryElacuerdo = document.getElementById('gallery-Elacuerdo');
const galleryInvasion = document.getElementById('gallery-Invasion');
const gallerymaya = document.getElementById('gallery-maya');
const galleryilust = document.getElementById('gallery-ilust');
const galleryAnimatic = document.getElementById('gallery-animatic');
const chips = Array.from(document.querySelectorAll('#filters .chip'));
const sobreMiSection = document.getElementById("sobre-mi");
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.getElementById('close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

function renderCards(list, container){
  container.innerHTML = '';
  const title = container.previousElementSibling; 

  if(list.length === 0){
    title.style.display = 'none';
    return;
  } else {
    title.style.display = 'block';
  }

  list.forEach((item) => {
    const card = document.createElement('div');
card.className = 'card card-image';


    const thumb = document.createElement('div');
    thumb.className = 'thumb';
    const img = document.createElement('img');
    img.src = item.src;
    img.alt = 'Imagen de proyecto';
    thumb.appendChild(img);

    card.appendChild(thumb);

    card.addEventListener('click', (e) => {
      e.stopPropagation();
      rebuildVisibleImages();
      const index = visibleImages.indexOf(img);
      openModal(index >= 0 ? index : 0);
    });

    container.appendChild(card);
  });
}


function applyFilter(filter){

if (filter === "sobre-mi") {
  sobreMiSection.style.display = "flex";
} else {
  sobreMiSection.style.display = "none";
}
  chips.forEach(c => c.classList.toggle('active', c.dataset.filter === filter));


  const filteredArte = imagenesArte.filter(img =>
    filter === 'all' || img.tags.map(t => t.toLowerCase()).includes(filter)
  );
  const filteredIG = imagenesIG.filter(img =>
    filter === 'all' || img.tags.map(t => t.toLowerCase()).includes(filter)
  );
  const filteredChuchunco = imagenesChuchunco.filter(img =>
    filter === 'all' || img.tags.map(t => t.toLowerCase()).includes(filter)
  );
  const filteredElacuerdo = imagenesElacuerdo.filter(img =>
    filter === 'all' || img.tags.map(t => t.toLowerCase()).includes(filter)
  );
   const filteredInvasion = imagenesInvasion.filter(img =>
    filter === 'all' || img.tags.map(t => t.toLowerCase()).includes(filter)
  );
 const filteredmaya = imagenesmaya.filter(img =>
    filter === 'all' || img.tags.map(t => t.toLowerCase()).includes(filter)
  );
 const filteredilust = imagenesilust.filter(img =>
    filter === 'all' || img.tags.map(t => t.toLowerCase()).includes(filter)
  );
  const filteredVideos2D = videos2D.filter(v =>
    filter === 'all' || (v.tags && v.tags.map(t => t.toLowerCase()).includes(filter))
  );
  const filteredVideos3D = videos3D.filter(v =>
    filter === 'all' || (v.tags && v.tags.map(t => t.toLowerCase()).includes(filter))
  );
  const filteredVideosCUT = videosCUT.filter(v =>
    filter === 'all' || (v.tags && v.tags.map(t => t.toLowerCase()).includes(filter))
  );
  const filteredAnimatic = videosAnimatic.filter(v =>
  filter === 'all' || v.tags.map(t => t.toLowerCase()).includes(filter)
);


  renderCards(filteredArte, galleryArte);
  renderCards(filteredIG, galleryIG);
  renderCards(filteredChuchunco, galleryChuchunco);
  renderCards(filteredElacuerdo, galleryElacuerdo);
  renderCards(filteredInvasion, galleryInvasion);
  renderCards(filteredmaya, gallerymaya);
  renderCards(filteredilust, galleryilust);
  renderVideoCards(filteredVideos2D, galleryVideos2D);
  renderVideoCards(filteredVideos3D, galleryVideos3D);
  renderVideoCards(filteredVideosCUT, galleryVideosCut);
  renderAnimaticCards(filteredAnimatic, galleryAnimatic);


  rebuildVisibleImages();
}

chips.forEach(chip => {
  chip.addEventListener('click', () => {
    applyFilter(chip.dataset.filter.toLowerCase());
  });
});


let visibleImages = [];
let currentIndex = 0;

function rebuildVisibleImages(){
  visibleImages = Array.from(
    document.querySelectorAll('.card-image .thumb img')
  );
}


function openModal(index){
  if(!visibleImages.length) return;
  currentIndex = index;
  modalImg.src = visibleImages[currentIndex].src;
  modal.classList.add('show');
}
function closeModal(){ modal.classList.remove('show'); }
function showPrev(){
  if(!visibleImages.length) return;
  currentIndex = (currentIndex - 1 + visibleImages.length) % visibleImages.length;
  modalImg.src = visibleImages[currentIndex].src;
}
function showNext(){
  if(!visibleImages.length) return;
  currentIndex = (currentIndex + 1) % visibleImages.length;
  modalImg.src = visibleImages[currentIndex].src;
}


closeBtn.addEventListener('click', (e) => { e.stopPropagation(); closeModal(); });
prevBtn.addEventListener('click', (e) => { e.stopPropagation(); showPrev(); });
nextBtn.addEventListener('click', (e) => { e.stopPropagation(); showNext(); });

(function setupImageModalClose(){
  const wrapper = modal;
  wrapper.addEventListener('click', (e) => {
    if (e.target === wrapper) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (!wrapper.classList.contains('show')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
  });
})();

// init images
renderCards(imagenesArte, galleryArte);
renderCards(imagenesInvasion, galleryInvasion);
renderCards(imagenesChuchunco, galleryChuchunco);
renderCards(imagenesElacuerdo, galleryElacuerdo);
renderCards(imagenesmaya, gallerymaya);
renderCards(imagenesilust, galleryilust);
renderCards(imagenesIG, galleryIG);
rebuildVisibleImages();




const videos2D = [
  { 
    src:"/videos/anim2d_01.mp4",
    thumb:"https://i.imgur.com/Oj1NYRm.png",
    categoria:"2D",
    tags:["animacion","2d"]
  },
  { 
    src:"/videos/anim2d_02.mp4",
    thumb:"https://i.imgur.com/VW0XIQU.png",
    categoria:"2D",
    tags:["animacion","2d"]
  },
  { 
    src:"/videos/anim2d_03.mp4",
    thumb:"https://i.imgur.com/xO9SG9s.png",
    categoria:"2D",
    tags:["animacion","2d"]
  },
  { 
    src:"/videos/anim2d_04.mp4",
    thumb:"https://i.imgur.com/Nlp7SGk.png",
    categoria:"2D",
    tags:["animacion","2d"]
  }
];

const videos3D = [
  { 
    src:"/videos/anim3d_01.mp4",
    thumb:"https://i.imgur.com/fndzOJZ.png",
    categoria:"3D",
    tags:["animacion","3d"]
  },
  { 
    src:"/videos/anim3d_02.mp4",
    thumb:"https://i.imgur.com/89hT19d.png",
    categoria:"3D",
    tags:["animacion","3d"]
  },
  { 
    src:"/videos/anim3d_03.mp4",
    thumb:"https://i.imgur.com/TMgS9h5.png",
    categoria:"3D",
    tags:["animacion","3d"]
  }
];

const videosCUT = [
  { 
    src:"/videos/anim_cut_01.mp4",
    thumb:"https://i.imgur.com/CSzImKb.png",
    categoria:"CUT OUT",
    tags:["animacion","cut out"]
  },
  { 
    src:"/videos/anim_cut_02.mp4",
    thumb:"https://i.imgur.com/pe4xhdj.png",
    categoria:"CUT OUT",
    tags:["animacion","cut out"]
  },
  { 
    src:"/videos/anim_cut_03.mp4",
    thumb:"https://i.imgur.com/V5jxHEh.png",
    categoria:"CUT OUT",
    tags:["animacion","cut out"]
  }
];

const VIDEO_FLOW = [
  { name: "2D", list: videos2D },
  { name: "3D", list: videos3D },
  { name: "CUT OUT", list: videosCUT }
];

function getCurrentFlowIndex() {
  if (!currentVideoList.length) return -1;

  const currentCategory = currentVideoList[currentVideoIndex]?.categoria;

  return VIDEO_FLOW.findIndex(flow =>
    flow.name === currentCategory
  );
}


const galleryVideos2D = document.getElementById('gallery-videos-2d');
const galleryVideos3D = document.getElementById('gallery-videos-3d');
const galleryVideosCut = document.getElementById('gallery-videos-cut');
const modalVideoWrapper = document.getElementById('modal-video-wrapper');
const modalVideo = document.getElementById('modal-video');
const videoTitle = document.getElementById('video-title');
const chapterBar = document.getElementById('chapter-bar');
const loopCheck = document.getElementById('loop-check');
const closeVideoBtn = document.getElementById('close-video');

const prevVideoBtn = document.getElementById('prev-video');
const nextVideoBtn = document.getElementById('next-video');

prevVideoBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  if (currentVideoIndex > 0) {
    loadChapter(currentVideoIndex - 1);
  } else {

    const flowIndex = getCurrentFlowIndex();
const prevFlow = VIDEO_FLOW[flowIndex - 1];

if (prevFlow) {
  openVideoModal(prevFlow.list, prevFlow.list.length - 1);
} else {
  closeVideoModal();
}
    if (currentGroupIndex > 0) {
      const prevGroup = order[currentGroupIndex - 1];
      openVideoModal(prevGroup, prevGroup.length - 1);
    } else {
      closeVideoModal();
    }
  }
});

nextVideoBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  if (currentVideoIndex < currentVideoList.length - 1) {
    loadChapter(currentVideoIndex + 1);
  } else {

const flowIndex = getCurrentFlowIndex();
const nextFlow = VIDEO_FLOW[flowIndex + 1];

if (nextFlow) {
  openVideoModal(nextFlow.list, 0);
} else {
  closeVideoModal();
}
    if (nextGroup) {
      openVideoModal(nextGroup, 0);
    } else {
      closeVideoModal();
    }
  }
});




let currentVideoList = [];
let currentVideoIndex = 0;



function getVideoThumbnail(src, timeoutMs = 4000) {
  return new Promise((resolve) => {
    const video = document.createElement('video');
    video.crossOrigin = "anonymous";
    video.muted = true;
    video.playsInline = true;
    video.preload = "auto";
    video.src = src;

    let done = false;
    const to = setTimeout(() => {
      if (!done) { done = true; resolve(FALLBACK_THUMB); }
    }, timeoutMs);

    video.addEventListener('loadedmetadata', () => {
      try { video.currentTime = Math.min(0.05, video.duration || 0.05); } catch(e){}
    });

    video.addEventListener('seeked', () => {
      if (done) return;
      try {
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth || 640;
        canvas.height = video.videoHeight || 360;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataURL = canvas.toDataURL('image/png');
        done = true; clearTimeout(to); resolve(dataURL);
      } catch (err) {
        done = true; clearTimeout(to); resolve(FALLBACK_THUMB);
      }
    });

    video.addEventListener('error', () => {
      if (done) return;
      done = true; clearTimeout(to); resolve(FALLBACK_THUMB);
    });

    // fallback: si loadeddata ocurre antes de seeked
    video.addEventListener('loadeddata', () => {
      if (done) return;
      try {
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth || 640;
        canvas.height = video.videoHeight || 360;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataURL = canvas.toDataURL('image/png');
        done = true; clearTimeout(to); resolve(dataURL);
      } catch(e){}
    });
  });
}


async function renderVideoCards(list, container) {
  container.innerHTML = '';
  const title = container.previousElementSibling; 

  if(list.length === 0){
    title.style.display = 'none';
    return;
  } else {
    title.style.display = 'block';
  }

  for (let i = 0; i < list.length; i++) {
    const item = list[i];

    const card = document.createElement('div');
    card.className = 'card';

    const thumbDiv = document.createElement('div');
    thumbDiv.className = 'thumb';

    const img = document.createElement('img');

    // ESTA ES LA CLAVE
    img.src = item.thumb || FALLBACK_THUMB;

    img.alt = item.categoria + ' miniatura';

    thumbDiv.appendChild(img);
    card.appendChild(thumbDiv);

    card.addEventListener('click', (e) => {
      e.stopPropagation();
      openVideoModal(list, i);
    });

    container.appendChild(card);
  }
}
function renderAnimaticCards(list, container) {
  container.innerHTML = '';
  const title = container.previousElementSibling;

  if(list.length === 0){
    title.style.display = 'none';
    return;
  } else {
    title.style.display = 'block';
  }

  list.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';

    const iframe = document.createElement('iframe');
    iframe.src = item.url;
    iframe.allowFullscreen = true;
    iframe.width = "100%";
    iframe.height = "100%";

    card.appendChild(iframe);
    container.appendChild(card);
  });
}


function buildChapterBar() {
  chapterBar.innerHTML = '';
  currentVideoList.forEach((_, i) => {
    const block = document.createElement('div');
    block.dataset.index = i;
    if (i < currentVideoIndex) block.classList.add('played');
    if (i === currentVideoIndex) block.classList.add('active');

    block.addEventListener('click', (e) => {
      e.stopPropagation(); 
      loadChapter(i);
    });

    chapterBar.appendChild(block);
  });


  chapterBar.addEventListener('click', (e) => e.stopPropagation());
}

function loadChapter(index) {
  currentVideoIndex = index;
  const item = currentVideoList[currentVideoIndex];
  if (!item) return;

  modalVideo.style.opacity = 0;

  modalVideo.pause();
  modalVideo.removeAttribute('src');
  modalVideo.load();

  modalVideo.onloadeddata = null;

  modalVideo.src = item.src;
  videoTitle.textContent = `${item.categoria} • Video ${index + 1}`;
  buildChapterBar();

  modalVideo.onloadeddata = () => {
    modalVideo.style.opacity = 1; 
    modalVideo.play().catch(()=>{});
  };

  preloadVideo(index + 1);
  preloadVideo(index - 1);
}


function openVideoModal(list, startIndex = 0) {
  currentVideoList = list;
  currentVideoIndex = startIndex;
  modalVideoWrapper.classList.add('show');
  buildChapterBar();
  loadChapter(currentVideoIndex);
}

function closeVideoModal() {
  modalVideo.pause();
  modalVideo.removeAttribute('src');
  modalVideo.load();
  modalVideoWrapper.classList.remove('show');
}


(function setupVideoModalClose(){
  const wrapper = modalVideoWrapper;

  
  if (wrapper.dataset.setup === 'true') return;
  wrapper.dataset.setup = 'true';

  wrapper.addEventListener('click', (e) => {
    if (e.target === wrapper) closeVideoModal();
  });

document.addEventListener('keydown', (e) => {

  if (!wrapper.classList.contains('show')) return;

  if (e.key === 'Escape') {
    closeVideoModal();
  }

  if (e.key === 'ArrowLeft') {
    prevVideoBtn.click();
  }

  if (e.key === 'ArrowRight') {
    nextVideoBtn.click();
  }

});

  const content = wrapper.querySelector('.modal-content');
  if (content) content.addEventListener('click', (e) => e.stopPropagation());
})();

closeVideoBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  closeVideoModal();
});

modalVideo.addEventListener('ended', () => {

  if (loopCheck && loopCheck.checked) {
    modalVideo.currentTime = 0;
    modalVideo.play();
    return;
  }

  if (currentVideoIndex < currentVideoList.length - 1) {
    loadChapter(currentVideoIndex + 1);
    return;
  }

  const flowIndex = getCurrentFlowIndex();

  if (flowIndex === -1) {
    closeVideoModal();
    return;
  }

  const nextFlow = VIDEO_FLOW[flowIndex + 1];

  if (!nextFlow || nextFlow.list.length === 0) {
    closeVideoModal();
    return;
  }

  openVideoModal(nextFlow.list, 0);
});

renderVideoCards(videos2D, galleryVideos2D);
renderVideoCards(videos3D, galleryVideos3D);
renderVideoCards(videosCUT, galleryVideosCut);
renderAnimaticCards(videosAnimatic, galleryAnimatic);

window.__portafolio = {
  applyFilter,
  openModal,
  closeModal,
  showNext,
  showPrev,
  rebuildVisibleImages,
  openVideoModal
};


applyFilter("all");