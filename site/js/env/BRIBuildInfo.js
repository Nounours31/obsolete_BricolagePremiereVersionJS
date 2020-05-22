'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-22 12:00:09';
    this._versionBuild = 'jenkins-Bricolage-1392';
    this._commitGIT = '12ebacaf727ff0a3d95869473dff34b1ef443f9c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}