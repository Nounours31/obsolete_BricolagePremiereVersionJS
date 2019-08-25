'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-25 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-307';
    this._commitGIT = '969097ba2826e58bb73dfc3ef6d308b52f881730';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}