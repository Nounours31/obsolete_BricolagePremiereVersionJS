'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-20 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-775';
    this._commitGIT = '5d25889cc0683012506bf5582d7ca049ccea18da';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}