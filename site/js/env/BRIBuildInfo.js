'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-08 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1949';
    this._commitGIT = 'f4e3dda995bb46cc5198b879764f7c49c60f466d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}