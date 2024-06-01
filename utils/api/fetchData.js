export const fetchData = async (url) => {
  try {
    const data = await fetch(url);
    const allData = await data.json();
    return allData;
  } catch (error) {
    console.error(error);
  }
};

export const postData = async (url, data) => {
  try {
    const response = await fetch(
      "https://portfoliomaker-backend.vercel.app/portfolio",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    return response.json();
  } catch (error) {
    console.error(error);
  }
};
