'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-05 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1079';
    this._commitGIT = 'cc0421fa76e1990f0713b9847488a62980d58627';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}