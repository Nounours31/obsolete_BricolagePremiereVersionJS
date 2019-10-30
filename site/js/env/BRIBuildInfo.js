'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-30 16:00:04';
    this._versionBuild = 'jenkins-Bricolage-573';
    this._commitGIT = 'e581c2bd8ab8e53b72975b67f5dd01e9a1e540a0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}