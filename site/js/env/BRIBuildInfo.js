'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-28 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-565';
    this._commitGIT = '273ee9db3aa1c99a551d0070f20de059ab7409f9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}