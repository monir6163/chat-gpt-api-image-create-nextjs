export default function handler(req, res) {
    res.status(200).json({ text: [{ id: 1, name: "John Doe" }] });
}
