1. instalar o nvm

2. instalar uma versão do node

3. verificar versão do node

    ```bash
    bashnode -v
    ```

4. instalar o angular cli

    ```bash
    npm install -g @angular/cli
    ```

5. verificar versão do angular

    ``````bash
    ng version

6. para instalar typescript

    ```bash
    npm install typescript -g
    ```

7. verificar versão

    ```bash
    tsc -v
    ```

8. pra compilar só um arquivo

    ```bash
    tsc app.ts
    ```

9. para deixar compilando dinâmico

    ```bash
    tsc -w
    ```

10. executar um arquivo javascript

    ```bash
    node <nome-do-app>.js
    ```

iniciando o npm
npm init -f

importando biblioteca, o --save indica que vai ser usado em desenvolvimento e runtime
npm install --save lodash@4.14

importando biblioteca indicando que vai ser usado apenas em desenvolvimento
npm install --save-dev @types/lodash@4.14