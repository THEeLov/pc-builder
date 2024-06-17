# PcAssemblies

### React Aplikácia - Návod na spustenie

Tento súbor obsahuje pokyny na spustenie a používanie React aplikácie.

**Predpoklady:**

* Docker
* npm

**Postup:**

1. **Nainštalujte závislosti:**
    Prejdite do koreňového adresára projektu a spustite príkaz:
    ```bash
    npm install
    ```

2. **Vytvorte a spustite databázový kontajner:**
    Prejdite do adresára `apps/backend` a spustite skript `database.sh`:
    ```bash
    ./database.sh
    ```

3. **Nastavte .env súbor pre Prismu:**
    Premenujte súbor `.env.example` na `.env` a upravte ho podľa vašich potrieb.

4. **Migrujte databázu:**
    Prejdite do adresára `apps/backend` a spustite príkaz:
    ```bash
    npx prisma migrate dev
    ```

5. **Naimportujte dáta do databázy:**
    Prejdite do koreňového adresára a spustite príkaz:
    ```bash
    npx nx run backend:seed
    ```

6. **Spustite backend:**
    Prejdite do koreňového adresára a spustite príkaz:
    ```bash
    npx nx serve backend
    ```

7. **Spustite frontend:**
    Prejdite do koreňového adresára a spustite príkaz:
    ```bash
    npx nx serve frontend
    ```

**Poznámky:**

* Aplikácia bude bežať na adrese `http://localhost:3000`.
* Môžete upraviť konfiguračné súbory a kód aplikácie podľa vašich potrieb.
* Pre viac informácií o Prisme a React navštívte oficiálnu dokumentáciu.

**Ďalšie zdroje:**

* [Dokumentácia Prismy](https://www.prisma.io/docs/)
* Dokumentácia React [neplatná webová adresa bola odstránená]

**Tipy:**

* Pre pohodlný vývoj odporúčame používať IDE s podporou Dockeru a Node.js.
* Pre testovanie aplikácie môžete použiť nástroje ako Postman alebo Insomnia.
* Pre nasadenie aplikácie do produkcie môžete použiť platformy ako Vercel alebo Netlify.

Dúfame, že vám tento návod pomohol!


## Project Description:
The system allows the user to select and configure a PC assembly. 
It starts by selecting office, gaming, work, high-end. 
Accordingly, it will display the basic build for that selection. 
Users the option to change the processor, operating memory, 
graphics card and possibly add peripherals or something from the 
additional menu to the PC. Each operation checks for part compatibility 
between the selected items (processors and motherboards, RAM speed, ...). 
Give options to change corresponding to the category. 
Based on the selection, the user is always shown the calculated price 
of the build and can request a summary with the configuration.

---
[Tools Used](docs/documentation/tools-used.md)

[Functionalities](docs/documentation/functionalities.md)

[How To Use Nx](docs/documentation/nx/how-to-use.md)

---
## Diagrams:
![Use Case Diagram](docs/diagrams/images/use-case.png "Use Case Diagram")

---
![ERD Diagram](docs/diagrams/images/erd.png "ERD Diagram")

---
![Class DTO Diagram](docs/diagrams/images/class-dto.png "Class DTO Diagram")