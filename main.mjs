function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));
    if (win) {
      resolve(`${player} won a prize in the draw!`);
    } else {
      reject(new Error(`${player} lost the draw.`));
    }
  });
}

const people = ["Joe", "Caroline", "Sabrina"];

const getDraws = async (people, luckyDrawCallBack) => {
  return await people.map(async (person) => {
    try {
      return { [person]: await luckyDrawCallBack(person) };
    } catch (error) {
      return { [person]: "didn't win" };
    }
  });
};

const run = async () => {
  const results = await getDraws(people, luckyDraw);
  console.log(results);
};

run();
