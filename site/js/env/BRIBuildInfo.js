'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-14 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1603';
    this._commitGIT = '2d471207156605cca40226f728f3d88c3a6bd5a5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}