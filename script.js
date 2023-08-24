document.addEventListener("DOMContentLoaded", () => {
    const titleInput = document.getElementById("title");
    const addTitleBtn = document.getElementById("addTitleBtn");
    const contentInput = document.getElementById("content");
    const addTextBtn = document.getElementById("addTextBtn");
    const imageInput = document.getElementById("imageInput");
    const addImageBtn = document.getElementById("addImageBtn");
    const videoInput = document.getElementById("videoInput");
    const addVideoBtn = document.getElementById("addVideoBtn");
    const previewContent = document.getElementById("previewContent");

    addTitleBtn.addEventListener("click", () => {
        const title = titleInput.value;
        const titleElement = document.createElement("h2"); // Use an appropriate heading element
        titleElement.textContent = title; // Set the text content of the title element
        previewContent.appendChild(titleElement);
      });
  
    addTextBtn.addEventListener("click", () => {
      const text = contentInput.value;
      const textElement = document.createElement("p");
      textElement.textContent = text;
      previewContent.appendChild(textElement);
    });
  
    addImageBtn.addEventListener("click", () => {
        const imageUrl = URL.createObjectURL(imageInput.files[0]);
        const imageElement = document.createElement("div");
        imageElement.className = "content-item";
        const img = document.createElement("img");
        img.src = imageUrl;
        img.className = "content-image";
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-button";
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
          imageElement.remove();
        });
    
        imageElement.appendChild(img);
        imageElement.appendChild(deleteBtn);
        previewContent.appendChild(imageElement);
      });
    
    addVideoBtn.addEventListener("click", () => {
        const videoUrl = URL.createObjectURL(videoInput.files[0]);
        const videoElement = document.createElement("div");
        videoElement.className = "content-item";
        const vid = document.createElement("video");
        vid.src = videoUrl;
        vid.className = "content-video";
        vid.controls = true; // Add controls for video playback
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-button";
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
          videoElement.remove();
        });
    
        videoElement.appendChild(vid);
        videoElement.appendChild(deleteBtn);
        previewContent.appendChild(videoElement);
      });


    const startAgainBtn = document.getElementById("startAgainBtn");
      
        startAgainBtn.addEventListener("click", () => {
          titleInput.value = ""; // Clear title input
          contentInput.value = ""; // Clear text input
          imageInput.value = ""; // Clear image input
          videoInput.value = ""; // Clear video input
          previewContent.innerHTML = ""; // Clear preview content
    });
   
      
  });
  
