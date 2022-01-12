const teamDolphinfirstMatchScores = [96,108,89,];
const teamKoalasfirstMatchScores = [88,91,110];

const teamDolphinSecondMatchScores = [96,108,89,];
const teamKoalasSecondMatchScores = [88,91,110];

const teamDolphinScores = [96,108,89,];
const teamKoalasScores = [88,91,110];

const  teamDolphinTotalScores = teamDolphinfirstMatchScores.reduce((a,b)=>{
  return a+b;
})
const  teamDolphinsAvgScore = ((teamDolphinTotalScores / 3).toPrecision(3));
console.log(teamDolphinsAvgScore);

const  teamKoalasTotalScores = teamKoalasfirstMatchScores.reduce((a,b)=>{
  return a+b;
})
const  teamKoalasAvgScores = ((teamKoalasTotalScores / 3).toPrecision(3));
console.log(teamKoalasAvgScores);

if (Number(teamDolphinsAvgScore) >= 100 && teamDolphinsAvgScore > teamKoalasAvgScores ) {
  console.log(`Team dolphin wins the match with ${(teamDolphinsAvgScore - teamKoalasAvgScores).toFixed(2)}`);
} else if(Number(teamDolphinsAvgScore) >= 100 && teamDolphinsAvgScore < teamKoalasAvgScores){
  console.log(`Team Koalas wins the match with ${(teamKoalasAvgScores - teamDolphinsAvgScore).toFixed(2)}`);
} else if (teamDolphinsAvgScore === teamKoalasAvgScores){
  console.log(`MATCH_DRAW`);
} else {
  console.log(`winning criteria does not match ==> Min score must be 100 or greater than `);
}
