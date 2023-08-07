export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);
    const data = query.list;

    if (data != "g" && data != "i" && data != "c" && data != "a") {
      return {
        statusCode: 404,
        statusMessage: "Essa lista não existe",
      };
    }

    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/list.php?${data}=list`,
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
