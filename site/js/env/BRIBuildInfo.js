'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-27 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-927';
    this._commitGIT = 'e7ea00b8e62fdcb9795551e1f321693d763a04f5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}