'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-03 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-1073';
    this._commitGIT = '2959af578485f88fa92df6c240613b87a10253bf';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}