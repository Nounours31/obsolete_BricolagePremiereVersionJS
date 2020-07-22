'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-22 20:00:09';
    this._versionBuild = 'jenkins-Bricolage-1638';
    this._commitGIT = '907f365a2f02477b4388fd3590cfd9673f12958c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}