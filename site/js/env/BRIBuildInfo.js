'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-18 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-406';
    this._commitGIT = '8318b0a3f4dd104b6976db5d3df7c3505a974e9d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}