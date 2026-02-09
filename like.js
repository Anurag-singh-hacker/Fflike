export default async function handler(req, res) {
  const { uid, key } = req.query;

  // 🔐 Tumhari API KEY
  const YOUR_KEY = "Anuragsingh";

  if (!uid || !key) {
    return res.status(400).json({
      status: false,
      message: "uid aur key required hai"
    });
  }

  if (key !== YOUR_KEY) {
    return res.status(403).json({
      status: false,
      message: "Invalid API Key"
    });
  }

  try {
    // 🔁 Original API call
    const apiUrl = `https://mukesh-ult-like.vercel.app/like?uid=${uid}&region=ind&key=UDIT`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    // ➕ Extra custom line add karna
    data.credit = "Anurag Singh Hacker 😄";

    return res.status(200).json(data);

  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Original API down hai",
      credit: "Anurag Singh Hacker 😄"
    });
  }
}