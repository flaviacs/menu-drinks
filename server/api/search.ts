export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);
    const searchName = query.searchName;
    const searchIngredient = query.searchIngredient;
    let search: string = "";

    if (searchName) {
      search = "s=" + searchName;
    } else if (searchIngredient) {
      const pre = search.length > 0 ? search + "&i=" : "i=";
      search = pre + searchIngredient;
    }

    if (search == "" || search == null) {
      return {
        statusCode: 404,
        statusMessage: "Adicione um termo à busca",
      };
    }

    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?${search}`,
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
