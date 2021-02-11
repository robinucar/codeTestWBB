import axios from 'axios';
const token =
  'eFExWCgsmCX066dKSsJVmGu2HUYATekkGFcxbgnIfjPTtQ67JZrWjDnmwS3dn93p';
// fixtures data
const getFixture = async (fixtureId) => {
  return axios
    .get(
      'http://dev.webuildbots.ai:9123/fixtures?fixtureId=' +
        fixtureId +
        '&token=' +
        token
    )
    .then(async (res) => res.data)
    .catch((err) => console.error(err));
};

//layer data
const getPlayer = async (playerId) => {
  return axios
    .get(
      'http://dev.webuildbots.ai:9123/players?playerId=' +
        playerId +
        '&token=' +
        token
    )
    .then((res) => res.data)
    .catch((err) => {
      console.error(err);
    });
};

export { getFixture, getPlayer };
