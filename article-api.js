// Fake-API für Level 3
export async function fetchArticle(headers = {}) {
  // Simuliere Netzwerkverzögerung
  await new Promise(r => setTimeout(r, 800));
  if (headers['X-Bypass'] === '1') {
    return {
      text: `Voller Artikeltext!\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque. Suspendisse potenti.\n\nProin ac neque rutrum, dictum massa at, cursus enim. Mauris euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.\n\nHerzlichen Glückwunsch, du hast die Paywall umgangen!`
    };
  } else {
    return {
      text: 'Teaser: Um den vollen Artikel zu lesen, benötigen Sie ein Abo.'
    };
  }
} 