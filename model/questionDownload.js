import { questionsCollection, connectToDatabase } from "../utils/database.js";

const downloadQuestion = async (num, categ) => {
  try {
    let categRegex;
    if (categ) {
      categRegex = new RegExp(categ.replace(",", "*"));
    } else {
      categRegex = { $exists: true };
    }
    await connectToDatabase();
    let result;
    result = await questionsCollection.findOne({
      Lp: num,

      Kategorie: categRegex,
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export { downloadQuestion };
