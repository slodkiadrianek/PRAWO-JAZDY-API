import { questionsCollection, connectToDatabase } from "../utils/database.js";

const downloadQuestion = async (num, categ = "A,B,C,D,T,AM,A1,A2,B1,C1,D1") => {
  try {
    await connectToDatabase();
    let result;
    result = await questionsCollection.findOne({
      Lp: num,
      Kategorie: categ,
    });
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export { downloadQuestion };
