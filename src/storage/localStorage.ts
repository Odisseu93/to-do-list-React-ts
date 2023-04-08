// salvar dados
function setDataLocalStorage<T>(key: string, data: T) {
  localStorage[key] = JSON.stringify(data);
  return;
}

// recuperar dados
const getDataLocalStorage = (key: string) => {
  if (localStorage[key] !== undefined) return JSON.parse(localStorage[key]);
  else alert("dados não encontrados!");
};

export { setDataLocalStorage, getDataLocalStorage };
