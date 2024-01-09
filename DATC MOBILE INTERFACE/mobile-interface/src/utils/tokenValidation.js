// tokenValidation.js
async function validateToken(token) {
  try {
    const response = await fetch("http://localhost:5000/api/token/validate", {
      method: "POST",
      headers: {
        // prettier-ignore
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Token validation failed");
    }

    return true;
  } catch (error) {
    console.error("Error validating token:", error);
    return false;
  }
}

export default validateToken;
