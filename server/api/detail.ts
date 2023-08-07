export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);
    const ingredient = query.ingredient;
    const cocktail = query.cocktail;
    let filter: string = "";

    if (ingredient) {
      filter = "?iid=" + ingredient;
    } else if (cocktail) {
      filter = "?i=" + cocktail;
    }

    if (filter == "" || filter == null) {
      return {
        statusCode: 404,
        statusMessage: "Adicione um filtro para a lista",
      };
    }

    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php${filter}`,
      {
        method: "GET", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await response?.json();
    return result.drinks;
  } catch (error: any) {
    console.error("Error:", error);
    return {
      statusCode: 400,
      statusMessage: "Ocorreu um erro em sua busca. Tente novamente mais tarde",
    };
  }
});
