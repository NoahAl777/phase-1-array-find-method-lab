function superbowlWin(teams) {
  const winner = teams.find(teams => teams.result === 'W')
  return !!winner ? winner.year : undefined;
}