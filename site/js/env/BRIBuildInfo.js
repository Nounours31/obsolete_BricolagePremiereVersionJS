'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-02 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-952';
    this._commitGIT = '25174e56ef9d55c2229851757e0312131a69b90d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}