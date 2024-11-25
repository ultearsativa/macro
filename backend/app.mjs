import express from 'express';  
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.mjs'; 
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); 
app.use(express.urlencoded({extended:true}));
app.use(cors({origin:"*"}));
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
