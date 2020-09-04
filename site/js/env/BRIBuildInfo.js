'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-04 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-1814';
    this._commitGIT = '8bc21368c3535621b497badfd0409f7123d61433';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}