'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-21 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1268';
    this._commitGIT = '28bdc643b276ed1fb60603be3d6444ef1e9d8289';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}