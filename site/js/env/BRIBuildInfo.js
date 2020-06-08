'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-08 12:00:09';
    this._versionBuild = 'jenkins-Bricolage-1460';
    this._commitGIT = 'c47e846e99e022a1f1f336b2a9fb22eb4841ac46';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}