class Score {
  constructor(id, name, score) {
    this.id = id;
    this.name = name;
    this.score = score;
  }

  scoreData = [
    {
      id: 1,
      name: 'john',
      score: 10,
    },
    {
      id: 2,
      name: 'Doe',
      score: 10,
    },
    {
      id: 3,
      name: 'will',
      score: 10,
    },
    {
      id: 3,
      name: 'smith',
      score: 10,
    },
  ]

  getScore = () => {
    const recentScore = document.querySelector('.recent-score-group');
    recentScore.innerHTML = this.scoreData.map((element, index) => `<li class=${index % 2 !== 0 ? 'list-gray' : 'list-white'}>${element.name} : ${element.score}</li>`).join('');
  }

  addScore=({ name, scoreNum }) => {
    this.scoreData.push({
      id: this.scoreData.length + 1,
      name,
      score: scoreNum,
    });
    this.getScore();
  }
}

export default Score;