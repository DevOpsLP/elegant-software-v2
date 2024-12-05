export async function query(url: string) {
    try {
      const res = await fetch(`${import.meta.env.STRAPI_URL}/api/${url}`, {
        method: "GET",
          headers: {
              Authorization: `Bearer ${import.meta.env.STRAPI_TOKEN}`,
          }
      });
      return await res.json();
    } catch (error) {
      console.error("Response from strapi", error);
      return error;
    }
  }
  