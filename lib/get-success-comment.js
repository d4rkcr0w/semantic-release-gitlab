const HOME_URL = 'https://github.com/semantic-release/semantic-release';
const linkify = (releaseInfo) =>
  `${releaseInfo.url ? `[${releaseInfo.name}](${releaseInfo.url})` : `\`${releaseInfo.name}\``}`;

module.exports = (issue, releaseInfos, nextRelease) =>
  `:tada: This ${issue.merge_status ? 'MR is included' : 'issue has been resolved'} in version ${
    nextRelease.version
  } :tada: ${
    releaseInfos.length > 0
      ? `\n\nThe release is available on${
        releaseInfos.length === 1
          ? ` ${linkify(releaseInfos[0])}`
          : `:\n${releaseInfos.map((releaseInfo) => `- ${linkify(releaseInfo)}`).join('\n')}`
      }`
      : ''
  }

Your **[semantic-release](${HOME_URL})** bot :package: :rocket:`;