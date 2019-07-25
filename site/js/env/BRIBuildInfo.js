'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-25 08:00:12';
    this._versionBuild = 'jenkins-Bricolage-183';
    this._commitGIT = 'bdd98a4e94f37eb360586cc9684e707d0d450ff6';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}