'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-11 20:00:12';
    this._versionBuild = 'jenkins-Bricolage-254';
    this._commitGIT = 'd4b0ee8b1e021110a775c8d7fa5f793d11a674dc';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}