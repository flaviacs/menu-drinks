export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);
    const ingredient = query.ingredient;
    const alcoholic = query.alcoholic;
    const category = query.category;
    const glass = query.glass;
    let filter: string = "";

    if (ingredient) {
      filter = "?i=" + ingredient;
    } else if (alcoholic) {
      const pre = filter.length > 0 ? filter + "&a=" : "?a=";
      filter = pre + alcoholic;
    } else if (category) {
      const pre = filter.length > 0 ? filter + "&c=" : "?c=";
      filter = pre + category;
    } else if (glass) {
      const pre = filter.length > 0 ? filter + "&g=" : "?g=";
      filter = pre + glass;
    }

    if (filter == "" || filter == null) {
      return {
        statusCode: 404,
        statusMessage: "Adicione um filtro para a lista",
      };
    }

    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php${filter}`,
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
