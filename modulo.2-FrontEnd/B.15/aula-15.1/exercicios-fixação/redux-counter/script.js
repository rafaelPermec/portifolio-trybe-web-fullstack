// ====== Função que altera a interface =====
const showCountValue = (counter) => {
  const h1Element = document.getElementById("counter");
  h1Element.innerText = counter;
};

showCountValue(0);

// ========== Definir Reducer ==========
const initialState = { count: 0 };

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREASE_COUNT':
      return {...state, count: state.count + 1};
    case 'DEACREASE_COUNT':
      return {...state, count: state.count - 1};
    default:
      return state;
  }
};

// ========== Criar a Store ==========
const store = Redux.createStore(reducer);

// ========== Lendo e reagindo a mudanças do Estado Global ==========
store.subscribe(() => {
  const { count } = store.getState();
  showCountValue(count);
});

// ========== Disparar as Actions ==========
const incrementButton = document.getElementById("inc");
const decrementButton = document.getElementById("dec");

incrementButton.addEventListener("click", () => {
  store.dispatch({ type: 'INCREASE_COUNT' });
});
decrementButton.addEventListener("click", () => {
  store.dispatch({ type: 'DEACREASE_COUNT' });
});
