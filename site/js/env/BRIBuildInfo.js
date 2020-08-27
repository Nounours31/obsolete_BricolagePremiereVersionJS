'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-27 16:00:09';
    this._versionBuild = 'jenkins-Bricolage-1781';
    this._commitGIT = '9d980a71990a1cdca072bd7d4ad6f82e9aa9f413';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}