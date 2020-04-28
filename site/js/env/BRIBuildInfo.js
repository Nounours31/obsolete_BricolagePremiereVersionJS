'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-28 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1295';
    this._commitGIT = 'd486ca737b27d4a81b1ce390276b53a475a646a3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}