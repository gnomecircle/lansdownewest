exports.onCreatePage = async ({ page }) => {
    return new Promise((resolve, reject) => {
        if (page.path.startsWith('/fr')) {
            page.layout = 'indexFR';
            // createPage(page);
        } else {
            page.layout = 'index';
        }
        resolve();
    });
  };