alert("JavaScript connected successfully!");

console.log("script.js connected");

const formButton = document.querySelector(".send");

formButton.addEventListener("click", async () => {
  const name = document.querySelector("input[type='text']").value;
  const email = document.querySelector("input[type='email']").value;
  const message = document.querySelector("textarea").value;

  if (!name || !email || !message) {
    alert("Please fill all fields");
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    const data = await response.json();
    alert(data.message);

  } catch (error) {
    alert("Error connecting to server");
    console.error(error);
  }
});