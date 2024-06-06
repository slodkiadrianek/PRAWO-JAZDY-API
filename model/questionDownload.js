import { questionsCollection, connectToDatabase } from "../utils/database.js";

const downloadQuestion = async (num) => {
  try {
    await connectToDatabase();
    const result = await questionsCollection.findOne({ Lp: num });
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export { downloadQuestion };
