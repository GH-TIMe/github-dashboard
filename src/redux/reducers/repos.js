const initialState = {
  isLoaded: false,
  repos: [],
};

function getShortVersionOfStars(stars) {
  return stars >= 1000
    ? +(+(stars / 1000).toFixed(1)).toPrecision(3) + "k"
    : stars;
}

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const updateInfo = {
  days: {
    value: 1000 * 3600 * 24,
    output: (days) =>
      days === 1 ? "Updated yesterday" : `Updated ${days} days ago`,
  },
  hours: {
    value: 1000 * 3600,
    output: (hours) =>
      hours === 1 ? "Updated 1 hour ago" : `Updated ${hours} hours ago`,
  },
  minutes: {
    value: 1000 * 60,
    output: (minutes) =>
      minutes === 1 ? "Updated 1 minute ago" : `Updated ${minutes} minutes ago`,
  },
  seconds: {
    value: 1000,
    output: (seconds) =>
      seconds === 1 ? "Updated 1 second ago" : `Updated ${seconds} seconds ago`,
  },
  milliseconds: {
    value: 1,
    output: () => "Updated now",
  },
};

function getDateInfo(value = null) {
  const date = value === null ? new Date() : new Date(value);
  return [date, date.getMonth(), date.getFullYear()];
}

function getShortVersionOfCommitDate(date) {
  const [today, todayMonth, todayYear] = getDateInfo();
  const [commitDate, commitMonth, commitYear] = getDateInfo(date);

  if (todayMonth === commitMonth && todayYear === commitYear) {
    const dateDifference = +today - +commitDate;
    for (let key in updateInfo) {
      const { value, output } = updateInfo[key];
      if (dateDifference >= value) {
        return output(Math.round(dateDifference / value));
      }
    }
  } else {
    const outputDate = `Updated on ${commitDate.getDate()} ${
      months[commitMonth]
    }`;
    return todayYear === commitYear
      ? outputDate
      : outputDate + ` ${commitYear}`;
  }
}

const repos = (state = initialState, action) => {
  switch (action.type) {
    case "SET_REPOS": {
      return {
        ...state,
        repos: action.payload.items.map(
          ({
            id,
            stargazers_count,
            html_url,
            description,
            name,
            owner,
            pushed_at,
            contributors_url,
            languages_url,
            created_at,
          }) => ({
            id,
            repoName: name,
            repoNameUrl: html_url,
            authorName: owner.login,
            authorUrl: owner.html_url,
            avatarUrl: owner.avatar_url,
            description,
            contributorsUrl: contributors_url,
            languagesUrl: languages_url,
            stars: getShortVersionOfStars(stargazers_count),
            starsUrl: `https://github.com/${owner.login}/${name}/stargazers`,
            lastCommit: getShortVersionOfCommitDate(created_at && pushed_at),
          })
        ),
      };
    }
    case "SET_TOPICS": {
      const reposWithTopics = state.repos.map((repo, index) => ({
        ...repo,
        topics: action.topics[index] ? action.topics[index].data.names : [],
      }));
      return {
        ...state,
        repos: reposWithTopics,
        isLoaded: true,
      };
    }
    case "SET_LOADING_STATUS": {
      return {
        ...state,
        isLoaded: action.loading,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default repos;
