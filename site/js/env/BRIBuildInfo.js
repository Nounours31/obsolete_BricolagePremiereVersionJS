'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-23 12:00:04';
    this._versionBuild = 'jenkins-Bricolage-1152';
    this._commitGIT = '1aa9ddcd3291dbebbeda37a60d079e59337b5368';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}