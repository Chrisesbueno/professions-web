import { API_BASE_URL } from '@/constants/api'
export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Método no permitido" });
  }
  const { country, statusOwner } = req.query;

  try {
    const response = await fetch(
      `${API_BASE_URL}/admin/business/summaryStatus?country=${country}&statusOwner=${statusOwner}`,
      {
        method: "GET",
      }
    );

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error al enviar la solicitud", error });
  }
}
