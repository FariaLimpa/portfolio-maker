export const fetchData = async (url) => {
  try {
    const data = await fetch("http://localhost:5000/portfolio/phone/987654321");
    const allData = await data.json();
    return allData;
  } catch (error) {
    console.error(error);
  }
};
