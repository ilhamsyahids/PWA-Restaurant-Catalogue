const createRestaurantCategoryTemplate = (category) => `
<span>${category.name}</span>
`;

const createRestaurantCategoriesTemplate = (categories) => {
  let htmlTemplate = '';
  categories.forEach((category) => {
    htmlTemplate += createRestaurantCategoryTemplate(category);
  });
  return htmlTemplate;
};

const createRestaurantMenuTemplate = (menu) => `
<li>${menu.name}</li>
`;

const createRestaurantMenusTemplate = (menus) => {
  let htmlTemplate = '<ul>';
  menus.forEach((menu) => {
    htmlTemplate += createRestaurantMenuTemplate(menu);
  });
  htmlTemplate += '</ul>';
  return htmlTemplate;
};

export {
  createRestaurantCategoriesTemplate,
  createRestaurantCategoryTemplate,
  createRestaurantMenusTemplate,
  createRestaurantMenuTemplate,
};
