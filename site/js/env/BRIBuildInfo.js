'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-31 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-334';
    this._commitGIT = '6842170ba52902dd571d417b385261f3ceca68f5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}