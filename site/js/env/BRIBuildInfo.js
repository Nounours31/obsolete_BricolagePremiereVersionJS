'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-14 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1002';
    this._commitGIT = '8e70f71b33ff31947f3cf96cda1afddca149807e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}