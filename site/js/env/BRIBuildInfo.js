'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-30 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1916';
    this._commitGIT = '78c00936c922426119f1c1f2f29599d893d07a3c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}