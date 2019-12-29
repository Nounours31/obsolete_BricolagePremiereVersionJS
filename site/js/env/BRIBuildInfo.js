'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-29 16:00:04';
    this._versionBuild = 'jenkins-Bricolage-813';
    this._commitGIT = '268e4edb7c34aefa097326ef09a456091124275c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}