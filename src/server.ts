import app from './app';
import 'dotenv/config';

const run = () => {
    const port = process.env.PORT;
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
};

run();
