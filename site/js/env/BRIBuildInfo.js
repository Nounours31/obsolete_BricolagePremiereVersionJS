'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-07 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1087';
    this._commitGIT = '52d1d9b22d52c01f2a69d8fd95a97ba95d52482f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}