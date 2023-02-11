const updateFavIcon = (theme: string | null) => {
  if (!theme) return;
  const favIconElem = document.getElementById('favicon');
  favIconElem?.setAttribute('href', `/favicons/favicon-${theme}.svg`);
};

export default updateFavIcon;
