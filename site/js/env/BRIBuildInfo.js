'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-26 12:00:04';
    this._versionBuild = 'jenkins-Bricolage-312';
    this._commitGIT = '8ac1f7e34d62006161d0ce14066b9c9cc107c70c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}