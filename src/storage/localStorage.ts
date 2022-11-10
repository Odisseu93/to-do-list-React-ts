const atualizarLocalStorage = (data: object) => {
  localStorage.setItem(
    "card" + localStorage.length.toString(),
    JSON.stringify(data)
  );
};

export { atualizarLocalStorage };
