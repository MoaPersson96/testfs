# testfs

Docker uppgifter v.35

1. Uppgift 1: Kör en image från Docker Hub
Mål: Förstå skillnaden mellan en image och en container, och lära sig att köra en image som redan finns.
Välj en image: Gå till hub.docker.com och sök efter en officiell image. Försök med en enkel image som hello-world.
Ladda ner och kör: Använd ett enda kommando för att ladda ner och köra din image.
Kolla resultatet: Du kommer att se ett meddelande i terminalen som bekräftar att din container kördes framgångsrikt.

Skrev in i terminalen:
docker run hello-world

och fick:
docker run hello-world
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
17eec7bbc9d7: Pull complete
Digest: sha256:56433a6be3fda188089fb548eae3d91df3ed0d6589f7c2656121b911198df065
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

2.Uppgift 2: Dockerisera en egen applikation
Mål: Skapa en egen Dockerfile och förstå varje steg i byggprocessen.
Skapa ett enkelt Node.js-projekt:
Skapa en ny mapp på din dator och gå in i den.
Skapa en package.json-fil genom att köra npm init -y i terminalen.
Installera Express med npm install express.
Skapa en fil som heter server.js och använd koden från demot om ni vill.
Skapa en Dockerfile: I samma mapp, skapa en Dockerfile som tar en basimage, kopierar din kod, installerar beroenden och startar servern.
Bygg din image: Använd docker build för att bygga din image. Ge den ett namn med din användarprofil som tagg, till exempel ditt-användarnamn/min-app.
Kör din container: Använd docker run för att starta din app. Se till att du mappar portarna så att du kan nå den i webbläsaren

3. Uppgift 3: Verifiera din image på Docker Hub
Mål: Förstå hur man laddar upp och laddar ner sin image, och bekräfta att den är korrekt sparad på Docker Hub.
Pusha din image: Använd kommandot docker push för att ladda upp den image du skapade i Uppgift 2 till ditt repository på Docker Hub.
Rensa din lokala image: För att bevisa att du verkligen laddar ner imagen från Docker Hub och inte använder en lokal version, ta bort din image från din dator.
Hitta imagens ID eller namn med docker images.
Ta bort den lokala imagen med docker rmi ditt-användarnamn/min-app.
Ladda ner din image: Använd docker pull för att ladda ner din image från Docker Hub.
docker pull ditt-användarnamn/min-app.
Kör och verifiera: Använd docker run för att starta din applikation från imagen du just laddade ner. Kontrollera att den fungerar precis som när du byggde den lokalt.
