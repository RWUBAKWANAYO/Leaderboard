class Score {
  constructor(user, score) {
    this.user = user;
    this.score = score;
  }

  scoreData = [];

  baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:id/scores/';

  getScore = () => {
    const recentScore = document.querySelector('.recent-score-group');
    recentScore.innerHTML = this.scoreData.map((element, index) => `<li class=${index % 2 !== 0 ? 'list-gray' : 'list-white'}>${element.user} : ${element.score}</li>`).join('');
  }

  fetchScore = async () => {
    try {
      const data = await fetch(this.baseUrl);
      const res = await data.json();
      res.result.map((item) => this.scoreData.push(item));
      return this.getScore();
    } catch (err) { return err; }
  };
}

export default Score;