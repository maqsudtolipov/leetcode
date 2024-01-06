/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
const jobScheduling = function (startTime, endTime, profit) {
  let n = startTime.length;
  let jobs = [];

  for (let i = 0; i < n; i++) {
    jobs[i] = [startTime[i], endTime[i], profit[i]];
  }

  jobs.sort((a, b) => a[1] - b[1]);

  let dp = new Array(n);
  dp[0] = jobs[0][2];

  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], jobs[i][2]);
    for (let j = i - 1; j >= 0; j--) {
      if (jobs[j][1] <= jobs[i][0]) {
        dp[i] = Math.max(dp[i], jobs[i][2] + dp[j]);
        break;
      }
    }
  }

  return dp[n - 1];
};
