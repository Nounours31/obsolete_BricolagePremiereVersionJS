'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-23 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-301';
    this._commitGIT = '08c864d8323778793fd983bdebe846c4ca146a81';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}