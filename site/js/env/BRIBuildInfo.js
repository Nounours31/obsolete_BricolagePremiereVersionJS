'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-27 12:00:09';
    this._versionBuild = 'jenkins-Bricolage-1412';
    this._commitGIT = '4cbc02bf4cb22b8afc056d3d10c806bccd7dadf2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}