const API_URL = "/api/potions";

const getPotions = async () => {
  try {
    const response = await fetch(API_URL);
    return await response.json();
  } catch (error) {
    console.error("Error fetching potions:", error);
    throw error;
  }
}

const createPotion = async (potion) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(potion)
    });
    return await response.json();
};
export { getPotions, createPotion };