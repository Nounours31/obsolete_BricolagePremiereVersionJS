'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-20 08:00:09';
    this._versionBuild = 'jenkins-Bricolage-1751';
    this._commitGIT = '121a30dc20f8b33ad344b68f6af936af3476bb9b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}