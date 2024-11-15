import express from 'express';
import { createClient } from 'redis';

const app = express();
app.use(express.json());

const client = createClient();
client.connect();

app.post('/submit', async (req, res) => {
    const { problemId, code } = req.body;

    try {
        await client.lPush("submissions", JSON.stringify({ problemId, code }));
        res.json({
            message: "Code submitted successfully"
        });

    } catch (e) {
        res.status(500).json({
            message: "Internal server error"
        });
    }
});

app.listen(3000, () => {
    console.log('Server is running at port 3000 01change');
});
