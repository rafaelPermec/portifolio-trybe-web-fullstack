## Entendendo o infograma de uma store

![react-redux](images/store-info.png)

### Análise do passo a passo
![store](images/store.png)

### ⚠️ **AVISO IMPORTANTE:** A sua aplicação quebrará no primeiro momento ao executar o comando `npm start` conforme instrução abaixo. Seu objetivo é realizar as devidas implementações para a aplicação rodar corretamente.

```javascript
cd missing_store
npm install
npm start
```

Abra a aplicação no browser para ver como ela está!
Está tudo quebrado não é? 😅
Em src/store foi retirado o conteúdo no arquivo index.js.
Seu objetivo é criar o código da store para fazer a aplicação rodar corretamente com React-Redux.

Para facilitar a visualização dos estados, você pode instalar através do npm a redux-devtools-extension e acrescentar como segundo parâmetro do createStore o composeWithDevTools() que é importado do 'redux-devtools-extension': 
```javascript
npm install --save redux-devtools-extension
```
Utilizando:
```javascript
import { composeWithDevTools } from 'redux-devtools-extension';
```
**Referências:**
- Imagem garfieldLasagna: https://pixy.org/src/124/1246733.jpg.
