const atualizarLocalStorage = (data: object) => {
  localStorage.data = JSON.stringify(data);
};

export { atualizarLocalStorage };
