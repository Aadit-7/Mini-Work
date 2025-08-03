const gallery = document.getElementById("gallery");
const fileInput = document.getElementById("fileInput");

// List all available assets
const images = [
  "1.jpg",
  "2.webp",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
];

const videos = [
  "a.mp4",
  "b.mp4",
  "c.mp4",
  "d.mp4",
  "e.mp4",
  "f.mp4",
  "g.mp4",
  "h.mp4",
  "i.mp4",
  "j.mp4",
  "k.mp4",
  "l.mp4",
  "m.mp4",
  "n.mp4",
  "o.mp4",
  "p.mp4",
  "r.mp4",
];

// Combine and shuffle
const media = [
  ...images.map((f) => ({ type: "image", src: `assests/${f}` })),
  // ...videos.map((f) => ({ type: "video", src: `assests/${f}` })),
];

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function loadMedia() {
  const shuffled = shuffle(media);

  shuffled.forEach((item) => {
    if (item.type === "image") {
      const img = document.createElement("img");
      img.src = item.src;
      gallery.appendChild(img);
    } else if (item.type === "video") {
      const vid = document.createElement("video");
      vid.src = item.src;
      vid.autoplay = true;
      vid.muted = true;
      vid.loop = true;
      vid.playsInline = true;
      gallery.appendChild(vid);
    }
  });
}

loadMedia();

// User uploads
fileInput.addEventListener("change", (e) => {
  const files = Array.from(e.target.files);

  files.forEach((file) => {
    const url = URL.createObjectURL(file);
    let element;

    if (file.type.startsWith("image/")) {
      element = document.createElement("img");
      element.src = url;
    } else if (file.type.startsWith("video/")) {
      element = document.createElement("video");
      element.src = url;
      element.autoplay = true;
      element.muted = true;
      element.loop = true;
      element.playsInline = true;
    }

    if (element) {
      gallery.appendChild(element);
    }
  });

  fileInput.value = "";
});
