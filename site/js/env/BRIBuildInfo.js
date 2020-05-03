'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-03 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1315';
    this._commitGIT = '5a793d5c94815a33c55663192edc1db3a0009050';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}