'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-24 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-1156';
    this._commitGIT = '06b546accd4fe84f2721a398e7c29d7a2b03cdf8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}