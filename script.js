function fetchCodeFromBackend() {
  return fetch('https://your-backend-url.onrender.com/get-code')
    .then(res => res.json())
    .then(data => data.code)
    .catch(() => {
      alert("⚠️ Error connecting to backend!");
      return null;
    });
}

async function checkCode() {
  const entered = document.getElementById("codeInput").value;
  const actual = await fetchCodeFromBackend();
  if (entered === actual) {
    document.getElementById("protectedContent").classList.remove("hidden");
  } else {
    alert("❌ Wrong code! Try again.");
  }
}
