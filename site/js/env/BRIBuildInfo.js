'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-21 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1514';
    this._commitGIT = '9e25fe521e724ee1d95648499682b6d3df5cbf51';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}