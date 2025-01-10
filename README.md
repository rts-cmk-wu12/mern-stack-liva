
# Udvikling af en Webapplikation med MERN Stack og Vite

I denne opgave skal I udvikle en webapplikation, der fungerer som en simpel blogplatform. I skal bruge MERN stacken (MongoDB, Express.js, React, Node.js) og Vite som build-værktøj. Formålet med opgaven er at give jer praktisk erfaring med at bygge moderne webapplikationer og forstå, hvordan de forskellige teknologier i MERN stacken arbejder sammen.

## Opgavekrav
1. **Projektopsætning:**
   - Opret et nyt projekt ved hjælp af Vite til at konfigurere React-delen af applikationen.
   - Opsæt en Node.js server med Express.js til at håndtere backend-logikken.
   - Konfigurer MongoDB som jeres database og opret en forbindelse til den fra jeres Node.js server.

2. **Frontend:**
   - Byg en brugergrænseflade med React, der tillader brugere at oprette, læse, opdatere og slette blogindlæg.
   - Implementer routing i applikationen ved hjælp af React Router eller vite-plugin-pages.
   - Design og implementer mindst tre forskellige sider:
     - **Startside:** Viser en liste over alle blogindlæg.
     - **Detaljevisning:** Viser detaljer om et enkelt blogindlæg.
     - **Opret/Rediger:** Formular til at oprette eller redigere et blogindlæg.

3. **Backend:**
   - Opret RESTful API-endepunkter ved hjælp af Express.js til at håndtere CRUD-operationer for blogindlæg:
     - **GET /api/posts:** Hent en liste over alle blogindlæg.
     - **GET /api/posts/:id:** Hent detaljer om et enkelt blogindlæg.
     - **POST /api/posts:** Opret et nyt blogindlæg.
     - **PUT /api/posts/:id:** Opdater et eksisterende blogindlæg.
     - **DELETE /api/posts/:id:** Slet et blogindlæg.

4. **Database:**
   - Design en simpel database i MongoDB, der passer til jeres applikations behov. Brug native MongoDB driver til at interagere med databasen fra jeres Node.js server.
   - Sørg for at validere og håndtere fejl korrekt i jeres API-endepunkter.

5. **Integration:**
   - Forbind frontend og backend ved at lave API-kald fra jeres React-komponenter til jeres Express.js server.
   - Sørg for, at data flyder korrekt mellem frontend, backend og database.

6. **Ekstra funktionalitet (valgfrit):**
   - Implementer brugerautentifikation og -autorisation.

## Aflevering
- Upload jeres projekt til et GitHub repository. Husk pull request til main.
