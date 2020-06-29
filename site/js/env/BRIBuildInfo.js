'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-29 08:00:10';
    this._versionBuild = 'jenkins-Bricolage-1543';
    this._commitGIT = 'a2b928db3967d656c5904274c27e64cb067e0cbb';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}