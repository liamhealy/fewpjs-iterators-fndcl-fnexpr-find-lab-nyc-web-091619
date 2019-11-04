const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (games) => {
  let winner = games.find(obj => obj.result === "W")
  return winner ? winner.year : undefined
    // if (obj.result === "W") {
    //   return obj.year;
    // }
  // })
}