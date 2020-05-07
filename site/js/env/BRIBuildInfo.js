'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-07 12:00:08';
    this._versionBuild = 'jenkins-Bricolage-1332';
    this._commitGIT = 'a100ba729c6028b942fffa71a036c498f4bc2502';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}