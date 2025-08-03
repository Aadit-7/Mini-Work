const endpoints = {
  cat: "https://api.thecatapi.com/v1/images/search",
  dog: "https://random.dog/woof.json",
};

const apiKey = "YOUR_CAT_API_KEY"; // replace with your free key
const gallery = document.getElementById("gallery");
const copiedMsg = document.getElementById("copied-msg");

document
  .querySelectorAll(".btn")
  .forEach((btn) =>
    btn.addEventListener("click", () => fetchAnimal(btn.dataset.type))
  );

async function fetchAnimal(type) {
  gallery.innerHTML = "<p style='color:white;'>Loading...</p>";

  try {
    let resp, imageUrl;

    if (type === "cat") {
      resp = await fetch(endpoints.cat, {
        headers: { "x-api-key": apiKey },
      });
      const data = await resp.json();
      imageUrl = data[0].url;
    } else {
      resp = await fetch(endpoints.dog);
      const data = await resp.json();
      imageUrl = data.url;
      // skip videos
      if (/\.(mp4|webm|gif)$/i.test(imageUrl)) return fetchAnimal(type);
    }

    gallery.innerHTML = "";
    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = type;
    img.addEventListener("click", () => copyToClipboard(imageUrl));
    gallery.prepend(img);
  } catch (err) {
    console.error(err);
    gallery.innerHTML = `<p style="color:red;">Error loading ${type} image. Try again!</p>`;
  }
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    copiedMsg.style.display = "block";
    setTimeout(() => (copiedMsg.style.display = "none"), 1500);
  });
}
