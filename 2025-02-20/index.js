import http from "http";
import fs from "node:fs";

// Tikslas:
// Sukurkite „Node.js“ serverį be, kuris sugeneruotų HTML puslapį iš JSON failo ir atvaizduotų jį
// /topics maršrute kaip <ul> sąrašą.

// Reikalavimai:
// Naudoti tik http modulį.
// Perskaityti JSON objektų masyvą su title, description ir url laukais iš JSON failo.
// Sukurti „Node.js“ serverį, kuris apdoros užklausas į /topics adresą.
// Sugeneruoti HTML dokumentą su <ul> sąrašu,
// kuriame kiekvienas JSON objektas bus atvaizduotas kaip <li> elementas.
// Kiekvienas <li> turės nuorodą (<a>) į url, su title kaip tekstu.
// Jei vartotojas pasiekia /, grąžinti pradinį puslapį su nuoroda į /topics.
// Jei vartotojas bando pasiekti kitą maršrutą, grąžinti 404 Not Found.

// JSON Failas pateikiamas šiuo adresu:
// https://drive.google.com/file/d/1qsILWJri3Zjht7-RtfeC6SPsPIsymudM/view?usp=drive_link

http
  .createServer((req, res) => {
    if (req.url === "/topics") {
      const html = String(fs.readFileSync("index.htm"));
      const topics = JSON.parse(String(fs.readFileSync("data.json")));
      let htmlTopics = "";
      topics.forEach((topic) => {
        htmlTopics += `<li><a href="${topic.url}">${topic.title}</a><i> - ${topic.description}</i></li>`;
      });
      const finalHtml = html.replace("{{TOPICS}}", htmlTopics);
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(finalHtml);
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
    }
  })
  .listen(3000);
