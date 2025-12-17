export const API_URL = "https://yashodare-nursery.onrender.com";

export const fetchPlants = async () => {
    try {
        const response = await fetch(`${API_URL}/plants`);
        if (!response.ok) throw new Error('Failed to fetch plants');
        return await response.json();
    } catch (error) {
        console.error("Error fetching plants:", error);
        return [];
    }
};

export const fetchPlantDetail = async (id) => {
    try {
        const response = await fetch(`${API_URL}/plants/${id}`);
        if (!response.ok) throw new Error('Failed to fetch plant');
        return await response.json();
    } catch (error) {
        console.error("Error fetching plant details:", error);
        return null;
    }
};
