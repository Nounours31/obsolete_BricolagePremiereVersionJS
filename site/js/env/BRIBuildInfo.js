'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-05 16:00:09';
    this._versionBuild = 'jenkins-Bricolage-1693';
    this._commitGIT = '9a7eff4ef2a086d1236a24c06210444fb1326ff1';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}