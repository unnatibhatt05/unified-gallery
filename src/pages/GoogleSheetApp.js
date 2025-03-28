const sendMessageToSheet = async (message) => {
  try {
    const response = await fetch(
      "https://docs.google.com/spreadsheets/d/1zEXNNTIJCJ_tI4jnGs4_fokE-sUU8NEnikrkyDXFNAo/edit?gid=0#gid=0",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message })
      }
    );

    const result = await response.json();
    console.log("Response:", result);
  } catch (error) {
    console.error("Error sending message:", error);
  }
};

export default sendMessageToSheet;
