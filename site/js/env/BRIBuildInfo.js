'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-30 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-2036';
    this._commitGIT = '26976167739d39f04d88c916bf561f2bd68053b7';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}