'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-06 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-475';
    this._commitGIT = '208bf3bd6321d836eb440e2b239b3b7da94a9e44';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}