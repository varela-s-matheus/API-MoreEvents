import app from "./src/app.js";

const port = "https://api-more-events.vercel.app";

app.listen(port, () => {
    console.log(`Servidor escutando em ${port}`);
})